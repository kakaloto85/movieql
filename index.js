import {GraphQLServer} from "graphql-yoga";
console.log("bo");

const server = new GraphQLServer({

})

server.start(()=>console.log("Graphql server Running"));