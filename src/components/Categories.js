import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCategories} from '../actions';

class Categories extends Component {

    static propTypes = {
        categories: PropTypes.array
    };

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const {categories} = this.props;
        return (

            <div>
                <h6>Categories</h6>
                <ol>
                    {categories &&
                    categories.map(category => (
                        <li key={category.name}>
                            <Link to={`/${category.path}`}>
                                <button>{category.name}</button>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(categories) {
    return {
        categories: categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: () => dispatch(getCategories())
    }
}


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Categories)
)





