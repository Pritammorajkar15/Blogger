import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom"
import Home from './component/users/Home'
import UserShow from './component/users/UserShow'
import UserPosts from './component/users/UserPosts'
import Posts from './component/users/Post'
//import PostDetails from './component/users/PostDetails'
import Details from './component/users/PostDetails2'

function App() {
  return (
    <BrowserRouter>
<div>
  
  {/*<ul>
    <li><Link to ='/'>Home</Link></li>
    <li><Link to ='/user'>usershow</Link></li>
    <li><Link to ='/posts'>posts</Link></li>
    
  </ul>*/}
<Link to ='/'>Home</Link>|<Link to ='/user'>Users</Link>|<Link to ='/posts'>Posts</Link>

  <Route path='/' component={Home} exact={true}/>
  <Route path='/user' component={UserShow}/>
  <Route path='/users/:id' component={UserPosts}/>
  <Route path='/posts' component={Posts} exact={true}/>
  <Route path='/posts/:id' component={Details} />


</div>
</BrowserRouter>
  )
}

export default App;
