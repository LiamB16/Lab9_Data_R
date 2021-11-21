
import React, { Component } from 'react';

import Read from '/components/read';
import  Create  from '/components/create';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
 render() {
   return (
     <Router>
       <div className="App">
         <h2>hello world</h2>
          <Navbar bg="primary" variant="dark">
           <Container>
             <Navbar.Brand href="/">Navbar</Navbar.Brand>
             <Nav className="me-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/read">read</Nav.Link>
               <Nav.Link href="/create">create</Nav.Link>
             </Nav>
           </Container>
         </Navbar>
         
         <Switch>
           <Route Path='/read'><Read></Read></Route>
           <Route Path='/create'><Create></Create></Route>
            <Route Path='/edit/:id' Component = {Edit}></Route>
         </Switch> 
       </div>
     </Router>
   );
 }
}

export default App;
