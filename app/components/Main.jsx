var React = require('react');
var Nav = require('Nav');

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav/>
        <div className="grid-x">
          <div className=" Cell medium-3 medium-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
