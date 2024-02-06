const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { todo } = require('node:test');

const proto = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(proto);
const UserPackage = grpcObject.UserPackage;


const client = new UserPackage.User("localhost:3000", grpc.credentials.createInsecure())

client.getUser({
    "userName": "gowtham",
    "AGE": 32
}, (err, response) => {

    console.log("Recieved from server " + JSON.stringify(response))

})