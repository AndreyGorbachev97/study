import React, { Component, Fragment } from 'react';
import Lab_1 from './Lab_1';
import Lab_2 from './Lab_2';
import Lab_3 from './Lab_3';
import Lab_4 from './Lab_4';


class Labs extends Component {

    render(){

        return(
            <Fragment>
                <Lab_1/>
                <Lab_2/>
                <Lab_3/>
                <Lab_4/>
            </Fragment>
       
        )
    }
}

export default Labs