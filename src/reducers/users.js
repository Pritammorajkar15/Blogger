const userInitialState=[]

const usersReducer =(state=userInitialState,action)=>{
    switch(action.type){
        case "SET_USERS":{
            console.log("123",action.payload)
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
   
}
export default usersReducer