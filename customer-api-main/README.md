# API handling the GET and POST requests for the customer database 
This is a simple demonstation of a Node + Express API which handles GET & POST requests for a restraunt web application.

This application contains error handling and also uses nodemon which restrains the developer to run the server over and again. In order to start the server, you need o enter the command:

### npm start

## The GET request:

### 1. '/customers'
The GET request made to '/customers' will fetch you all the deatils from the customer database
### 2. '/customers/customerID'
The GET request made to '/customers/customerID' will fetch you all the deatils from the customer database, and check if the customer is a VIP customer or not depending upon the customeRID being passed.

## The POST request:

### 1. '/products'
The POST request made to '/customers' will insert the full name, email address and a message to the deatils of the customer database 