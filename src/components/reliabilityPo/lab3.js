import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import bid from '../function/Station';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import WorkIcon from '@material-ui/icons/Work';
import Avatar from '@material-ui/core/Avatar';
import classnames from "classnames";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';



const styles = {
    List: {
        boxShadow: '0 0.1em 5px rgba(122,122,122,0.5)',
    },
    table: {
        marginLeft: '10%',
        width: '80%',
    },
    grid: {
        marginTop: '5%',
    },
    button: {
        margin: '1%',
        //marginTop: '3%',
        //marginDown: '3%',
    }
};
class lab3 extends Component {
    state = {
        add: false,
        number: '',
        openAdd: false,
        test: false,
        delete: false,
        nameValue: "",
        frequencyValue: "",
        task: false,
        radioStations: JSON.parse(localStorage.getItem('radioStations')) || [],
    };
    render() {
        const { classes } = this.props;
        const Station = this.state.radioStations;
        const testing = bid(Station);
        const id = Station[0] ? (Math.max.apply(null, Station.map(s => {return s.id})))+1: 0;
        return (
            <Grid container wrap="nowrap" className={classes.grid}>
                <Grid item xs={1} lg={2} md={3}></Grid>
                <Grid item xs={10} lg={8} md={6} >
                    <Paper>
                        <List className={classes.List}>
                            <ListItem>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                                <ListItemText primary="Лабораторная работа № 3" secondary="Окт. 1, 2018" />
                            </ListItem>

                            <ListItem>
                                Задание:
                                <IconButton
                                    className={classnames(classes.button,{[classes.expandOpen]: this.state.task})}
                                    onClick={() => this.setState({task: !this.state.task})}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </ListItem>
                            <ListItem>
                                <Collapse in={this.state.task} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography>
                                            Определить понятие «Радиостанция». Состояние объекта определяется следующими полями:
                                        </Typography>
                                        <Typography>
                                            * наименование радиостанции (строка до 60 символов);
                                        </Typography>
                                        <Typography>
                                            * частота вещания (длинное целое число).
                                        </Typography>
                                        <Typography>
                                            Наименование радиостанции
                                            может иметь несколько слов, разделенных пробелами.
                                            Составляется заявка на распределение частот вещания.
                                            Проверить таблицу радиостанций на корректность.
                                            Сформировать и вывести на экран наименования радиостанций,
                                            подавших заявки на вещание на совпадающих частотах.
                                            При отсутствии конфликтов выдать сообщение «Норма».
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </ListItem>
                            <Divider/>
                            <h3 style={{marginRight: '70%', marginTop: '5%'}}>Заявки:</h3>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Радиостанция</TableCell>
                                        <TableCell>Частота вещания</TableCell>
                                        <TableCell numeric>Удалить</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Station.map(row => {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell>{row.frequency}</TableCell>
                                                <TableCell numeric>
                                                    <IconButton
                                                        onClick={() => {
                                                            localStorage.setItem('radioStations',  JSON.stringify(this.state.radioStations.filter(m => m.id !== row.id)));
                                                            this.setState({radioStations: JSON.parse(localStorage.getItem('radioStations'))});
                                                        }
                                                        }>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                            <Divider style={{marginTop: 35}}/>
                            <Button variant="contained" color="primary" className={classes.button} style={{ marginLeft: '54%'}}
                                    onClick={() => this.setState({test: true})}>Проверить</Button>
                            <Button variant="contained" color="primary" className={classes.button}
                                    onClick={() => this.setState({openAdd: true})}>Добавить</Button>
                            <Dialog
                                open={this.state.test}
                                onClose={() => this.setState({test: false})}
                                aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">Проверка</DialogTitle>

                                {testing[0] ?
                                    <div>
                                    <DialogContent>
                                        <DialogContentText>
                                            Обнаружены совпадения в частотах вещания!
                                            Необходимо отредактировать заявки.
                                        </DialogContentText>
                                    </DialogContent>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Радиостанция</TableCell>
                                                <TableCell>Частота вещания</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {
                                            testing.map(t => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        {t.name}
                                                    </TableCell>
                                                    <TableCell>{t.frequency}</TableCell>
                                                </TableRow>
                                                )
                                            )
                                        }
                                        </TableBody>
                                    </Table>
                                    </div>:
                                    <DialogContent>
                                        <DialogContentText >
                                           Норма. Совпавших частот вещания не обнаружено.
                                        </DialogContentText>
                                    </DialogContent>
                                }
                            </Dialog>

                            <Dialog
                                open={this.state.openAdd}
                                onClose={() => this.setState({openAdd: false})}
                                aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">Заявка</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Для составления заявки на распределение частот вещания, заполните
                                        поля "Наименование радио станции" и "Частота".
                                    </DialogContentText>
                                    <TextField
                                        label="наименование радиостанци "
                                        onChange={(event) => {
                                            this.setState({nameValue: event.target.value})
                                        }}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <TextField
                                        label="частота вещания"
                                        type="number"
                                        onChange={(event) => {
                                            this.setState({frequencyValue: event.target.value})
                                        }}
                                        margin="normal"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={()=> {
                                             if (this.state.nameValue !== '' && this.state.frequencyValue !== '')  {
                                                this.setState(prevState => ({
                                                    radioStations: [...prevState.radioStations, { name: this.state.nameValue, frequency: this.state.frequencyValue, id: id}]
                                                }));
                                                this.setState({openAdd: false, add: true, nameValue: '', frequencyValue: ''})
                                            }
                                        }
                                    } color="primary">
                                        добавить
                                    </Button>
                                    <Button onClick={() => this.setState({openAdd: false})} color="primary">
                                        отмена
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(lab3);