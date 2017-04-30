import React, { PropTypes }  from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { tealA400 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: tealA400
  },
});

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <FlatButton label="Primary" primary={true} />

        {/* {React.cloneElement(this.props.children, this.props)} */}
      </MuiThemeProvider>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
