import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {guid} from "../utils";
import {Accordion, Icon } from 'semantic-ui-react';

//actions
import {newComment} from '../actions';


class Newcomment extends Component {

    addNewComment = e => {
        const parentId = this.props.parentId;
        const submitComment = {
            id: guid(),
            parentId: parentId,
            author: e.target.author.value,
            body: e.target.body.value
        };


        this.props.newComment(submitComment, parentId)

    };


    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {

        const { activeIndex } = this.state
        return (

                <div>
                    <Accordion styled>
                        <Accordion.Title active={activeIndex === 1} index={1}
                                         onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                           New Comment
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <div className="content active">
                                <div className="form">
                                    <form onSubmit={this.addNewComment} className="ui form">
                                        <div className="equal width fields">
                                            <div className="field">
                                                <label>Author</label>
                                                <div className="ui input">
                                                    <input type="text" name="author"
                                                           className="form-control"
                                                           placeholder="Author"/>
                                                </div>
                                                <label>Comment</label>
                                                <div className="ui input">
                                            <textarea type="text" name="body" className="form-control"
                                                      placeholder="Comment"/>
                                                </div>
                                                <div className="submit">
                                                    <button type="submit"
                                                            className="ui icon left labeled button">
                                                        <i aria-hidden="true"
                                                           className="checkmark icon"/>Add New Comment
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                </div>

        )
    }
}


function mapStateToProps({posts}) {

    return {
        allposts: posts,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        newComment: (submitComment, parentId) => dispatch(newComment(submitComment, parentId))
    }
}

export default withRouter(connect(mapStateToProps
    , mapDispatchToProps)(Newcomment))


