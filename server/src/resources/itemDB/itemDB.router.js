import { Router } from "express";
import items from "./itemDB";

const router = Router();

router.get('/', (req, res) => {
  const raidItems = items.filter(i => i.itemLevel >= 75 && i.requiredLevel === 60 && i.quality === 'Epic').sort((a, b) => {
    return a.itemLevel - b.itemLevel;
  });
  try {
    res.status(200).json(raidItems);
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Something\'s amiss with / route" });
  } 
});

router.get('/:name', (req, res) => {
  try {
    const item = items.filter(i => {
      if (i.uniqueName === req.params.name) {
        return {
          name: i.name,
          icon: i.icon
        }
      }
    });
    res.status(200).json({ item });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "Something bad happened with name route" });
  }
});
export default router;