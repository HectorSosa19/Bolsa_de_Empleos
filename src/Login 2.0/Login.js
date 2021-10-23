import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import admin from "../images/3.png"
import axios from "axios"
import Cookies from "universal-cookie"
import Swal from "sweetalert2"

const BaseUrl="https://localhost:44355/api/usuarios"
const cookies=new Cookies();

export default class Login extends Component {
    state={
        form:{

            username:"",
            password:"",
        }
    }
    handleChange= async e=>{
       await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
        console.log(this.state.form);
    }

    Signin=async()=>{
        await axios.get(BaseUrl,{params:{username:this.state.form.username,password:this.state.form.password}})
        .then(response=>{
            return response.data
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                window.location.href="./";
            }else{
                Swal.fire(
                    'Oops!',
                    'El Usuario o la Constraseña son incorrectas',
                    'error'
                  )
            }
        })
        .catch(error=>{
            console.log(error)
        })     
      }     

      handelSubmit=(event)=>{
          event.preventDefault()
          
      }

      componentDidMount(){
          if(cookies.get('username')){
            window.location.href="./";
          }

      }

    render() {
        return ( 
            <div className="modal-dialog text-center">
            <h1 className="display-4 text-primary">Admin Login</h1>
            <hr className="my-4 text-primary"/>
            <div className="col-sm-8 main-section">
                <div className="modal-content">
                    <div className="col-12 user-img">
                        <img src={admin} alt=""/>
                    </div>
                    <form className="col-12" onSubmit={this.handelSubmit}>
                        <div className="form-group" id="user-group">
                            <input type="text" className="form-control" placeholder="Usuario" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="form-group" id="contrasena-group">
                            <input type="password" className="form-control" placeholder="Contraseña" name="password" onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary" onClick={()=>this.Signin()}>Ingresar </button>
                    </form>
            </div>
            </div>
            </div>
        )
    }
}

