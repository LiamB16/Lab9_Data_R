import React, { Component } from 'react';

class Movies extends Component
{
     
    render(){
      return this.props.films.map((films)=>{
          return <MovieItem movie={film} key={film.imdbID}></MovieItem>

      }); 
   }
}
export default Create;