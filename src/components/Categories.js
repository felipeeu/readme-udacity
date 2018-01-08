import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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
                        <button onClick={() => this.onClickCategories(category.name)}
                                className="ui black button">{category.name}</button>
                    </div>
                ))}
                <Button onClick={() => this.onClickAllCategories()}
                        content='All'/>
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





