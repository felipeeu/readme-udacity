import React, {Component} from 'react';
import './App.css';
import {Route, Link , Switch} from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'

//components
import Categories from '../src/components/Categories'
import Posts from '../src/components/Posts'
import Newpost from './components/Newpost'




class App extends Component {


    render() {
        const stateOptions = [ { key: 'byvote', value: 'vt', text: 'voteScore' }, { key: 'bydate', value: 'date', text: 'time' } ]
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
                <Dropdown placeholder='Sort' search selection options={stateOptions} />
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

