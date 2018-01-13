import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';

//actions
import {
    getCategories,
    getPostByCategory,
    getPosts
} from '../actions';


class Categories extends Component {

    componentDidMount = () => {
        this.props.getCategories();
    };
    onClickCategories = (category) => {
        this.props.getPostByCategory(category)
    };
    onClickAllCategories = () => {
        this.props.getPosts()
    };

    render() {
        const {allcategories} = this.props;

        return (
            <div className="categories-bar">
                {allcategories &&
                allcategories.map(category => (
                    <div key={category.name} className="categories-button">
                        <Link to={`/${category.path}`}>
                            <button
                                onClick={() => this.onClickCategories(category.name)}
                                className="ui black button">{category.name}</button>
                        </Link>
                    </div>
                ))}
                <Link to="/">
                    <Button
                        onClick={() => this.onClickAllCategories()}
                        content='All'/>
                </Link>
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
        getPostByCategory: (category) => dispatch(getPostByCategory(category)),
        getPosts: () => dispatch(getPosts())
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Categories)
)





