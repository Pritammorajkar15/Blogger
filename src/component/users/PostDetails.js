import React from 'react'
import axios from 'axios'
//import {Link} from 'react-router-dom'

class PostDetails extends React.Component{
    constructor(){
        super()
        this.state={
           
            posts:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
const posts=response.data
this.setState({posts})
console.log(this.state.posts)

        })
    }


render(){
    return(
        <div>
           <h2>{this.state.posts.body}</h2>
            
  
        
           
            

        </div>
    )
}
}
export default PostDetails