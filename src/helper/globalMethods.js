import dotenv from "dotenv"
var CryptoJS = require("crypto-js");
dotenv.config()
export const encryptData=(data)=>{
const encryptedData =  CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.REACT_APP_MY_SECRET_KEY
  ).toString();
  return encryptedData
} 
export const decrypteddata = (data)=>{
    var bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_MY_SECRET_KEY);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData
}