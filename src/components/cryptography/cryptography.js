import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
    container: {
        marginBottom: "6%"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 500,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    paper: {
        marginLeft: "5%",
        marginTop: "5%",
        width: "90%"
    },
    inputDate: {
        marginBottom: "5%"
    },
    button: {
        marginLeft: '45%',
        marginTop: '1%',
        marginBottom: '2%',
    }
});


//делает сдвиг в предложении
function shifts(text, alph, kod_alph){
    alph = alph.split("");
    text = text.split("");
    let kod_text = "";
    for(let i=0; i<text.length; i++ )
    {
        for(let j=0; j<alph.length; j++ )
        {
            if(text[i]===" "){
                kod_text += " ";
                break;
            }
            if(alph[j]===text[i]){
                kod_text+=kod_alph[j];
                break;
            }
        }
    }
    console.log("сaesa", kod_text);
    return kod_text;
}

//кодирует алфавит сдвигом
function alph_koder(alph,shift) {
    let kod = [];
    const alg = alph.split("").forEach((value, i, mass) => {
        if (i+shift<mass.length){
            kod[i] = mass[i+shift]
        }else{
            kod[i] = mass[i+shift-mass.length]
        }
    });
    console.log(kod);
    return kod;
}


function groks(key, alph, text) {
    let z = 0;
    let text_kod = "";
    console.log("key",key);

    alph = alph.split("");
    text = text.split("");
    for(let i=0; i<text.length; i++)
    {
        for(let j=0; j<alph.length; j++)
        {
            if(text[i]===" "){
                text_kod += " ";
                break;
            }
            else if(alph[j] === text[i])
            {
                let num = Number(key[z]);
                text_kod += j + num > alph.length ? alph[num + j - alph.length] : alph[j+ num];
                z++;
                if (z === key.length) z = 0;
                break;
            }
        }
    }
    console.log("text1",text_kod);
    return text_kod;
}
//делает из строки числовой ключ
function stringToKey(keyStr, alph) {
    let keyInt = [];
    for(let i=0; i<keyStr.length; i++)
    {
        for(let j=0; j<alph.length; j++)
        {
            if(keyStr[i] === alph[j])
            {
                keyInt[i] = j;
                break;
            }
        }
    }
    console.log("keyInt",keyInt);
    return keyInt;
}
class shifr extends Component{

    state = {
        alphabet: "абвгдеёжзийклмнопрстуфхцчшщьыъэюя",
        shift: 2,
        text: "",
        key_groks: "1223",
        key_viz: "ааабббввв",
        //33 неповторяющихся букв
        subs: "яюэъыьщшчцхфутсрпонмлкйизжёедгвба",
        open1: false,
        open2: false,
        open3: false,
        open4: false,
    };


