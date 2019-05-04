import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {shifer_table, shifer_text} from './scripts/Lab3';
import {shifer_vizgenera} from './scripts/Lab4';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

class Lab_4 extends Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    state = {
        text: 'прилетаю десятого',
        key:'работа',
        
        alph1: 'яюэьыъщшчцхфутсрпонмлкйизжедгвба',
        alph:  'абвгдежзийклмнопрстуфхцчшщъыьэюя',
        msg: 'в симметричной криптосистеме секретный ключ передается по защищенному каналу',
        kod_word: 'справочник'
    }


    render() {
        
        const {alph, alph1, msg, kod_word,text, key} = this.state;
        const error = ([...alph1].filter(el => (![' ',...alph].some(_ => _ === el)))[0]) ? 
            'Несоответсвие алфавита и текста' : null
        console.log(error)
        return (
            <Fragment>
                <Paper style={{width: '60%', margin: '5% 0% 5% 20%'}}>
                    <ListItem>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        <ListItemText primary="Лабораторная работа 4" secondary="12.03.2019" />
                    </ListItem>


                    <ListItem>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        <ListItemText primary="задание 1" secondary="31.03.2019" />
                    </ListItem>
                    <Grid container spacing={24} style={{width: '90%', marginLeft: '5%'}}>
                        <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Алфвит"
                                    value={this.state.alph}
                                    onChange={this.handleChange('alph')}
                                    margin="normal"
                                    style={{marginRight: '2%'}}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="кодовое слово"
                                    value={this.state.key}
                                    onChange={this.handleChange('key')}
                                    margin="normal"
                                    style={{marginRight: '2%'}}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="текст"
                                    value={this.state.text}
                                    onChange={this.handleChange('text')}
                                    margin="normal"
                                    style={{marginRight: '2%'}}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="результат"
                                    value={shifer_vizgenera(key, text, alph).join('')}
                                    margin="normal"
                                    style={{marginRight: '2%'}}
                                />
                            </Grid>
                        </Grid>
                    <ListItem>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        <ListItemText primary="задание 2" secondary="31.03.2019" />
                    </ListItem>
                    <Grid container spacing={24} style={{width: '90%', marginLeft: '5%'}}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="таблица 1"
                                value={this.state.alph}
                                onChange={this.handleChange('alph')}
                                margin="normal"
                                style={{marginRight: '2%'}}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="таблица 2"
                                value={this.state.alph1}
                                onChange={this.handleChange('alph1')}
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
                        <Grid item xs={12}>
                           <TextField
                                fullWidth
                                label="Результат"
                                value={error || shifer_text(shifer_table(alph, kod_word), msg)}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Fragment>
        )
    }
}

export default Lab_4