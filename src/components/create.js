import React, { Component } from 'react';
import axios from 'axios';

class Create extends React.Component {
    constructor() {
        super();
          //Constructor variables are created and binded to this.on variable to api variable names
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    //adds title of movie
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //adds year of release
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    //adds poster url
    onChangePoster(e) {
        this.setState({
            Year: e.target.value
        });
    }
    //Saves changes added to database
    onSubmit(e) {
        e.prevntDefault();
        alert("Movie: " + this.state.Title 
        + " " + this.state.Year 
        + " " + this.state.Poster)
        
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        axios.post('http//localhost:4000/api/movies', newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title</label>
                        <input type='text'
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Add movie year</label>
                        <input type='text' 
                        className = 'form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>

                    <div className="form-group">
                        <label>Add poster url</label>
                        <textarea type='text' 
                        className = 'form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}></textarea>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;