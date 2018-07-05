const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

let pizzas = [
  { id: "1", name: "pepperoni pizza", price: 20 },
  { id: "2", name: "hawaiian pizza", price: 16 }
];

app.use(bodyParser());

app.get("/", (req, res) => {
  res.json("hello pizzas");
});
app.get("/pizzas", (req, res) => {
  res.json(pizzas);
});

app.get("/pizzas/:id", (req, res) => {
  res.json(pizzas.find(element => element.id == req.params.id));
});

app.post("/pizzas", (req, res) => {
  pizzas = [...pizzas, req.body];
  res.json(req.body);
});

app.put("/pizzas/:id", (req, res) => {
  pizzas = pizzas.map(pizza => {
    const idOfRequestedPizza = req.params.id;
    if (pizza.id === idOfRequestedPizza) return Object.assign(pizza, req.body);
    else return pizza;
  });

  res.json(pizzas);
});

app.delete("/pizza/:id", (req, res) => {
  pizzas = pizzas.filter(pizza => pizza.id != req.params.id);
  res.json(pizzas);
});

module.exports = app 