import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Component/Banner';
import Card from './Component/Card';
import Faqlist from './Component/Faqlist';
import Todo from './Component/Todo';
import Quiz from './Component/quiz'
import Checkbox from './Component/checkbox'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="row">
            <div className="col-md-12">
             <Banner />
              <div className="row">
                <Card tittle="sanjay">icing nostrud cillum labore do. Deserunt nostrud</Card>
                <Card tittle="sanjay">icing nostrud cillum labore do. Deserunt nostrud</Card>
                <Card tittle="Accuprint">liquip fugiat laborum culpa dolore ex eu ipsum labore quis. Est laboris Lorem</Card>

              </div>
          </div>
        </div> */}

          {/* <Checkbox /> */}

          <Quiz />
          <Todo />

        {/* <Faqlist /> */}
      </React.Fragment>
    );
  }
}

export default App;
