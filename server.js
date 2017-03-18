// decalare and define variables to be used
var greetings = '<h1>Greeting</h1>' +
'<p>This is the greeting page.</p>' + '<p> Welcome to this dummy server!</p>'

// var styleBootstrap = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">'
// var style = window.getElementById('shadow-root')
// var styleSheet = style.innerHTML = '#shadow-root{background: black}'

var joke1 = '<h1>Knock knock.</h1>' + '<p>Who’s there?</p>' +
'<p>An extraterrestrial.</p>' + '<p>Extraterrestrial who?</p>' +
'<p>What – how many extra-terrestrials do you know?</p>'

var joke2 = '<h1>Knock knock.</h1>' + '<p>Who’s there?</p>' +
'<p>Opportunity!</p>' +
'<p>That is impossible. Opportunity doesn’t come knocking twice!</p>'

var joke3 = '<h1>Knock knock.</h1>' + '<p>Who’s there?</p>' +

'<p>No-one.</p>' + '<p>No-one who?</p>' + '<p> (Remain silent)</p>'

var joke4 = '<h1>Knock knock.</h1>' + '<p>Who’s there?</p>' +
'<p>Leaf!</p>' + '<p>Leaf who?</p>' + '<p> Leaf the house, you’re not the owner anymore!</p>'

var cuteAnimal = '<h1>Cuteness!</h1>' + '<img src="https://i.ytimg.com/vi/JWY1bpbmyS4/0.jpg" alt="Cuten animal">'

var homePageLink = '<a href="/">Go Back Home</a>'

// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(homePageLink + greetings)
  } else if (request.url === '/random-joke') {
    if (Math.random() < 0.3) {
      response.end(homePageLink + joke1)
    } else if ((Math.random() < 0.6) && (Math.random() > 0.3)) {
      response.end(homePageLink + joke2)
    } else if (Math.random() < 1 && Math.random() > 0.6) {
      response.end(homePageLink + joke3)
    } else {
      response.end(homePageLink + joke4)
    }
  } else if (request.url === '/cuteness') {
    response.end(homePageLink + cuteAnimal)
  } else {
    var errorMsg = '<p>The requested URL: ' + request.url + ' was not found on this server!</p>'
    var error404 = '<h1>Page Not Found!</h1>' + errorMsg + '<img src="http://gaspix.net/wp-content/uploads/2015/10/404-Page-for-a-Photography-site.jpg" alt="Cuten animal">'
    response.end(homePageLink + error404)
  }
})

// Listen on port 8080, so that we can reach the app at localhost:8080
var port = 8080
server.listen(port)
