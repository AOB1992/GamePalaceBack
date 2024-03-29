console.log("entrando a mercadopago.js")
const { Router } = require("express");
const mercadopago = require("mercadopago");
const router = Router();
require("dotenv").config();
MERCADOPAGO_KEY = "TEST-7243261396680960-020318-90f04e08ecb5b9150bffd30a7efb7eb5-214413477"
mercadopago.configure({ access_token: MERCADOPAGO_KEY });
console.log("2entrando a mercadopago.js")
router.post("/", (req, res) => {
  const prod = req.body;
  let preference = {
    items: [],

    back_urls: {
      success: "https://gp-front.vercel.app/purchase-success",
      failure: "https://gp-front.vercel.app/home",
      pending: "https://gp-front.vercel.app/home",
    },
    auto_return: "approved",
    binary_mode: true, //no permite un pending, pending sería pago en efectivo, ejemplo rapipago.
  };
console.log("3entrando a mercadopago.js")
  prod?.forEach((prod) => {
    preference.items.push({
      title: prod.title,
      currency_id: "USD",
      quantity: prod.quantity,
      price: prod.price,
      unit_price: prod.price,
    });
  });

  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(201).send({ response }))
    .catch((error) => res.status(400).send({ error: error }));
});

router.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = router;
