var tmi = require("tmi.js");
var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "wo_obot",
        password: "oauth:jw9ode52debp3var49h2vthnlfedah"
    },
    channels: ["wO_o"]
};

var client = new tmi.client(options);
client.connect();

client.on("connected", function(address, port) {
    console.log("Address: " + address + " Port: " + port);
    client.action("wO_o", "Hello I'm wo_obot!");
});

client.on("chat", function(channel, user, message, self) {
    if (message === "!website") {
        client.action("wO_o", "parkchanwoo.com");
        return;
    }
   client.action("wO_o", user['display-name'] + " slap my hand");
});