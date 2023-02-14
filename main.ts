import Server from "./server/server.ts";

const newServer = new Server();

newServer.app.listen(newServer.port, () => {
    console.log(`Server is listening on ${newServer.port}`)
});