import {
  searchItems,
  searchItemSlots,
  searchWeapons
} from './itemDB';
import { Router } from 'express';

const router = Router();

// search route for specific armor types
router.get('/:class', (req, res) => {
  try {
    const itemClass = req.params.class;
    const items = searchItems(itemClass);
    console.log(req.params);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});

router.get('/:class/:slot', (req, res) => {
  try {
    const itemClass = req.params.class;
    const slot = req.params.slot;
    console.log(req.params);
    const slots = searchItemSlots(itemClass, slot);
    res.status(200).json(slots);
  } catch (error) {
    console.error(error)
    res.status(400).end();
  }
});

router.get('/:weapontype', (req, res) => {
  try {
    const weapon = req.params.weapontype;
    console.log(req.params);
    const weapons = searchWeapons(weapon);
    res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
});
export default router;