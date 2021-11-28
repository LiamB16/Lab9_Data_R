import React, { Component } from 'react';
import axios from 'axios';

class edit extends React.Component {
    constructor() {
        super();
        //Constructor variables are created and binded to this.on variable
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
    //establishes connection to api
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get("http://localhost:4000/api/movies/" +this.props.atch.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error); //prints error if there is an issue with connecting to server
        });
    }
    //changes title name
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    //changes year of release
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    //changes poster's url
    onChangePoster(e) {
        this.setState({
            Year: e.target.value
        });
    }
    //saves changes made to movies
    onSubmit(e) {
        e.prevntDefault();
        alert("Movie: " + this.state.Title 
        + " " + this.state.Year 
        + " " + this.state.Poster)
        //newMovie is the variable for the 
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id:this.state._id
        }
        //New data is uploaded to api 
        axios.put('http//localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
    }
    //Creates imput fields to prompt user to change movies
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
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default edit;