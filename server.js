const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const proto = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(proto);
const UserPackage = grpcObject.UserPackage;

const server = new grpc.Server();

server.bindAsync('0.0.0.0:3000', grpc.ServerCredentials.createInsecure(), ()=>{
    server.start()
});

server.addService(UserPackage.User.service, {
    getUser: getUserINF
});

function getUserInfo(call, callback){
    const user = {
        id: 1,
        name: "gowtham",
        email: "gowthamkishore@gmail.com"
    };

    console.log(call)

    callback(null, user);
}
