var React = require('react');
var Nav = require('Nav');
var PropTypes = require('prop-types');

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
}
