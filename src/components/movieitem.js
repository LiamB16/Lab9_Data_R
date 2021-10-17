import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h4> {this.props.movie.Title} </h4></Card.Header>
                    <Card.Body>
                        <blockquote >
                            <img src={this.props.movie.Title}></img>


                            <footer>
                                <p>{this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default MovieItem;