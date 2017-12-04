import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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
                            <button>{category.name}</button>
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
    };
}
export default withRouter(
    connect(mapStateToProps, {
        getCategories
    })(Categories)
);
