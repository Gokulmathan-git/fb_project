const { db } = require("../util/admin");

exports.deleted = async (req,res)=>{
    try {
        const id = req.params.id;
        const response = await db.collection("user").doc(id).delete();
        return res.status(200).send(response);
    
      } catch (error) {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }

}