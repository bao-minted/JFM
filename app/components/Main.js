var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <Link to='/journal' className='col-md-4'>Journal</Link>
          <Link to='/gratitude' className='col-md-4'>Gratitude</Link>
          <Link to='/tdil' className='col-md-4'>TDIL</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
