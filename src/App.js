import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCategories} from '../src/actions';


class App extends Component {

    static propTypes = {
        categories: PropTypes.array
    };

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const {categories} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Leitura-Udacity</h1>
                </header>
                <div className="allcategories">
                    <div>
                        <h6>Categories</h6>
                        {categories &&
                        categories.map(category => (
                            <ol>
                                <li key={category.name}>
                                    <button>{category.name}</button>
                                </li>
                            </ol>
                        ))}
                        {console.log(this.props)}
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps({categories}) {
    return {
        categories:categories
    };
}

export default withRouter(
    connect(mapStateToProps, {
        getCategories
    })(App)
);

