import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {withRouter, Route, Link, Switch} from 'react-router-dom';
import {Button} from 'semantic-ui-react';


//actions
import {sortPosts} from './actions'

//components
import Categories from '../src/components/Categories'
import Posts from '../src/components/Posts'
import Newpost from './components/Newpost'
import Postdetail from './components/Postdetail'
import Editpost from './components/Editpost'
import Editcomment from './components/Editcomment'

class App extends Component {

    onChangeSort = (sortType) => {
        this.props.sortPosts(sortType)
    };

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
                <div className="sort-button">
                    <p>Sort : </p>
                    <Button
                        onClick={() => this.onChangeSort('voteScore')}
                        content='byVote'
                        icon='heart'
                        labelPosition='left'
                        compact={true}

                    />
                    <Button
                        onClick={() => this.onChangeSort('timestamp')}
                        content='byTime'
                        icon='calendar'
                        labelPosition='right'
                        compact={true}
                    />
                </div>
                <div className="allcategories">
                    <div>
                        <Categories/>
                    </div>
                </div>
                <div className="allposts">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Posts}/>
                            <Route exact path="/newpost" component={Newpost}/>
                            <Route exact path="/:category" component={Posts}/>
                            <Route exact path="/:category/:postId" component={Postdetail}/>
                            <Route path="/:category/:postId/edit" component={Editpost}/>
                            <Route path="/:category/:postId/:commentId/edit" component={Editcomment}/>
                            )}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {

    return {}
}

export default withRouter(
    connect(
        mapStateToProps,
        {sortPosts}
    )(App)
);

