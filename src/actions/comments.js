import axios from 'axios'

export const setComments=(comments)=>{
 return{type:"SET_COMMENTS", payload:comments}
}
export const startSetComments=()=>{
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            const comments=response.data
            console.log("comments",comments)
            dispatch(setComments(comments))
        })
    }
}
