var admin = require("firebase-admin");

var serviceAccount = require(process.env.SERVICE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { admin, db };
