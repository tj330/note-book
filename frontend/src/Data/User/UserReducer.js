const initialState={
    isLogged:false,
    user:{},
    token:"",
    profile:"http://images.pexels.com/photos/7794425/pexels-photo-7794425.jpeg"
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "USER-FETCH":
            return {
                ...state,
                isLogged:true,
                user:{
                    username:action.payload.username,
                },
                token:action.payload.token
            }
        case "USER-LOGOUT":
            console.log(state)
            return{
                ...state,
                isLogged:false,
                user:{
                    ...state.user,
                    username:"",
                },
            }
        default:
            return state
    }
}

export default userReducer