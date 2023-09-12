var express = require('express');
var app = express();

const dotenv = require('dotenv');
dotenv.config();

// const jwt = require('jsonwebtoken');


// const { authenticateToken } = require('./auth/auth');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  next();
});


// app.use((req, res, next) => {
  
//   const authHeader = req.header('Authorization');
// console.log(authHeader);
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   const token = authHeader.split(' ')[1];
//   console.log(token);

//   try {
//     req.user = { token };
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// });



const { create } = require('./handlers/create')
app.post('/create', create);
//app.method(route,securityRules,callback)

const { readAll } = require('./handlers/readAll')
app.get('/read/all', readAll);

const { updated } = require('./handlers/updated')
app.patch('/update/:id', updated);

const { deleted } = require('./handlers/deleted');
app.delete('/delete/:id', deleted);




app.get('/read/:id', async (req, res) => {
  try {

    const userData = db.collection("user").doc(req.params.id);
    const response = await userData.get();

    return res.status(200).send(response.data());

  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
});



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Demo project at: ${PORT}!`);
});

