import React from 'react';

class ResultCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desciprtion: '',
            released: '',
            image: '',
            rating: '',
            mataCriticUrl: '',

        }
        this.isLoading = true;
    }

    componentDidMount(){
        const baseurl = "https://api.rawg.io/api/games/";
        let incomingGameName = this.props.game;
        let modifiedGameName = incomingGameName.replace(/\s+/g, "-").toLowerCase();
        console.log(modifiedGameName);
        fetch(baseurl+modifiedGameName)
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    name: result.name,
                    desciprtion: result.description,
                    released: result.released,
                    image: result.background_image,
                    rating: result.rating,
                    mataCriticUrl: result.metacritic_url
                });
                this.isLoading = false;
            },
            (error) => {
                console.log('Some Error has Occured!');
            }
        )
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40, marginBottom: 40 }}>
                <div className="text-center" style={{ backgroundColor: "white" }}>
                    <div className="card-header">
                        {this.state.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Information About {this.state.name}</h5>
                        {this.state.desciprtion}
                        <h3>Released Date: {this.state.released}</h3>
                        <img src={this.state.image} className="card-img-top" alt={this.state.name}></img>
                        <a href={this.state.mataCriticUrl} className="btn btn-primary">Read on Meta Critic!</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultCard;