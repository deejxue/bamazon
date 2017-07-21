
var mysql = require('mysql');
var prompt = require('prompt');
    
    transaction = [];

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'Bamazon',
    multipleStatements : true
});

connection.connect();

connection.query('SELECT * FROM Products', function(err, results) {
    if (err) 
      console.error("error connecting: "+err.stack);}
    makeTable();

    else if { 
    
    for (var i = 0; i < results.length; i++) {
      console.log('Product ID: ', results[i].ItemID);
      console.log('Product Name: ', results[i].ProductName);
      console.log('Price: ', results[i].Price);
    }
    cTransaction(); 
});

function cTransaction(){
  var productInfo = {
    properties: {
      ItemID: {description: ' Chose by typing ID'},
      Quantity: {description: ' Quantity:Num of item ? '}
    },
  };
    
  prompt.start();
    prompt.get(productInfo, function (err, res){
      var purchase = {
        ItemID: res.ItemID,
        Quantity: res.Quantity
      };

    transaction.push(purchase);
            
    connection.query('SELECT * FROM Products WHERE ItemID=?', transaction[0].ItemID, function(err, res){
      if (res[0].StockQuantityQuantity >= transaction[0].Quantity) {      
        console.log('TOTAL'+ (transaction[0].Quantity*res[0].Price));
        StockQuantityLeft = res[0].StockQuantityQuantity - transaction[0].Quantity;
        connection.query('UPDATE Products SET StockQuantityQuantity ='+ StockQuantityLeft + ' WHERE ItemID ='+ transaction[0].ItemID, function(err, res){
        console.log("Order Confrimed");
        connection.end();
      });
      } else {
          console.log("We are currently out of stock....we'll be back soon!");
          connection.end();
      }
    });
  });
};