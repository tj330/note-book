import "./Notebook.css";
import Card from "./Card";
import { useSelector,useDispatch} from "react-redux";
import { edit } from "../../assets/icons/logo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "../../../api";
import { toast } from "react-toastify";

function Notebook() {

  const note = useSelector((state) => state.note.notes);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  useEffect(()=>{
    getNotes()
  },[])

  const getNotes=()=>{
    api.get("notes")
    .then((res)=>res.data.data)
    .then((data)=>{dispatch({type:"NOTE-FETCH",content:data})})
    .catch(()=>toast.error("Error Fetching Notes,Try again!"))
  }

  const deleteNote=(id)=>{
    dispatch({type:"NOTE-DELETE",id})
    api.delete(`notes/delete/${id}`)
    .then(()=>{
      toast.success("Note Deleted!")
      getNotes()
    })
    .catch(()=>toast.error("Somethind went wrong!"))
  }


  return (
    <>
      <div className="notebook">
        {note.map((note) => (
          <Card details={note} key={note._id} delete={deleteNote}/>
        ))}
      </div>
      <button className="notebook-add" onClick={()=>navigate("/edit")}>
      <img src={edit} alt="edit" />
      <p>Add Note</p>
      </button>
    </>
  );
}

export default Notebook;
