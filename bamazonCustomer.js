var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  displayProducts();
});

function displayProducts() {
  console.log("Displaying all products...\n");
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);

    startOrder();
  });
}

function startOrder() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
      inquirer
      .prompt([
        {
          name: "item_id",
          type: "input",
          message: "What is the ID of the product you want to buy?"
        },
        {
          name: "units",
          type: "input",
          message: "How many units of the product would you like to buy?"
        }
      ]).then(answer => {
          var exist;
          for (var i = 0; i<res.length;i++){

            if (parseInt(answer.item_id) === res[i].item_id && parseInt(answer.units) <= res[i].stock_quantity) {
                  exist = true
                  connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: res[i].stock_quantity - parseInt(answer.units)
                      },
                      {
                        item_id: answer.item_id
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                    }
                  );
                  connection.end()
                  return console.log("Thank you! Your total cost is $" + parseInt(answer.units) * res[i].price);
            }
            else if (parseInt(answer.item_id) === res[i].item_id){
                 exist = true
                 connection.end()
                 return console.log("Not enough units in stock!")
            }
            else {
                 exist = false;
            }
          }
          if (exist === false){
              console.log("Item doesn't exist");
          }
          connection.end()
      })
    });

}