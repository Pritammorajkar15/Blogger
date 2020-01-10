import React from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
//class Posts extends React.Component{
    function Posts(props){

    

//     constructor(){
//         super()
//         this.state={
//             posts:[]
//         }
//     }
//     componentDidMount(){
//         //const id=this.props.match.params.id
//        // console.log(id)
//         axios.get('http://jsonplaceholder.typicode.com/posts')
//         .then(response=>{
//            // console.log('hii',response.data)
// const posts=response.data
// this.setState({posts})
// //console.log(this.state.posts)

//         })
//     }
  
        return(
            <div>
                {/*<h2>TOTAL POSTS:{props.posts.length}</h2>*/}
                <ul>
{
    props.posts.map((post)=>{
        return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title} </Link></li>
    })
}
                </ul>
                
            </div>
        )
    }
    const mapStateToProps=(state)=>{
        console.log("idk",state)
        return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Posts)
