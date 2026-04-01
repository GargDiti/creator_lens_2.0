import { Router } from 'express';
import Report from '../models/Report.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const reports = await Report.find()
      .populate('creator', 'name niche')
      .populate('brand', 'name');
    res.json(reports);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (err) {
    next(err);
  }
});

export default router;

