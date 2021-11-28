import React, { Component } from 'react';
import axios from 'axios';
class Read extends Component {
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {
        mymovies: [] //Creates variable for movies found in API
    };
    //connects to read page for first time
    componentDidMount() {
        axios.get('https://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ mymovies: response.data })
            })
            .catch((error) => { console.log(error) }
            );
    }
    //reloads same page to update changes made
    ReloadData(){
        axios.get('https://localhost:4000/api/movies')
        .then((response) => {
            this.setState({ mymovies: response.data })
        })
        .catch((error) => { console.log(error) }
        ); 
    }
    //After loading data from API, diplays data on the read page
    render() {
        return (
            <div>
                <h3>Hello from Read component</h3>
                <Movies films={this.state.mymovies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}
export default Read;