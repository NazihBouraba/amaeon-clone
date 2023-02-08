const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51MYM3hLuG8lt0yxG7pSA1kNve4QtE4epZ5ZOkcZmt2mz3pistSwZXYLOkRSVkTpan5sNmDyeFmPGGQx5YqGy6d7C0070mfYfSG");

// Api

// -App config 
const app = express();

// -Middlewares  
app.use(cors({ origin: true }));
app.use(express.json());

// -Api Routes
app.get("/", (request, response) => response.status(200).send("hello word"))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunites of currency
        currency: "eur"
    })

    // created 201 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// -Listen command 
exports.api = functions.https.onRequest(app);




// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
