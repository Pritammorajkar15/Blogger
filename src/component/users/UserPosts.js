import React from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// class UserPosts extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             user:[],
//             posts:[]
//         }
//     }
//     componentDidMount(){
//         const id=this.props.match.params.id
//         axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
//         .then(response=>{
//             const user=response.data
//             this.setState({user})
//             console.log(this.state.user)
//         })
//         axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
//         .then(response=>{
// const posts=response.data
// this.setState({posts})

//         })
//     }
function UserPosts(props){



    return(
        <div>
           { /*<h2>emails are</h2>
            <p>{this.state.user.email}</p>*/}
            {props.users && (
                <h2>USER NAME:{props.users.name}</h2>

)}
{props.posts && (
    <div>
    <h3>POSTS WRITTEN BY USER:</h3>
            <ul>
            {
               props.posts.map((post)=>{
                return   <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
               }) 
            }
            </ul>
            </div>
)}
            
            

        </div>
    )
}
const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        posts:state.posts.filter(post=>post.id==id),
        
        users:state.users.find(user=>user.id==id)
    }
}
export default connect(mapStateToProps)(UserPosts)