const projectmodel = require("../model/model");
const bcrypt = require("bcrypt")
const register = async (req , res) => {
    const payLoad = req.body
    const hashPassword = await bcrypt.hash(payLoad.password, 10)
    console.log(hashPassword);
}

const login = async () => {

}

module.exports = {
    register,
    login,
}