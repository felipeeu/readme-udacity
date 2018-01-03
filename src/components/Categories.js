import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCategories, getPostByCategory} from '../actions'


class Categories extends Component {

    static propTypes = {
        categories: PropTypes.array
    };

    onClickCategories = (category) => {
        this.props.getPostByCategory(category)
    };

    componentDidMount() {
        this.props.getCategories();
    };

    render() {
        const {allcategories} = this.props;

        return (
            <div>
                <h6>Categories</h6>
                {allcategories &&
                allcategories.map(category => (
                    <div key={category.name} className="categories-bar">
                        <button onClick={() => this.onClickCategories(category.name)}
                                className="ui black button">{category.name}</button>

                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({categories}) {

    return {
        allcategories: categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: () => dispatch(getCategories()),
        getPostByCategory: (category) => dispatch(getPostByCategory(category))

    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Categories)
)





