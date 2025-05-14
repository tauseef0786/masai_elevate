import jwt from "jsonwebtoken";

const SECRET = "your_jwt_secret"; // Store in .env ideally

const generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: "1h" });

const verifyToken = (token) => jwt.verify(token, SECRET);

export { generateToken, verifyToken };
