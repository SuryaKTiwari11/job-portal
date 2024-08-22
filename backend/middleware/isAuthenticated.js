import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "user not authenticated",
        success: false,
      });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: " Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log("error", error);

    return res.status(400).json({});
  }
};

export default isAuthenticated;

/*imagine you have a secret password that lets you into a special club 
(the club is like a website, and the password is like a token).
 When you show up at the club door, a guard 
 (that's your isAuthenticated function) checks to see
  if you have the secret password. If you don't have it,
   the guard says, "Sorry, you can't come in" (that's the 401 error).
If you do have the password, the guard checks if it's real (that's jwt.verify). If it is, the guard writes down your name (that's like adding req.id to the request) and lets you into the club to have fun (that's next()). If your password is fake, the guard still says, "Nope, you can't come in" and writes down what happened so people know (that's logging the error).






 */
