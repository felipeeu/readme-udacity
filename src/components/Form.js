import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Form extends Component {
    render() {
        return (
            <div className= "form">
                <Link to='/'><button>Close</button></Link>
                <form className="ui form">
                    <div className="equal width fields">
                        <div className="field">
                            <label>First name</label>
                            <div className="ui input">
                                <input type="text" placeholder="First name"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
