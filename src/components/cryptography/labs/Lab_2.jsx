import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { gcd, key_word_shifer, afin_sistem, alph_koder, koder_fun, tricemus } from './scripts/shiferCaesarLab2';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

class Lab_2 extends Component {

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    state = {
        msg1: 'мы должны признать очевидное: понимают лишь те, кто хочет понять',
        shift: 6,
        alph: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        msg2: 'смысл жизни нашей - непрерывное движение',
        kodA: 8,
        kodB: 1,
        msg3: 'разума лишает не сомнения, а уверенность',
        kod_word: 'зима',
        k: 6,
        msg4: 'прилетаю завтра',
        kod_word1: 'работа'
    }


    render() {
        const {alph, msg1, shift, kodA, kodB, msg2, kod_word, msg3, k, kod_word1, msg4} = this.state;
        return (
            <Fragment>
                <Paper style={{width: '60%', margin: '5% 0% 5% 20%'}}>
                    <ListItem>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                        <ListItemText primary="Лабораторная работа 2" secondary="27.02.2019" />
                    </ListItem>
                    <ListItem>         
                        <ListItemText primary="Заднание 1" secondary="Вариант 6" />
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
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                label="Сообщение"
                                value={this.state.msg1}
                                onChange={this.handleChange('msg1')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={4}>
                             <TextField
                                fullWidth
                                label="Сдвиг"
                                value={this.state.shift}
                                onChange={this.handleChange('shift')}
                                type="number"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                                fullWidth
                                label="Результат"
                                value={koder_fun(msg1, alph, alph_koder(alph, Number(shift)))}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Divider style={{width: '90%', margin: '3% 5% 3% 5%'}}/>
                    <ListItem>         
                        <ListItemText primary="Заднание 2" secondary="Вариант 6" />
                    </ListItem>
                   
                    <Grid container spacing={24} style={{width: '90%', marginLeft: '5%'}}>

                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                label="Сообщение"
                                value={this.state.msg2}
                                onChange={this.handleChange('msg2')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={2}>
                             <TextField
                                fullWidth
                                label="a"
                                value={this.state.kodA}
                                onChange={this.handleChange('kodA')}
                                margin="normal"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={2}>
                             <TextField
                                fullWidth
                                label="b"
                                value={this.state.kodB}
                                onChange={this.handleChange('kodB')}
                                margin="normal"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                                fullWidth
                                label="Результат"
                                error={gcd(Number(kodA), Number(alph.length)) !== 1}
                                value={gcd(Number(kodA), Number(alph.length)) === 1 ?
                                     koder_fun(msg2, alph, afin_sistem(alph, Number(kodA), Number(kodB))) :
                                     'наибольший общий делитель а и m не равен 1'
                                    }
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                   
                    <Divider style={{width: '90%', margin: '3% 5% 3% 5%'}}/>

                    <ListItem>         
                        <ListItemText primary="Заднание 3" secondary="Вариант 6" />
                    </ListItem>
                   
                    <Grid container spacing={24} style={{width: '90%', marginLeft: '5%'}}>

                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                label="Сообщение"
                                value={this.state.msg3}
                                onChange={this.handleChange('msg3')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={2}>
                             <TextField
                                fullWidth
                                label="код. слово"
                                value={this.state.kod_word}
                                onChange={this.handleChange('kod_word')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={2}>
                             <TextField
                                fullWidth
                                label="k"
                                value={this.state.k}
                                onChange={this.handleChange('k')}
                                margin="normal"
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                                fullWidth
                                label="Результат"
                                value={koder_fun(msg3, alph, key_word_shifer(alph, kod_word, k))}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    
                    <Divider style={{width: '90%', margin: '3% 5% 3% 5%'}}/>
                    
                    <ListItem>         
                        <ListItemText primary="Заднание 4" secondary="Вариант 6" />
                    </ListItem>
                   
                    <Grid container spacing={24} style={{width: '90%', marginLeft: '5%'}}>

                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                label="Сообщение"
                                value={this.state.msg4}
                                onChange={this.handleChange('msg4')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={4}>
                             <TextField
                                fullWidth
                                label="код. слово"
                                value={this.state.kod_word1}
                                onChange={this.handleChange('kod_word1')}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                                fullWidth
                                label="Результат"
                                value={tricemus(alph, kod_word1, msg4)}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Fragment>
        )
    }
}

export default Lab_2