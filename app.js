const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

let pizzas = [
  { id: "1", name: "pepperoni pizza", price: 20 },
  { id: "2", name: "hawaiian pizza", price: 16 }
];

app.use(bodyParser());

app.get("/pizza", (req, res) => {
  res.send(pizzas);
});

app.get("/pizza/:id", (req, res) => {
  res.send(pizzas.find(element => element.id == req.params.id));
});

app.post("/pizza", (req, res) => {
  pizzas = [...pizzas, req.body];
  res.send(pizzas);
});

app.put("/pizza/:id", (req, res) => {
  pizzas = pizzas.map(pizza => {
    const idOfRequestedPizza = req.params.id
    
    if (pizza.id === idOfRequestedPizza) return Object.assign(pizza, req.body);
    else return pizza;
  });

  res.send(pizzas);
});

app.delete("/pizza/:id", (req, res) => {
  pizzas = pizzas.filter(pizza => pizza.id != req.params.id);
  res.send(pizzas);
});

app.listen(PORT, () => {
  console.log(`awesome express pizza app has started on PORT ${PORT}`);
});
