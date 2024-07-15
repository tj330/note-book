import "./Form.css"
import {useRef} from "react"
import { useDispatch } from "react-redux"
import { Link ,useNavigate} from "react-router-dom"
import api from "../../../api"
import pattern from "../../assets/pattern.png"
import {toast} from "react-toastify"

function Form({type,route}) {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const onHandleChange=(e)=>{
        const name=nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value
        e.preventDefault()
        if(type==="Login"){
        api.post("user/login",{
                email:email,
                password:password
            }).then((res)=>res.data)
            .then((data)=>{
                toast.success(`Welcome ${data.user}`)
                dispatch({type:"USER-FETCH",payload:{
                    username:data.user,
                    token:data.token
                }},)
                navigate("/")
            }).catch(()=>toast.error("Username or Password is Incorrect!"))
        }else{
            api.post("user/signup",{
                username:name,
                email:email,
                password:password
            }).then(()=>{
                toast.success("Profile created! Login to Continue")
                navigate("/login")
            })
            .catch(()=>toast.error("Email already used or Check your Internet Connection!"))
        }
    }

    const nameRef=useRef("")
    const passwordRef=useRef("")
    const emailRef=useRef("")


    const isUser=type==="Login"

    return <div className="container">
        <div className="left">
        <h2>{type}</h2>
        <form action="">
            {!isUser?<div className="form-content name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Your Handle?" ref={nameRef}/>
            </div>:""}
            <div className="form-content email">
                <label htmlFor="email">email:</label>
                <input type="email" id="email" placeholder="email" ref={emailRef}/>
            </div>
            <div className="form-content password">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" ref={passwordRef} id="password" name="password"/>
            </div>
            <button onClick={onHandleChange}>{type}</button>
            <div className="signup">
                {!isUser?<p>Already User? <Link to={"/login"}>Login</Link></p>:
                <p>New User?  <Link to={"/signup"}>Sign Up</Link></p>}
            </div>
        </form>
        </div>
        <div className="right">
            <img src={pattern} alt="Hey User!" />
        </div>
    </div>
}
export default Form
