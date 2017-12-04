import React, {Component} from 'react';
import './App.css';
//import {withRouter} from 'react-router-dom';
//import {connect} from 'react-redux';




//components
import Categories from '../src/components/Categories'

class App extends Component {


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Leitura-Udacity</h1>
                </header>
                <div className="allcategories">
                    <div>
                        <Categories/>
                    </div>
                </div>
            </div>

        );
    }
}



export default App;

