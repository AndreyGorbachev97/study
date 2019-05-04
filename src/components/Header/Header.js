import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Route } from 'react-router-dom';
import Link from 'react-router-dom/Link';
import reliabilityPo from '../reliabilityPo/reliabilityPo';
import Labs from '../cryptography/labs/Labs';
import formalLang from '../formalLang/formalLang';
import cryptography from '../cryptography/cryptography';
import lab2 from '../reliabilityPo/lab2';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Lab_1 from '../cryptography/labs/Lab_1';

const styles = {
    root: {
        flexGrow: 1,
    },
    List: {
        marginLeft: 10,
        marginRight: 10
    },
    buttonDrawer: {
        marginLeft: '75%',
        float: 'right'
    },
    Link: {
        textDecoration: "none",
        active: {
            color: "none"
        }
    }
};



class SimpleAppBar extends React.Component {
    state = {
        openMenu: false
    };

    render (){
        const openMenu =this.state.openMenu;
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>

                <AppBar position="static" >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={ () => this.setState({openMenu: !openMenu})}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Andrey Gorbachev
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant='temporary'
                    open={openMenu}
                    onClose={() => this.setState({openMenu: !openMenu})}
                    onClick={() => this.setState({openMenu: !openMenu})}
                >
                    <IconButton className={classes.buttonDrawer} onClick={ () => this.setState({openMenu: false})}>
                        {openMenu ?  <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Теория информации" />
                        </ListItem>
                        <Link className={classes.Link} to={"/cryptography"}>
                            <ListItem button>
                                <ListItemText primary="Криптография" />
                            </ListItem>
                        </Link>
                        <Link className={classes.Link} to={'/reliabilityPo'}>
                            <ListItem button>
                                <ListItemText primary="Надежность ПО" />
                            </ListItem>
                        </Link>
                        <Link className={classes.Link} to={'/formalLang'}>
                            <ListItem button>
                                <ListItemText primary="Формальные языки" />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                </Drawer>
                <Route path="/reliabilityPo" component={Labs}/>
                <Route path="/formalLang" component={formalLang}/>
                <Route path="/cryptography" component={Labs}/>
            </div>
        );
    }

}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);