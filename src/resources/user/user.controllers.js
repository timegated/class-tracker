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

export const getUser = async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await (await User.findById({ _id }))
      .populate("characters")
      .execPopulate();
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: "request failed inside getAllUsers" });
  }
};
