import React, { Component ,useState,useEffect} from 'react'
import '../../css/Menu.css';
import { useHistory } from 'react-router';
import {NavLink}from 'react-router-dom'
import $ from 'jquery';
import { app } from '../../firebase';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Navbar extends Component {
    SignOut=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        const [normaluser] = useAuthState(auth)

const handlelogout=()=>{
    app.auth().signOut();
  }
        var admin=cookies.get('username')
        function animacion(){
            var tabsNewAnim = $('#navbarSupportedContent');
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
              "top":itemPosNewAnimTop.top + "px", 
              "left":itemPosNewAnimLeft.left + "px",
              "height": activeWidthNewAnimHeight + "px",
              "width": activeWidthNewAnimWidth + "px"
            });
            $("#navbarSupportedContent").on("click","li",function(e){
              $('#navbarSupportedContent ul li').removeClass("active");
              $(this).addClass('active');
              var activeWidthNewAnimHeight = $(this).innerHeight();
              var activeWidthNewAnimWidth = $(this).innerWidth();
              var itemPosNewAnimTop = $(this).position();
              var itemPosNewAnimLeft = $(this).position();
              $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
              });
            });
        }
        useEffect (() => {
        
          animacion();
          $(window).on('resize',function(){
             setTimeout(function() { animacion(); },500);
          });
        
        }, [])
        return (
            <nav className="nav navbar-expand-lg navbar-mainbg justify-content-end">
      
  <NavLink className="navbar-brand navbar-logo bajar" to="/" exact>
  <i class="fas fa-briefcase"></i>
      Job Bag
  </NavLink>

  <button 
  className=" navbar-toggler justify-content-end "
  onClick={ function(){
    setTimeout(function(){ animacion(); });
  }}
  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fas fa-bars text-white "></i>
</button> 

  <div  className=" collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul   className="navbar-nav ml-auto mover">
          <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
          </div>
          <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
              <i className=" fas fa-tachometer-alt"></i>
                  Home
              </NavLink>
          </li>
          <li className="nav-item">
            {normaluser?(
              <NavLink className="nav-link" to="/" onClick={handlelogout} exact>
              <i className=" far fa-chart-bar"></i>
                  Log Out
              </NavLink>
              ):(
                <NavLink className="nav-link" to="/signin" exact>
              <i className=" far fa-chart-bar"></i>
                  Admin Mode
              </NavLink>
              )}
               {admin?(
              <NavLink className="nav-link" to="/" onClick={()=>this.SignOut()} exact>
              <i className=" far fa-chart-bar"></i>
                  Cerrar Sesion
              </NavLink>
              ):(
              console.log("No ha iniciado sesion")
              )}

    
          </li>
      </ul>
  </div>


</nav>

)
}
}

    

