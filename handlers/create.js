const { db } = require("../util/admin");

exports.create = async (req , res) =>{
    try {
        const {id , name , lastname} = req.body;
        const info = {
          name: name,
          lastname: lastname
        };
        const response = db.collection("user").doc(id).set(info);
        return res.status(200).send(response);
    
      } catch (error) {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
};