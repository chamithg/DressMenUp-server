const CartController = require("../controllers/cart.controllers");

module.exports = (app) => {
  app.get("/api/cart/items", CartController.findAllItems);
  app.post("/api/cart/items/add", CartController.CreateNewItem);
  app.get("/api/cart/items/:userId", CartController.findOneItem);
  app.put("/api/cart/items/:id/update", CartController.updateOneItem);
  app.delete("/api/cart/items/:id/delete", CartController.deleteOneItem);
};
