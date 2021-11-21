import React, { Component } from 'react';
import axios from 'axios';

class edit extends React.Component {
    constructor() {
        super();

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
            console.log(error);
        });
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangePoster(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onSubmit(e) {
        e.prevntDefault();
        alert("Movie: " + this.state.Title 
        + " " + this.state.Year 
        + " " + this.state.Poster)
        
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster,
            _id:this.state._id
        }
        axios.put('http//localhost:4000/api/movies/'+this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch();
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
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;