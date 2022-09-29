// gets express framework (node)
const express = require("express")
// gets 
const https = require("https")
// allows us to get data from the html elements
const bodyParser = require("body-parser")


// uses express to connect with any requests
const app = express();

// activete body parser
app.use(bodyParser.urlencoded({extended: true}))



// whenever a user goes to the page we send back a request
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html" )


    //   !!!!!!!!!!!!!!!!!!!we can only have one send request per get request!!!!!!!!!!!!!!!!!!!!!!!!!!
    // res.send("Server is up and runnig")
  })


app.post("/", function(req, res) {

    // we must include https
    const url = "https://v2.jokeapi.dev/joke/Programming?type=single" 

      // how we grab data from api
  https.get(url, function (response) {
    console.log(response.statusCode)

    // how we manipulate the data to be displayed
    response.on("data", function(data) {

        // gives us an object of the json object
     const jokeData = JSON.parse(data)

     const oneLineJoke = jokeData.joke;

     const iconLink = "to be added"

    //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! BRILLIANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     res.write("here is joke pogO")
     res.write(oneLineJoke)
    //  kind of like a return
     res.send();
    })
  })
})


  app.listen(3000, function () {
    console.log("Server is running on port 3000")
  })