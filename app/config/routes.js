var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Journal = require('../components/Journal');
var Gratitude = require('../components/Gratitude');
var TDIL = require('../components/TDIL');


var routes = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute path='/home' component={Home} />
      <Route path='/journal' component={Journal}/>
      <Route path='/gratitude' component={Gratitude}/>
      <Route path='/tdil' component={TDIL}/>
    </Route>
  </Router>
);

module.exports = routes;
