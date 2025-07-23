import jwt from "jsonwebtoken";

const isAuthentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "user not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "invalid token",
      });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    res.status(500).json({
      message: `authentication middleware server error ${error}`,
    });
  }
};
export default isAuthentication;
