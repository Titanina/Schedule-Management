var http = require('http');
var url = require('url');
var qs = require('querystring');



varapp = http.createServer(function (request, response) {
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    response.writeHead(200);
    response.end(`
      <!doctype html>
      <html>
      <head>
        <title>POST</title>
        <meta charset="utf-8">
      </head>
      <body>
        <form action="/post_test" method="post">
          <p><input type="text" name="title" placeholder="할 일"></p>
          <p><textarea name="description" placeholder="해낸 일"></textarea></p>
          <p><input type="submit"></p>
        </form>
      </body>
      </html>
      `);
  } else if (pathname === '/post_test') {
    var body = '';
    request.on('data', function (data) {
      body = body+ data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      console.log(post);
      var title = post.title;
      var description = post.description;
      response.end(`
          <!doctype html>
          <html>
          <head>
            <title>POST</title>
            <meta charset="utf-8">
          </head>
          <body>
            <p>할 일 : ${title}</p>
            <p>해낸 일 : ${description}</p>
          </body>
          </html>
          `);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000, () => console.log("서버 작동중입니다."));
