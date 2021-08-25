 

// defined miriamshttp variable and added string name for the http package (shared code) from node.js which is a virtual object (library)
let mbhttp = require("http");

// use dot notation in javascript to access an object and its methods  (commands) and properties
// createServer() is a method (function) of the http package which sets up URL which can receive requests over internet. It takes some arguments to make it provide a useful http server. 
// 1: function (block of code) that will be run whenever the server receives an http request

let mbserver = mbhttp.createServer( 
  //mbserver variable serves as container by way of equalsign for http object which will be a server created by createServer method
  // createServer() uses function below to run when a request comes in. http package inside of node gives the function two values.
 function( mbrequest, mbresponse//function is a keyword and is followed by locally declared variables
  ) {
   console.log( mbrequest.url );
//console will display url property (value) of request variable (object) depending on what text is
    let mbtext;//declare variable
    if ( mbrequest.url === "/hey" ) {
      mbtext = "How are you today?";
   } else {
      mbtext = "Do we know each other?";
   }

   // mbtext = mbtext + " I don't usually talk to strangers";

    // writeHead() creates an http response header, including the status code (200 OK), the content type
    mbresponse.writeHead( 200, { "Content-Type": "text/plain" } );
    //myresponse is an object containing a method which takes a code and another object value ( data structure) defined within the curly braces as having two strings as values.

   //  end() method returns some data and closes the response (sends it)
    mbresponse.end( mbtext + "\n" );
  }

 );
//mbserver holds instance of server object 
// ask http to start listening on a tcp port for incoming http requests
// listen() takes 2 args: 1: tcp port #, string of the ip address to listen (0.0.0.0)
mbserver.listen(8080, "0.0.0.0");

console.log("Here is Miriam's server");
//quoted text will be output in console

