import React, { Component } from 'react';
import axios from 'axios';
class Read extends Component {
    state = {
        mymovies: []
    };
    componentDidMount() {
        axios.get('https://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ mymovies: response.data.movies })
            })
            .catch((error) => { console.log(error) }
            );
    }

    render() {
        return (
            <div>
                <h3>Hello from Read component</h3>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;