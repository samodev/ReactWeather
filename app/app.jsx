var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute, HashHistory} = require('react-router');
var Main = require('Main').default;
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles')


let hashHistory = Router.hashHistory;

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
