const express = require("express")
const app = express();
var cors = require('cors')
const fs = require("fs");

const portNum = 8080;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

fs.readFile('./.config', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const [rawUser, rawPwd] = data.split("\n");
    const user = rawUser.split(":")[1];
    const pwd = rawPwd.split(":")[1];
    mongoose.connect(`mongodb+srv://${user}:${pwd}@cluster0.h9todqn.mongodb.net/learn-graphql?retryWrites=true&w=majority`);
});


mongoose.connection.once("open", () => {
    console.log("Connected to DB");
});


console.log(graphqlHTTP)
app.use(cors());
app.listen(portNum, () => {
    console.log(`Server started on port ${portNum}`);
});


app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));