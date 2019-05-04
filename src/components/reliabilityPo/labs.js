import React, { Component } from 'react';
import Lab1 from './reliabilityPo';
import Lab2 from './lab2';
import Lab3 from './lab3';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root:{
        marginBottom: "5%"
    }
};
class labs extends Component {

    render() {
        const { classes } = this.props;
        return(
          <div className={classes.root}>
              <Lab1/>
              <Lab2/>
              <Lab3/>
          </div>
        );
    }
}

export default withStyles(styles)(labs);