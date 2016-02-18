//console.log(process);

/*****meet pipe************/
// var fs = require('fs')
// var argv = process.argv;
// var fileName = argv[2];
// fs.createReadStream(fileName)
//   .pipe(process.stdout);


/****input uotput*****/

// process.stdin.pipe(process.stdout);

/****Transform********/
// var through = require('through2');
//
// var transformStream = through(write);
//
// function write(buffer, encoding, next) {
//   var string = buffer.toString();
//   var result = string.toUpperCase();
//   this.push(result);
//   next();
// }
//
// process.stdin.pipe(transformStream).pipe(process.stdout);


/*********Lines*****************/
//
// var split = require('split');
// var through = require('through2');
// var toLower = true;
// process.stdin
//   .pipe(split())
//   .pipe(through( function(buffer, encoding, next) {
//       var string = buffer.toString();
//       var result = (toLower) ? string.toLowerCase() : string.toUpperCase();
//       toLower = !toLower;
//       this.push(result);
//       this.push('\n');
//       next();
//   }))
//   .pipe(process.stdout);

/*******Concat********/
//
// var concat = require('concat-stream');
// process.stdin.pipe(concat(function(body) {
//   var result = body.toString().split('').reverse().join('');
//   process.stdout.write(result);
// }));

/*********HTTP server*****************/

// var http = require('http');
// var through = require('through2');
// var transformStream = through(write);
//
// var server = http.createServer(function(req, res) {
//     if (req.method === 'POST') {
//         req.pipe(transformStream).pipe(res);
//     }
//     else res.end('send me a POST\n');
// });
// server.listen(process.argv[2]);
//
// function write(buffer, encoding, next) {
//   var string = buffer.toString();
//   var result = string.toUpperCase();
//   this.push(result);
//   next();
// }

/********HTTP CLIENT*******/
var request = require('request');

var post = request.post('http://localhost:8099');
process.stdin.pipe(post);
post.pipe(process.stdout);
