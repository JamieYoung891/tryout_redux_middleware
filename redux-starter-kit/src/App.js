import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post'
// import axios from 'axios';

import './App.css';


class App extends Component {
    // to test axios
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //         .then(response => console.log(response.data))
    // }

    componentDidMount() {
        const { number } = this.props
        this.getPost(number)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.number !== nextProps.number) {
            this.getPost(nextProps.number)
        }
    }

    getPost = async (postId) => {
        const { PostActions } = this.props;
        try {
            await PostActions.getPost(postId);
        } catch (e) {
            console.error("error occured!")
        }
    }

    render() {
        const { CounterActions, number, post, error, loading } = this.props;


        return (
            <div>
                {loading && (
                    <div className="loading">
                        <h1>
                            <span className="animation"></span>
                            loading...
                        </h1>
                    </div>
                )}
                <article className="article">
                    {error
                        ? <h1>an error occured!</h1>
                        : (
                            <Fragment>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </Fragment>
                        )
                    }
                </article>
                <nav className="nav">
                    <span>{number}</span>
                    <button onClick={CounterActions.increment}>+</button>
                    <button onClick={CounterActions.decrement}>-</button>
                </nav>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);