const { db } = require("../util/admin");

exports.updated = async (req, res)=>{
    try {
        const id = req.params.id;
        const info = req.body;
        const response = await db.collection("user").doc(id).update(info);
        return res.status(200).send(response);
    
      } catch (error) {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
};