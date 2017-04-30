import React, { PropTypes }  from "react";

class Main extends React.Component {
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
