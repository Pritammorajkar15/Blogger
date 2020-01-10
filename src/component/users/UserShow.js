import React from 'react'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

//class UserShow extends React.Component{
    function UserShow(props){

    
    // constructor(){
    //     super()
    //     this.state={
    //         users:[]
    //     }
    // }
    // componentDidMount(){
    //     axios.get('http://jsonplaceholder.typicode.com/users')
    //     .then(response=>{
    //         const users=response.data
    //         this.setState({users})
    //     })
    // }
    
        return(

            <div>
                <h2>USER LIST:{props.users.length}</h2>
                <ul>
{
   props.users.map((user)=>{
        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
    })
}
                </ul>
                
            </div>
        )
    }

const mapStateToProps=(state)=>{
    console.log("hiii",state)
    return{
        
        users:state.users
    }
}
export default connect(mapStateToProps)(UserShow)
