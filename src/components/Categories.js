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
        const {allcategories} = this.props;

        return (

            <div>
                <h6>Categories</h6>
                    {allcategories &&
                    allcategories.map(category => (
                        <div key={category.name} className="categories-bar">
                            <Link to={`/${category.path}`}>
                                <button className="ui black button">{category.name}</button>
                            </Link>
                        </div>
                    ))}
            </div>
        )
    }
}

function mapStateToProps({categories}) {
    return {
       allcategories:categories
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





