import { Router } from 'express';
import bcrypt from 'bcryptjs';
import Brand from '../models/Brand.js';

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, description, niche, website } = req.body;
    const existing = await Brand.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Brand already exists' });
    const passwordHash = await bcrypt.hash(password, 10);
    const brand = await Brand.create({ name, email, passwordHash, description, niche, website });
    res.status(201).json({ id: brand._id, name: brand.name, email: brand.email });
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const brand = await Brand.findOne({ email });
    if (!brand) return res.status(401).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, brand.passwordHash);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ id: brand._id, name: brand.name, email: brand.email });
  } catch (err) {
    next(err);
  }
});

export default router;

