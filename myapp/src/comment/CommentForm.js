import React from 'react';

class CommentForm extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        let author = this.refs.author.value;
        let text = this.refs.text.value;
        this.props.onCommentSubmit({
            author,text
        });
    }
    render(){
        return(
            <div className="table">
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="field">
                        <input type="text" placeholder="姓名" ref="author" />
                    </div>
                    <div className="field">
                        <textarea name="" id="" cols="30" rows="10" placeholder="评论" ref="text"></textarea>
                    </div>
                    <button type="submit" className="button">
                        提交
                    </button>
                </form>
            </div>
        );
    }
}

export {CommentForm as default}