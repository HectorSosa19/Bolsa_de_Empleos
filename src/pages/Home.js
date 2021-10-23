import React, {useEffect, useState} from 'react';
import {  useHistory } from 'react-router-dom';
import {NavLink}from 'react-router-dom'
import axios from 'axios';
import icono from '../images/Malerin.png';
import '../css/App.css';

const Home = () => {
  let history= useHistory();

    function handleClick() {
      history.push("/servicies");
    }
    function handleServicies(){
      history.push("/Empleo")
    }
    const baseUrl ="https://localhost:44305/api/generador";
    const [data, setData]=useState([]);
    
    const [gestorSeleccionado, setGestorSeleccionado]=useState({
      idempleo: '',
      descripcion:'',
      compania:'',
      tipo:'',
      posicion:'',
      ubicacion: '',
      categoria:'',
      email:'',
    });
    const handleChange=e=>{
      const{name,value}=e.target;
      setGestorSeleccionado({
        ...gestorSeleccionado,
        [name]:value
      });
      console.log(gestorSeleccionado);
    }
    
    const peticionGet=async()=>{
      await axios.get(baseUrl)
      .then(response=>{
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
    }
    useEffect(()=>{
      peticionGet();
    },[])
    return (
      <main>
      <section class=" text-center container">
        <div class="row ">
          <div class="">
          <NavLink className="navbar-brand  " to="/contact-us" exact>
            <i class="fas fa-user-tie text-dark subir tamaño"></i>
          </NavLink>
            <h1 class="fw-light">Welcome Users</h1>
            <p class="lead text-muted">What you want to do ?</p>
            <p>
              <a href="#" class="btn btn-secondary my-2 mx-2"onClick={handleServicies}>Search Job</a>
            </p>
          </div>
        </div>
      </section>
    
      <div class="album py-5 bg-light">

        <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          {data.map(consola=>(
            
              <div class="col">
                <div class="card shadow-sm">
                  <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
           
                <div class="card-body" key={consola.idempleo} >
                  <p class="card-text"><strong>Company: </strong> {consola.compania}  </p>
                  <p class="card-text"><strong>Position: </strong> {consola.posicion} </p>
                  <p class="card-text"><strong>Location: </strong>{consola.ubicacion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      </div>
                      <small class="text-muted">9 mins</small>
                         </div>
                       </div>
                     </div>
                   </div>
                  
           ))}
    
            <div class="col">
              <div class="card shadow-sm">
                <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                      
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                      
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="col">
              <div class="card shadow-sm">
              <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                      
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                      
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
              <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                     
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="col">
              <div class="card shadow-sm">
              <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                      
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img src={icono} class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-success">View</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </main>
  );
};
 
export default Home
