import jwt from "jsonwebtoken";

export const jwtVerify = (requiredRole) => (req, res, next) => {
  const token = req.cookies.acToken || req.cookies.adminAcToken;

  if (!token) return res.status(403).json({ err: "Access denied" });

  jwt.verify(token, process.env.ACCESS_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ err: "Invalid token" });
    if (decoded.role !== requiredRole) {
      return res.status(403).json({ err: "Access denied for your role" });
    }
    req.user = decoded; // Add user info to request
    next();
  });
};
