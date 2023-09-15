import jwt from "jsonwebtoken";
//generate token. payload could be an object literal, buffer or string representing valid JSON
//Returns the JsonWebToken as string
const generateToken = (id) => {
  const hashed = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  //console.log(hashed);
  return hashed;
};

export default generateToken;
