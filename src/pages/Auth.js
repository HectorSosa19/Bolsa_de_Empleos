import React,{useState,useEffect}from "react"
import '../css/App.css';
import {app} from "../firebase"
import Login from "../components/Navbar/Login";
import Swal from "sweetalert2";
import { useHistory } from 'react-router';




function Auth() {
 const [user,setUser]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const[emailerror,setEmailerror]=useState("")
  const[passworderror,setPassworderror]=useState("")
  const[hasaccount,setHasaccount]=useState(false)
  
  function User(){
    let history=useHistory();
    history.push("/")
    notify()
  }
  
  function notify(){
    Swal.fire('Bienvenido',
              'Usuario',
              'success')
  }

   
  const clearInputs=()=>{
    setEmail("");
    setPassword("");
  }

  const clearErrors=()=>{
    setEmailerror("");
    setPassworderror("");
  }

  const handlelogin=()=>{
    clearErrors();
   app
     .auth()
     .signInWithEmailAndPassword(email,password)
     .catch(err=>{
       switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disable":
            case "auth/user-not-found":
              setEmailerror(err.message)
              break;
        case"auth/wrong-password":
          setPassworderror(err.message)
          break;
       }
     })
  }

  const authListener=()=>{
  app.auth().onAuthStateChanged(user=>{
    clearInputs();
    if(user){
      setUser(user);
    }
    else{
      setUser("");
    }
  })
  }

  useEffect(()=>{
   authListener();

  },[])

  return (
    <div className="App">
    {user?(
      User()
    ):(
      <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handlelogin={handlelogin} emailerror={emailerror} passworderror={passworderror}/>
    )}
    </div>
  );
}

export default Auth;