    render() {

        const {alphabet, shift, text, key_groks, key_viz, subs} = this.state;
        const { classes } = this.props;
        return(
          <div style={{marginBottom: "5%"}}>
              <Paper square className={classes.paper}>
                  <form className={classes.container} noValidate autoComplete="off">
                      <div className={classes.inputDate}>
                          <TextField
                              required
                              error={!this.state.text}
                              multiline
                              label="Исходный текст"
                              className={classes.textField}
                              value={this.state.text}
                              onChange={(event) => {
                                  this.setState({text: event.target.value})
                              }}
                              style={{width: 500}}
                              margin="normal"
                          />
                          <TextField
                              required
                              error={!this.state.alphabet}
                              label="Исходный алфавит"
                              value={this.state.alphabet}
                              onChange={(event) => {
                                  this.setState({alphabet: event.target.value})
                              }}
                              multiline
                              className={classes.textField}
                              style={{width: 500}}
                              margin="normal"
                          />
                      </div>
                      <Divider />
                      <Grid container spacing={24} style={{marginTop: "3%", marginLeft: "7%"}}>
                          <Grid item xs={5}>
                              <Paper>
                                  <ListItem selected>
                                      <ListItemText primary="Шифр подстановки" secondary="год 1404" />
                                  </ListItem>
                                  <TextField
                                      required
                                      error={!this.state.subs}
                                      label="Алфавит подстановки"
                                      className={classes.textField}
                                      value={this.state.subs}
                                      onChange={(event) => {
                                          this.setState({subs: event.target.value})
                                      }}
                                      multiline
                                      style={{width: 350}}
                                      margin="normal"
                                  />
                                  <TextField
                                      label="Шифр подстановки"
                                      className={classes.textField}
                                      value={shifts(text, alphabet, subs)}
                                      multiline
                                      style={{width: 350, marginBottom: "5%"}}
                                      margin="normal"
                                  />
                                  <Button variant="contained" color="primary" className={classes.button}
                                          onClick={() => this.setState({open1: true})}>Информация</Button>
                                  <Dialog
                                      open={this.state.open1}
                                      onClose={() => this.setState({open1: false})}
                                      aria-labelledby="form-dialog-title"
                                  >
                                      <DialogTitle id="form-dialog-title">Шифр подстановки</DialogTitle>
                                      <DialogContent>
                                          <DialogContentText>
                                              это метод шифрования, в котором элементы исходного открытого
                                              текста заменяются зашифрованным текстом в соответствии с некоторым правилом.
                                              Элементами текста могут быть отдельные символы (самый распространённый случай), пары букв, тройки букв,
                                              комбинирование этих случаев и так далее.
                                          </DialogContentText>
                                      </DialogContent>
                                  </Dialog>
                              </Paper>
                          </Grid>
                          <Grid item xs={5}>

                              <Paper>
                                  <ListItem selected>
                                      <ListItemText primary="Шифр Цезаря" secondary="1 век до н.э" />
                                  </ListItem>
                                  <TextField
                                      label="Сдвиг"
                                      value={this.state.shift}
                                      onChange={(event) => {
                                          this.setState({shift: event.target.value})
                                      }}
                                      type="number"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                      style={{width: 350}}
                                      margin="normal"
                                  />
                                  <TextField
                                      label="Шифр Цезаря"
                                      className={classes.textField}
                                      value={shifts(text, alphabet, alph_koder(alphabet, Number(shift)))}
                                      multiline
                                      margin="normal"
                                      style={{width: 350, marginBottom: "5%"}}
                                  />
                                  <Button variant="contained" color="primary" className={classes.button}
                                          onClick={() => this.setState({open2: true})}>Информация</Button>
                                  <Dialog
                                      open={this.state.open2}
                                      onClose={() => this.setState({open2: false})}
                                      aria-labelledby="form-dialog-title"
                                  >
                                      <DialogTitle id="form-dialog-title">Шифр Цезаря</DialogTitle>
                                      <DialogContent>
                                          <DialogContentText>
                                              Шифр Цезаря, также известный как шифр сдвига,
                                              код Цезаря или сдвиг Цезаря — один из самых простых
                                              и наиболее широко известных методов шифрования. ...
                                              Шифр назван в честь римского императора Гая Юлия Цезаря,
                                              использовавшего его для секретной переписки со своими генералами.
                                          </DialogContentText>
                                      </DialogContent>
                                  </Dialog>
                              </Paper>
                          </Grid>
                          <Grid item xs={5}>
                              <Paper>
                                  <ListItem selected>
                                      <ListItemText primary="Шифр Гроксфельда" secondary="..." />
                                  </ListItem>
                                  <TextField
                                      required
                                      error={!this.state.key_groks}
                                      label="Ключ"
                                      value={this.state.key_groks}
                                      onChange={(event) => {
                                          this.setState({key_groks: event.target.value})
                                      }}
                                      type="number"
                                      className={classes.textField}
                                      InputLabelProps={{
                                          shrink: true,
                                      }}
                                      style={{width: 350}}
                                      margin="normal"
                                  />
                                  <TextField
                                      label="Шифр Гроксфельда"
                                      defaultValue="Hello World"
                                      className={classes.textField}
                                      value={groks(key_groks.split(""), alphabet, text)}
                                      multiline
                                      margin="normal"
                                      style={{width: 350, marginBottom: "5%"}}
                                  />
                                  <Button variant="contained" color="primary" className={classes.button}
                                          onClick={() => this.setState({open3: true})}>Информация</Button>
                                  <Dialog
                                      open={this.state.open3}
                                      onClose={() => this.setState({open3: false})}
                                      aria-labelledby="form-dialog-title"
                                  >
                                      <DialogTitle id="form-dialog-title">Шифр Гроксфельда</DialogTitle>
                                      <DialogContent>
                                          <DialogContentText>
                                              полиалфавитный подстановочный шифр создан графом Гронсвельдом (руководителем первой дешифровальной службы Германии) в XVII веке.
                                              Шифр можно считать усовершенствованием шифра Цезаря (надежность) и Виженера / Бофора (скорость).
                                          </DialogContentText>
                                      </DialogContent>
                                  </Dialog>
                              </Paper>
                          </Grid>
                          <Grid item xs={5}>
                              <Paper>
                                  <ListItem selected>
                                      <ListItemText  primary="Шифр Вижинера" secondary="год 1553" />
                                  </ListItem>
                                  <TextField
                                      required
                                      error={!this.state.key_viz}
                                      label="Ключ Вижинера"
                                      className={classes.textField}
                                      value={this.state.key_viz}
                                      onChange={(event) => {
                                          this.setState({key_viz: event.target.value})
                                      }}
                                      multiline
                                      style={{width: 350}}
                                      margin="normal"
                                  />
                                  <TextField
                                      label="Шифр Вижинера"
                                      defaultValue="Hello World"
                                      className={classes.textField}
                                      multiline
                                      value={groks(stringToKey(key_viz, alphabet), alphabet, text)}
                                      margin="normal"
                                      style={{marginBottom: "5%",width: 350}}
                                  />
                                  <Button variant="contained" color="primary" className={classes.button}
                                          onClick={() => this.setState({open4: true})}>Информация</Button>
                                  <Dialog
                                      open={this.state.open4}
                                      onClose={() => this.setState({open4: false})}
                                      aria-labelledby="form-dialog-title"
                                  >
                                      <DialogTitle id="form-dialog-title">Шифр Вижинера</DialogTitle>
                                      <DialogContent>
                                          <DialogContentText>
                                              метод полиалфавитного шифрования буквенного текста с использованием ключевого слова.
                                          </DialogContentText>
                                      </DialogContent>
                                  </Dialog>
                              </Paper>
                          </Grid>
                      </Grid>
                  </form>
                  <Divider style={{marginBottom: 25}}/>
                  <Divider />
              </Paper>
          </div>
        );
    }
}

export default withStyles(styles)(shifr);