import React, { Component } from 'react';

class Content extends React.Component{

    render(){
        return( 
      <div>
          <h1>Hello world</h1>
          <h2>it is {new Date().toLocaleDateString()}.</h2>
      </div>
        );
    }
}
export default Content;