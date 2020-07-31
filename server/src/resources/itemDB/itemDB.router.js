import {
  searchItems,
  searchItemSlots,
  searchWeapons
} from './itemDB';
import { Router } from 'express';

const router = Router();

// search route for specific armor types
router.get('/:class', (req, res) => {
  const subclass = req.params.class;
  const subClass = searchItems(subclass);
  console.log(req.params);
  res.status(200).json(subClass);
});

router.get('/:class/:slot', (req, res) => {
  const subclass = req.params.class;
  const slot = req.params.slot;
  console.log(req.params);
  const slots = searchItemSlots(subclass, slot);
  res.status(200).json(slots);
});

router.get('/:weapon/:subclass', (req, res) => {
  const weapon = req.params.weapon;
  const subclass = req.params.subclass;
  console.log(req.params);
  const weapons = searchWeapons(weapon, subclass);
  res.status(200).json(weapons);
});
export default router;