import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import WorkIcon from '@material-ui/icons/Work';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import factarr from '../function/factar';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie} from 'recharts';
import classnames from "classnames";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const data = [
    {name: 'L_if', Value: 2, },
    {name: 'L_loop', Value: 4, },
    {name: 'L_mod', Value: 1, },
    {name: 'CL', Value: 8, },
    {name: 'cl', Value: 0.088, },
    {name: 'f', Value: 1, },
    /*{name: 'L', Value: 9.1, },*/
];
const styles = {
    List: {
        boxShadow: '0 0.1em 5px rgba(122,122,122,0.5)',


    },
    table: {
        marginTop: '5%',
    },
    position: {
        float: 'left'
    },
    textField: {
        marginRight: '10%',
        width: '35%'
    },
    button: {
        marginLeft: '1%',
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    img: {

    }
};

class lab2 extends Component {
    state = {
        number: '',
        task: false
    };

    render() {
        const { classes } = this.props;
        return (

            <Grid container wrap="nowrap" className={classes.table}>
                <Grid item xs={1} lg={2} md={3}></Grid>
                <Grid item xs={10} lg={8} md={6} >
                    <Paper>
                        <List className={classes.List}>
                            <ListItem>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                                <ListItemText primary="Лабораторная работа № 2" secondary="Сен. 21, 2018" />
                            </ListItem>
                            <ListItem>
                                Задание:
                                <IconButton
                                    className={classnames(classes.button,{[classes.expandOpen]: this.state.task})}
                                    onClick={() => this.setState({task: !this.state.task})}
                                    // aria-expanded={}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </ListItem>
                            <ListItem>
                                <Collapse in={this.state.task} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography>
                                           Вычислить переменную S, которая задана следующим образом:
                                        </Typography>
                                        <img className={classes.img} width={"60%"} src={require("./scr.png")} />
                                        <Typography>
                                            Натуральное число N вводится с клавиатуры. Результат вывести на экран.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </ListItem>
                            <TextField
                                label="Натуральное число N"
                                className={classes.textField}
                                value={this.state.number}
                                onChange={(event) => {
                                    this.setState({number: event.target.value})
                                }}
                                margin="normal"
                            />
                            <TextField
                                label="S = "
                                className={classes.textField}
                                value={factarr(this.state.number)}
                                margin="normal"
                            />
                            <div>
                                <h3 style={{color:"#1A237E"}}>Значения метрик Джилба для программы:</h3>
                                <BarChart width={600} height={300} data={data}
                                          margin={{top: 25, right: 30, left: 20, bottom: 5}}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Value" barSize={20} fill="#8884d8" />
                                </BarChart>
                            </div>
                        </List>
                    </Paper>
                </Grid>
            </Grid>

        );
    }
}

export default withStyles(styles)(lab2);