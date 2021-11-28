import React, { Component } from 'react';
import {MovieItem} from '/movieitem';

class Movies extends Component
{
     //divides the collection of movies into Movie Items with an title, year of release and poster's url
    render(){
      return this.props.films.map((films)=>{
          return <MovieItem movie={film} key={film.imdbID} ReloadData={this.props.ReloadData}></MovieItem>

      }); 
   }
}
export default Create;