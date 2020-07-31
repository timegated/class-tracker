import {
  getItemSubClass,
  getItemSlots,
  armorFilter,
  itemFilter
} from './itemDB';
import { Router } from 'express';

const router = Router();

// search route for specific armor types
router.get(['/:class', '/:name', '/:slot'], (req, res) => {
  const type = req.params;
  const subClass = getItemSubClass(armorFilter, type.class);
  console.log(type.class);
  console.log(req.params);
  res.status(200).json(subClass);
  

  // switch (type.class || type.name || type.slot) {
  //   case 'plate':
  //     return res.status(200).json(plate);
  //   case 'mail':
  //     return res.status(200).json(mail);
  //   case 'cloth':
  //     return res.status(200).json(cloth);
  //   case 'leather':
  //     return res.status(200).json(leather);
  //   case 'leather':
  //     return res.status(200).json(leather);
  //   case type.slot:
  //     return getItemSlots(plate, type.slot)
  //   default:
  //     return res.status(400).json({msg: 'Fall-through to default statement'});
  // }
});

export default router;