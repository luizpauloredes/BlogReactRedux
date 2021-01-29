import React, {useEffect} from 'react';
import {connect} from 'react-redux' ;
import * as postActions from '../actions';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import postsReducer from '../reducers/postsReducer'


const PostList = ({posts,actions})=> {
    /*
    componentDidMount() {
        this.props.loadPosts();
    }
    */

    useEffect(()=> {
      actions.loadPosts()   
    },[])
    
    console.log('posts', postActions.loadPosts())
    return (
        <div>
            <div>Post List</div>
            {posts && posts.map((e,index)=> (
                <p key={index} >
                  {e.title}  
                </p>


            ))}
        </div>    
    )
    
}
PostList.propTypes = {
    posts:PropTypes.array.isRequired, 
    actions:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapStateDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(postActions, dispatch)
    };
}



export default connect(mapStateToProps,mapStateDispatchToProps)(PostList);