import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import {link} from react-router-dom;
import button from 'react-bootstrap/Button';
import axios from 'axios';
class MovieItem extends Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    DeleteMovie(){
        e.preventDefault();
        console.log("delete: "+ this.props.movie._id)
        //connects to API to delete movie from movie list
        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }
    //Displays headers for user to input name, url poster and year
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
                    <Button varient="danger" onClick={this.DeleteMovie}>delete</Button>
                </Card>
            </div>
        );
    }
}
export default MovieItem;