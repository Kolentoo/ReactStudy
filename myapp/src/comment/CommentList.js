import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component{
    render(){
        let CommentNodes = this.props.data.map((comment,key)=>{
            return(
                <Comment author={comment.author} date={comment.date} key={key}>
                    {comment.text}
                </Comment>
            );
        })
        return(
            <div className="list">
                {CommentNodes}
            </div>
        )
    }
}

export {CommentList as default}