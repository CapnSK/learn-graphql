const express = require("express")
const app = express();
const portNum = 8080;
const {graphqlHTTP} = require("express-graphql")
console.log(graphqlHTTP)
app.listen(portNum, ()=>{
    console.log(`Server started on port ${portNum}`);
});

app.use("/graphql", graphqlHTTP({}));