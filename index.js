var http = require("http");

var server =  http.createServer(function (req, res) {
    var ip = req.socket.address().address;
    var language = req.headers['accept-language'].match(/.*?,/);
    var software = req.headers['user-agent'].match(/\((.*?)\)/);
    var answer = {ipaddress: ip, language: language[0], software: software[1]};
    console.log(language);
    res.end(JSON.stringify(answer));
});

server.listen(8080);
