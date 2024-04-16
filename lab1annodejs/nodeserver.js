var http = require('http');
var fs = require('fs');
const StringDecoder = require('string_decoder').StringDecoder;

const corsHeaders = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
};

http.createServer(async function (req, res) {
    if (req.method === 'OPTIONS') {
        res.writeHead(204, corsHeaders);
        res.end();
        return;
    }

    if (req.method === 'POST') {
        const decoder = new StringDecoder('utf-8');

        let buffer = '';

        req.on('data', (chunk) => {
            buffer += decoder.write(chunk);
        });

        req.on('end', () => {
            buffer += decoder.end();
            res.writeHead(200, {
                ...corsHeaders,
            });
            writefile(buffer);
            res.end();
        });
    } else if (req.method === 'GET') {
        fs.readFile('server.txt', function (err, data) {
            res.writeHead(200, {
                ...corsHeaders,
                'Content-Type': 'text/plain'
            });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(405);
        res.end();
    }
}).listen(8080);

function writefile(mess) {
    fs.appendFile('server.txt', mess+'\n', function (err) {
        if (err) throw err;

    });
}
