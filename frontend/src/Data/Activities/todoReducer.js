
const initialState={
    inputState:"",
    todo:[]
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "TODO-FETCH":
            return {
                ...state,
                todo:action.content,
            }
        case "TODO-HANDLE":
            return {
                ...state,
                inputState:action.value
            }
        case "TODO-SUBMIT":
            return{
                ...state,
                inputState:""
            }
        case "TODO-DELETE":
            return{
                ...state,
                todo:state.todo.filter((todo)=>todo._id!==action.id)
            }
        default:
            return state
    }
}

export default todoReducer