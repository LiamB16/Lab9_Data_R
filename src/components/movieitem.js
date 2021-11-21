import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {link} from react-router-dom;
class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header><h4> {this.props.movie.title} </h4></Card.Header>
                    <Card.Body>
                        <blockquote >
                            <img src={this.props.movie.poster}></img>


                            <footer>
                                <p>{this.props.movie.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/Edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}
export default MovieItem;