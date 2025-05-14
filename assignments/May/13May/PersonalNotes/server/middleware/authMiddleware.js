import { verifyToken } from "../utils/jwt.js";

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or invalid" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token); 
    req.user = decoded; 
    next(); // Continue to the next middleware/route
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}

export default authenticate;
