import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "API funcionando"
    });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  })
})

app.post("/transactions", (req, res) => {
  const bodyInfo = req.body;

  let amount = bodyInfo.amount;
  let description = bodyInfo.description;

  console.log("Amount: ", amount);
  console.log("Description: ", description);

  res.status(201).json({
    message: "Transaction created"
  })
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});