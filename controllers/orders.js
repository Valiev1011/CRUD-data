const db = require("../config/db");

exports.getAllorders = (req, res) => {
  db.query(
    "select * from orders join flowers on flowers.id=orders.flower_id join customers on customers.id=orders.customer_id",
    (error, result) => {
      if (error) {
        console.log("ordersdan error", error);
      }
      res.json(result);
    }
  );
};

exports.postOrder = (req, res) => {
  console.log("sadf");
  const { customer_id, flower_id, quantity } = req.body;
  db.query(
    "INSERT INTO orders(customer_id,flower_id,quantity) values(?,?,?)",
    [customer_id, flower_id, quantity],
    (error, result) => {
      if (error) {
        console.log("ordersdan error", error);
      }
      console.log(result);
      res.json("Order created successfully");
    }
  );
};
exports.getOrdersById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM orders WHERE id=?", [id], (error, result) => {
    if (error) {
      console.log("error from orders", error);
    }
    res.json(result);
  });
};
exports.updateOrdersById = (req, res) => {
  const id = req.params.id;
  const { customer_id } = req.body;
  db.query(
    "update orders set customer_id=? where id=?",
    [customer_id, id],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      res.json({ message: "Successfully updated" });
    }
  );
};
exports.deleteOrdersById = (req, res) => {
  const id = req.params.id;
  db.query("delete from orders where id=?", [id], (error, result) => {
    if (error) {
      console.log(error);
    } else if (result.affectedRows == 0) {
      res.json("order doesn't exists");
    } else {
      res.json({ message: "Order successfully deleted" });
    }
  });
};
