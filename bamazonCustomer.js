// Require MySQL and prompt NPM packages
var mysql = require('mysql');
var prompt = require('prompt');
    
    transaction = [];

// Create a connection to the database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bamazon_db',
    multipleStatements : true
});

// Call on the connection funciton
connection.connect();

connection.query('SELECT * FROM products', function(err, results) {
    if (err) {
      console.error("error connecting: "+err.stack)
      makeTable();

    } else { 
    
      for (var i = 0; i < results.length; i++) {
        console.log('Product ID: ', results[i].item_id);
        console.log('Product Name: ', results[i].product_name);
        console.log('Price: ', results[i].price);
        }
      customerBuy(); 
    }
});

// Function to inquire what the customer would like to buy from the database choices available
function customerBuy(){
  var productInfo = {
    properties: {
      item_id: {description: ' Chose by typing ID'},
      stock_quantity: {description: ' Quantity: How many items? '}
    },
  };
    
  prompt.start();
    prompt.get(productInfo, function (err, res){
      var purchase = {
        item_id: res.item_id,
        stock_quantity: res.stock_quantity
      };

    transaction.push(purchase);
    
    // Take a look at the table and see if the quantity ordered is less than the quantity on hand and confirm order
    connection.query('SELECT * FROM products WHERE item_id=?', transaction[0].item_id, function(err, res){
      if (res[0].stock_quantity >= transaction[0].stock_quantity) {  
        // Repeat order back customer at console window
        console.log("Your order is " + res[0].product_name);    
        console.log("TOTAL = $" + (transaction[0].stock_quantity*res[0].price));
        stock_quantity_left = res[0].stock_quantity - transaction[0].stock_quantity;
        connection.query('UPDATE products SET stock_quantity ='+ stock_quantity_left + ' WHERE item_id ='+ transaction[0].item_id, function(err, res){
        // Give order confirmation message
        console.log("Your order has been confirmed.  Thank you.");
        connection.end();
      });
      // If the order exceeds the amount on hand, inform customer it is out of stock
      } else {
          console.log("Our apologies but we are currently out of stock in that item....we'll be back soon!");
          connection.end();
      }
    });
  });
};