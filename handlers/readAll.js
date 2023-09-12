const { db } = require("../util/admin");

exports.readAll = async (req, res)=>{
    try {
        const userData = db.collection("user");
        const response = await userData.get();
        userData.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            
            return res.status(200).json(data);
        });
        // let responseArr = [];
        // response.forEach(doc => {
        //   responseArr.push(doc.data());
        // });
        // return res.status(200).send(responseArr);
    
      } catch (error) {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
};