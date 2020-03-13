import React from 'react';
import Header from './Header';
import Form from './Form';

export default class GameInfoApp extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <Header />
                <Form />
            </div>
        );
    }
}

