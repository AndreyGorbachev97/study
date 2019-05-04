import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {shifer_table, shifer_text} from './scripts/Lab3';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

class Lab_3 extends Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    state = {
        alph: 'абвгдежзийклмнопрстуфхцчшщъыьэюя',
        msg: 'в симметричной криптосистеме секретный ключ передается по защищенному каналу',
        kod_word: 'справочник'
    }


    render() {
        const {alph, msg, kod_word} = this.state;
        return (
            <Fragment>
                <Paper style={{width: '60%', margin: '5% 0% 5% 20%'}}>
                    <ListItem>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        <ListItemText primary="Лабораторная работа 3" secondary="12.03.2019" />
                    </ListItem>

                    <Grid container spacing={24} style={{width: '90%', marginLeft: '5%'}}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Алфавит"
                                value={this.state.alph}
                                onChange={this.handleChange('alph')}
                                margin="normal"
                                style={{marginRight: '2%'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Сообщение"
                                value={this.state.msg}
                                onChange={this.handleChange('msg')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Кодовое слово"
                                value={this.state.kod_word}
                                onChange={this.handleChange('kod_word')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                                fullWidth
                                label="Результат"
                                value={shifer_text(shifer_table(alph, kod_word), msg)}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Fragment>
        )
    }
}

export default Lab_3