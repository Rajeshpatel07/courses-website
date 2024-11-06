import { verify } from "jsonwebtoken";

export const jwtVerify = (req, res, next) => {
  const { acToken } = req.cookie;
  if (!acToken) return res.status(402).json({ err: "unAuthroized" });

  verify(acToken, process.env.ACCESS_SECRET, (err, payload) => {
    if (err) return;
    console.log(payload);
    next();
  });
};
