import React from 'react';
import ResultCard from './ResultCard';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredGameName: '',
            showResultCard: false
        }
        this.handleEnteredGameName = this.handleEnteredGameName.bind(this);
    }

    handleEnteredGameName(event) {
        event.preventDefault();
        let resultCard = false;
        const enteredName = event.target.elements.gameName.value.trim();
        if(enteredName == '') {
           resultCard = false;
        }else{
           resultCard = true;
        }
        this.setState({ enteredGameName: enteredName, showResultCard: resultCard}, () => {
            console.log(this.state.enteredGameName);
        });
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <form onSubmit={this.handleEnteredGameName}>
                        <input type="text" placeholder="Enter the Name of Game" id="gameName"></input>
                        <br></br>
                        <br></br>
                        <button className="btn btn-success btn-lg">Search the Game</button>
                    </form>
                </div>
                {this.state.showResultCard ? <ResultCard game={this.state.enteredGameName}/>:<h1 className="text-center" style={{color: "red", marginTop: 25}}>Enter the Name of the Game then Search the Game!</h1>}
            </div>
        );
    }
}

export default Form;