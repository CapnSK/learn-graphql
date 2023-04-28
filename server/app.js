const express = require("express")
const app = express();
var cors = require('cors')

const portNum = 8080;
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kulkarnisankalp21:SKsk%4012_@cluster0.h9todqn.mongodb.net/learn-graphql?retryWrites=true&w=majority");

mongoose.connection.once("open", ()=>{
    console.log("Connected to DB");
});


console.log(graphqlHTTP)
app.use(cors());
app.listen(portNum, ()=>{
    console.log(`Server started on port ${portNum}`);
});


app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));