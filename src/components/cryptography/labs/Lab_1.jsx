import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { single_permutation, magic_square } from './scripts/encryptionTablesLab1';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

class Lab_1 extends Component {

    handleChange = event => {
        this.setState({ str: event.target.value });
    };
    handleChange0 = event => {
        this.setState({ kod_key: event.target.value });
    };
    handleChange1 = event => {
        this.setState({ msg: event.target.value });
    };
    handleChange2 = event => {
        this.setState({ kod_word: event.target.value });
    };

    state = {
        str: 'прилетаюседьмоговполдень',
        kod_key: 'корова',
        msg: 'прилетаювосьмого',
        kod_word: '16,3,2,13,5,10,11,8,9,6,7,12,4,15,14,1',
        show: false
    }


    render() {
        const str = this.state.str;
        const kod_key = this.state.kod_key;
        const msg = [...this.state.msg];
        const square = this.state.kod_word.split(',');
        return (
            <Fragment>
                <Paper style={{width: '60%', margin: '5% 0% 5% 20%'}}>
                    <ListItem>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        <ListItemText primary="Лабораторная работа 2" secondary="21.02.2019" />
                    </ListItem>
                    <ListItem>         
                        <ListItemText primary="Заднание 1" secondary="Вариант 6" />
                    </ListItem>
                    <TextField
                        label="Сообщение"
                        value={this.state.str}
                        onChange={this.handleChange}
                        margin="normal"
                        style={{marginRight: '2%', width: '30%'}}
                    />
                    <TextField
                        label="Кодовое слово"
                        value={this.state.kod_key}
                        onChange={this.handleChange0}
                        margin="normal"
                        style={{marginRight: '2%'}}
                    />
                    <TextField
                        label="Результа"
                        value={single_permutation(str, kod_key)}
                        margin="normal"
                        style={{margin: '0% 0% 5% 0%', width: '60%'}}
                    />
                    <Divider style={{width: '90%', marginLeft: '5%'}}/>
                    <ListItem>         
                        <ListItemText primary="Заднание 2" secondary="Вариант 6" />
                    </ListItem>
                    <TextField
                        label="Сообщение"
                        value={this.state.msg}
                        onChange={this.handleChange1}
                        margin="normal"
                        style={{marginRight: '2%'}}
                    />
                    <TextField
                        label="Магический квадрат (ввод построчно)"
                        value={this.state.kod_word}
                        onChange={this.handleChange2}
                        margin="normal"
                        style={{marginRight: '2%', width: '35%'}}
                    />
                    <Button color="primary" variant="outlined" onClick={() => this.setState({show: true})}>
                        Шифровать
                    </Button>
                    <Paper elevation={5} style={{ width: '40%', margin: '5% 0% 0% 30%' }}>
                        <Grid container spacing={0}>
                            {
                                square.map(el => {
                                    return (
                                        <Grid item xs={3}>
                                            <div style={{ fontSize: '18px', border: '1px solid #e0e0e0' }}>
                                                {el}
                                            </div>
                                        </Grid>);
                                })
                            }
                        </Grid>
                    </Paper>
                    <Paper elevation={5} style={{ width: '40%', margin: '5% 5% 5% 30%' }}>
                        <Grid container spacing={0}>
                            {
                                square.map(el => {
                                    return (
                                        <Grid item xs={3}>
                                            <div style={{fontSize: '18px', border: '1px solid #e0e0e0'}}>
                                                {msg[el - 1]}
                                            </div>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Paper>

                    {
                        square.filter((item, i, arr) => {return arr.indexOf(item) === i}).length === square.length ?
                        this.state.show && <h3>шифр. текст: {magic_square(msg, square)}</h3>
                        : <h3>Ошибка магического квадрата</h3>
                    }
                    <Divider style={{width: '90%', marginLeft: '5%'}}/>
                </Paper>
            </Fragment>
        )
    }
}

export default Lab_1