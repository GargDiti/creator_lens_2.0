import { Router } from 'express';
import Creator from '../models/Creator.js';
import { generateInsights } from '../services/insightService.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { search, niche } = req.query;
    const filter = {};
    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }
    if (niche) {
      filter.niche = niche;
    }
    const creators = await Creator.find(filter).sort({ authenticityScore: -1 });
    res.json(creators);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const creator = await Creator.findById(req.params.id);
    if (!creator) return res.status(404).json({ message: 'Creator not found' });
    res.json(creator);
  } catch (err) {
    next(err);
  }
});

router.post('/recommendations', async (req, res, next) => {
  try {
    const { niche, platform } = req.body;
    const filter = {};
    if (niche) filter.niche = { $regex: niche, $options: 'i' };
    const creators = await Creator.find(filter).sort({ authenticityScore: -1 }).limit(5);
    const response = creators.map((creator) => ({
      creator,
      aiInsights: generateInsights(creator, { platform, platformLabel: platform?.toUpperCase() })
    }));
    res.json(response);
  } catch (err) {
    next(err);
  }
});

export default router;
