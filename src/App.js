import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';


//components
import Categories from '../src/components/Categories'
import Posts from '../src/components/Posts'
import Form from '../src/components/Form'

class App extends Component {


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Link to="/"><h1 className="App-title">Leitura-Udacity</h1></Link>
                </header>
                <div className="allcategories">
                    <div>
                        <Categories/>
                    </div>
                </div>
                <div className="allposts">
                    <div>
                        <Posts/>
                    </div>
                    <Route path="/form" render={({history}) => (
                        <Form/>)}/>
                </div>
                <Link to='/form'>
                    <button>add-post</button>
                </Link>
            </div>

        );
    }
}


export default App;

