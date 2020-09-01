import config from "../config";
import { User } from "../resources/user/user.model";
import jwt from "jsonwebtoken";

export const newToken = (user) => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp,
  });
};

export const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export const signup = async (req, res) => {
  const { name, email, realm, password } = req.body;
  if (!name || !email || !realm || !password) {
    return res.status(400).send({ message: "No fields can be blank" });
  }
  try {
    const user = await User.create(req.body);
    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (error) {
    return res.status(500).end();
  }
};

export const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: "Fields cannot be blank" });
  }

  const invalid = { message: "Invalid email or password" };

  try {
    const user = await User.findOne({ email: req.body.email })
      .select("email password")
      .populate("characters")
      .exec();
    if (!user) {
      return res.status(401).send(invalid);
    }
    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).end();
  }

  const token = bearer.split("Bearer ")[1].trim();

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (error) {
    return res.status(401).end();
  }
  const user = await User.findById(payload.id)
    .select("-password")
    .lean()
    .exec();
  if (!user) {
    return res.status(401).end();
  }
  req.user = user;
  next();
};