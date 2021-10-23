import React from 'react'
import "../../css/home.css"
import {  useHistory } from 'react-router-dom';
import districto from "../../images/Districto.jpg"
import santiago from "../../images/santiago.png"
import romana from "../../images/romana.jpg"
import firebase from 'firebase';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState,useEffect } from 'react';
import { app } from '../../firebase';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';


const Home2 = () => {
    let history= useHistory();
    const [user,setUser]=useState("")
    const [normaluser] = useAuthState(auth)
    const cookies=new Cookies()
    var admin =cookies.get('username')

    const handlelogout=()=>{
      app.auth().signOut();
      cookies.remove('id', {path: "/"});
      cookies.remove('nombre', {path: "/"});
      cookies.remove('apellidos', {path: "/"});
      cookies.remove('username', {path: "/"});
      window.location.href='./';
    }
    const authListener=()=>{
      app.auth().onAuthStateChanged(user=>{
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

  
    function handleServicies(){
      history.push("/Home2")
    }
    function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
  }
    function notify(){
      Swal.fire(
        'Oops!',
        'You mush Sign in',
        'error'
      )
      }
    return (
      <div className="Home_page">
      <div className="wrapper">
      <div className="content">
        <h1>WELCOME TO JOB BAG</h1>
        <p>Finding a job has never been so easy</p>
        {normaluser || admin?(
      <button type="button" onClick={handlelogout}>Log out<span></span></button>
        ):(
       <button type="button" onClick={signInWithGoogle}>Sign in<span></span></button>
        )}
        {normaluser || admin?(
      <button type="button" onClick={handleServicies}>Service<span></span></button>
        ):(
       <button type="button" onClick={notify}>Service<span></span></button>
        )}
      </div>
      </div>  
      <section className="jobs">
      <h1>Jobs we offer</h1>
      <p className = "text-center">We are oferring jobs about technology including Multimedia , Artificial Intelligence, Software Developer , System Engineer etc...</p>
      <div className=" jobs-row">
        <div className="jobs-col">
         <h3>Front-end</h3>
         <p><strong>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</strong></p>
        </div>
        <div className="jobs-col">
         <h3>Back-End</h3>
         <p>A back-end developer is a type of programmer who creates the logical back-end and core computational logic of a website, software or information system. The developer creates components and features that are indirectly accessed by a user through a front-end application or system.</p>
        </div>
        <div className="jobs-col">
         <h3>Design-UI</h3>
         <p>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces</p>
        </div>
      </div>
      </section>
      <section className="places">
        <h1>We Can Meet</h1>
        <p>In Dominican Republic we are ubicated in D.N , Santiago And Romana </p>
        <div className="places_row">
          <div className="places-col">
          <img src={districto} alt=""/>
          <div className="layer">
            <h3>Districto Nacional</h3>
          </div>
          </div> 
          <div className="places-col">
          <img src={santiago} alt="" className="santiago"/>
          <div className="layer">
            <h3>Santiago</h3>
          </div>
          </div> 
          <div className="places-col">
          <img src={romana} alt="" className="romana"/>
          <div className="layer">
            <h3>Romana</h3>
          </div>
          </div> 
        </div>
      </section>
      </div>
  );
}

 
export default Home2
