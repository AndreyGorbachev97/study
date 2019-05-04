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
import eighToTen from '../function/eighToTen';
import Lab2 from './lab2';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie} from 'recharts';


const data = [
    {name: 'n1', Value: 22, },
    {name: 'n2', Value: 8, },
    {name: 'N1', Value: 61, },
    {name: 'N2', Value: 18, },
    {name: 'n*2', Value: 2, },
    {name: 'n', Value: 30, },
    {name: 'N', Value: 79, },
];
const data01 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
    {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
    {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];


const styles = {
    List: {
        boxShadow: '0 0.1em 5px rgba(122,122,122,0.5)',


    },
    table: {
        marginTop: '5%',
        // color: '#FFEBEE',
        // backgroundColor: '#FFEBEE'

    },
    position: {
        float: 'left'
    },
    textField: {
        marginRight: '10%',
        width: '35%'
    }
};

class reliabilityPo extends Component {
    state = {
        number: ''
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container wrap="nowrap" className={classes.table}>
                    <Grid item xs={1} lg={2} md={3}></Grid>
                    <Grid item xs={10} lg={8} md={6} >
                        <Paper>
                            <List className={classes.List}>
                                <ListItem>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                    <ListItemText primary="Лабораторная работа № 1" secondary="Сен. 15, 2018" />
                                </ListItem>
                                <TextField
                                    label="Восмеричная"
                                    className={classes.textField}
                                    value={this.state.number}
                                    onChange={(event) => {
                                        this.setState({number: event.target.value})
                                    }}
                                    margin="normal"
                                />
                                <TextField
                                    label="Десятичная"
                                    className={classes.textField}
                                    value={eighToTen(this.state.number)}
                                    margin="normal"
                                />
                                <h3 style={{color:"#1A237E"}}>Значения метрик Холстеда для программы:</h3>
                                <div>

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
                {/*<Lab2/>*/}
            </div>

        );
    }
}

export default withStyles(styles)(reliabilityPo);