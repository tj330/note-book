const initialState = {
  newNote: {
    title: "",
    content: "",
  },
  notes:[],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NOTE-FETCH":
      return {
        ...state,
        notes:action.content
      }
    case "NOTE-DISCARD":
      return {
        ...state,
        newNote:{
          ...state.newNote,
          title:"",
          content:""
        }
      }
    case "NOTE-HANDLE-TITLE":
      return {
        ...state,
        newNote: {
          ...state.newNote,
          title: action.title,
        },
      };
    case "NOTE-HANDLE-CONTENT":
      return {
        ...state,
        newNote: {
          ...state.newNote,
          content:action.content,
        },
      };
      case "NOTE-DELETE":
        return {
          ...state,
          notes:state.notes.filter(note=>note._id!==action.id)
        }
    default:
      return state;
  }
};

export default noteReducer;
