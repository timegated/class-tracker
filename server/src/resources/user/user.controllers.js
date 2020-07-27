import { crudControllers } from "../../utils/crud";
import { User } from "./user.model";

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).json({ data: user });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export default crudControllers(User);