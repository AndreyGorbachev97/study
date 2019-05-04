import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

const styles = theme => ({
    root: {
        margin: '2%',
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    icon: {
        margin:'2%',
        width: 200,
        height: 200,
    },
    list: {
        borderRight: '2px dashed #BBDEFB',

    }
});

function CenteredGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            {/*<Avatar*/}
                {/*alt="Adelle Charles"*/}
                {/*src="https://pp.userapi.com/c840332/v840332822/2cb00/xCfekeBbbCc.jpg"*/}
                {/*className={classes.icon}*/}
            {/*/>*/}
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    {/*<Paper className={classes.paper}>тест</Paper>*/}
                    <List className={classes.list}>sd</List>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>тест1</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);