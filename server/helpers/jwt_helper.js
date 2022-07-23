const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();
const verifyAccessToken = async (accessToken) => {
    const { userId } = jwt.verify(accessToken, process.env.JWT_SECRET);
    return userId;
};
module.exports = { verifyAccessToken };
