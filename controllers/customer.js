const db = require("../config/db");

exports.getAllCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, result) => {
    if (error) {
      console.log("Error from customers", error);
    }
    console.log(result);
    res.json(result);
  });
};
exports.createCustomers = (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO customers(name,email) values(?,?)",
    [name, email],
    (error, result) => {
      if (error) {
        console.log("Error from customers", error);
      }
      console.log(result);
      res.json({
        message: "Customer created successfully",
      });
    }
  );
};
exports.getCustomersById = (req, res) => {
  const id = req.params.id;
  db.query("select * from customers where id=?", [id], (error, result) => {
    if (error) {
      console.log("Error from customers", error);
    }
    console.log(result);
    res.json(result[0]);
  });
};
exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  db.query(
    "update customers set name=?, email=? where id=?",
    [name, email, id],
    (error, result) => {
      if (error) {
        console.log("Error from customers", error);
      }
      console.log(result);
      res.json("Customer seccessfully updated");
    }
  );
};
exports.deleteCustomer = (req, res) => {
  const id = req.params.id;

  db.query("delete from customers where id=?", [id], (error, result) => {
    if (error) {
      console.log("Error from customers", error);
    } else if (result.affectedRows == 0) {
      res.json("User doesn't exists");
    } else {
      console.log(result);
      res.json("Customer seccessfully deleted");
    }
  });
};
