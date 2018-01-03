import React, {Component} from 'react';
import './App.css';
import {Route, Link , Switch} from 'react-router-dom';


//components
import Categories from '../src/components/Categories'
import Posts from '../src/components/Posts'
import Newpost from './components/Newpost'




class App extends Component {


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Leitura-Udacity</h1>
                </header>
                <Link to="/newpost">
                    <button className="ui animated button">
                        <div className="visible content">New Post</div>
                        <div className="hidden content">
                            <i aria-hidden="true" className="plus icon"/>
                        </div>
                    </button>
                </Link>
                <div className="allcategories">
                    <div>
                        <Categories />
                    </div>
                </div>
                <div className="allposts">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Posts}/>
                            <Route exact path="/newpost" component={Newpost}/>
                        </Switch>
                    </div>
                </div>
            </div>

        );
    }
}


export default App;

