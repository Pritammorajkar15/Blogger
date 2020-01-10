import React from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function Details(props){
// class Details extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             posts:{},
//             user:[],
//             comments:[]

//         }
//     }
//     componentDidMount(){
//         const id=this.props.match.params.id
//         axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(response=>{
//             const posts=response.data

//             this.setState({posts})
//             //console.log(this.state.posts)
//         })
//         axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response=>{
//             const user=response.data
//             this.setState({user})
//            //console.log(user)
//         })
// axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
// .then(response=>{
//     const comments=response.data
//     this.setState({comments})
//    console.log(comments)
// })
   


//}
    
   
        return(
            <div>
                {
                    props.users && (
                        <h1>User Name:{props.users.name}</h1>
                    )
                }
                {
                    props.posts && (
                        <div>
                            <h2>Title:{props.posts.title}</h2>
                <h3>Body:{props.posts.body}</h3>
                        </div>
                    )
                }
                
                <hr/>
                {
                    props.comments && (
                        <div>
<h2>COMMENTS:</h2>
                <ul>
                    {
                        props.comments.map((com)=>{
                            return <li key={com.id}>{com.body}</li>
                        })
                    }
                </ul>
                        </div>
                    )
                }
                
                <hr/>
                {
                    props.users && (
                        <Link to={`/users/${props.users.id}`}>More posts of author: {props.users.name}</Link> 
                    )
                }
                

<hr/>
<Link to='/Home'>Back</Link>            
            </div>
        )
    
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        users:state.users.find(user=>user.id==id),
        posts:state.posts.find(post=>post.id==id),
        comments:state.comments.filter(comment=>comment.postId==id)
    }
}
export default connect(mapStateToProps)(Details)