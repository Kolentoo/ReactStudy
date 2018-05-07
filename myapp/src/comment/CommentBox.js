
import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import axios from 'axios'
// import $ from 'jquery'

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]}
        this.getComments()
        // setInterval(()=>{
        //     this.getComments()
        // },5000)
    }
    getComments(){
        axios.get(this.props.url,{

        }).then((res)=>{
            console.log(res.data)
            this.setState({data:res.data})
        })
        // $.ajax({
        //     url:this.props.url,
        //     dataType:'json',
        //     success:res=>{
        //         console.log(res)
        //         this.setState({data:res})
        //     }
        // })
    }
    handleCommentSubmit(comment){
        let comments = this.state.data
        let newComments = comments.concat(comment);
        this.setState({
            data:newComments
        })
        console.log(newComments)
    }
    render(){
        return(
            <div className="comments">
                <h1>评论</h1>
                <div className="divider">内容</div>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        );
    }
}

export {CommentBox as default};