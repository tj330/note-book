const initialState={
    isLogged:false,
    user:{},
    token:"",
    profile:"https://cdn.pixabay.com/photo/2020/10/23/17/52/fox-5679446_1280.png"
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
                isLogged:false,
                user:{
                    ...state.user,
                    username:"",
                },
                token:""
            }
        default:
            return state
    }
}

export default userReducer