import React, {useEffect, useState} from 'react';
import {NavLink}from 'react-router-dom';
import '../../css/App.css';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete, AddCircle, Work,Close} from '@material-ui/icons';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import image from '../../images/carta.jpg'

function App() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'      
    }
  }));

  
  const baseUrl ="https://localhost:44305/api/generador";
  const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalEditar, SetModalEditar]=useState(false);
  const [modalInsertar, SetModalInsertar]=useState(false);
  const [modalEliminar, SetModalEliminar]=useState(false);
  const [modalDetalles, SetModalDetalle]=useState(false);
  const [normaluser] = useAuthState(auth);
  const [busqueda,setBusqueda]=useState("");
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
  const handleBuscar=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar =(terminoBusqueda)=>{
    let resultadobusqueda= data.filter((elemento)=>
    {
      if(elemento.compania.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.ubicacion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))
      {
        return elemento;
      }
    });
    setData(resultadobusqueda);
  }
  const AbrirCerrarModalInserta=()=>{
    SetModalInsertar(!modalInsertar);
  }
  const AbrirCerrarModalEditar=()=>{
    SetModalEditar(!modalEditar);
  }

  const AbrirCerrarModalEliminar=()=>{
    SetModalEliminar(!modalEliminar);
  }
  const AbrirDetalle=()=>{
    SetModalDetalle(!modalDetalles);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }
  const peticionPost=async()=>{
    delete gestorSeleccionado.idempleo;
    await axios.post(baseUrl, gestorSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      AbrirCerrarModalInserta();
    }).catch(error=>{
      console.log(error);
    })
  }
  

  const peticionPut = async()=>{
    await axios.put(baseUrl +'/'+ gestorSeleccionado.idempleo,gestorSeleccionado)
    .then(response=>{
      var respuesta=response.data;
      var dataAuxiliar=data;
      dataAuxiliar.map(gestor=>{
        if(gestor.idempleo === gestorSeleccionado.idempleo){
          gestor.descripcion = respuesta.descripcion;
          gestor.compania = respuesta.compania;
          gestor.tipo = respuesta.tipo;
          gestor.posicion = respuesta.posicion;
          gestor.ubicacion = respuesta.ubicacion;
          gestor.categoria = respuesta.categoria;
          gestor.email = respuesta.email;
        }
      });
      AbrirCerrarModalEditar();
    }).catch(error=>{
    console.log(error);
    })
  }
  

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+"/"+gestorSeleccionado.idempleo)
    .then(response=>{
      setData(data.filter(gestor=>gestor.idempleo!==response.data));
        AbrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  } 

  const seleccionarGestor=(gestor, caso)=>{
    setGestorSeleccionado(gestor);
    (caso==="Editar")?
    AbrirCerrarModalEditar():AbrirCerrarModalEliminar();
  }
  const seleccionarGestor2=(gestor, caso)=>{
    setGestorSeleccionado(gestor);
    (caso==="Editar")?
    AbrirCerrarModalEditar():AbrirDetalle();
  }
  useEffect(()=>{
    peticionGet();
  },[])
  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Add a new job</h3>
      <br />
      <TextField name="compania" className={styles.inputMaterial} label="Company" onChange={handleChange}/>
      <br />
      <TextField name="tipo" className={styles.inputMaterial} label="Type" onChange={handleChange}/>
      <br />
      <TextField name="posicion" className={styles.inputMaterial} label="Position" onChange={handleChange}/>
      <br />
      <TextField name="ubicacion" className={styles.inputMaterial} label="Location" onChange={handleChange}/>
      <br />
      <TextField name="categoria" className={styles.inputMaterial} label="Category" onChange={handleChange}/>
      <br />
      <TextField name="email" className={styles.inputMaterial} label="Email" onChange={handleChange}/>
      <br/>
      <TextField name="descripcion" className={styles.inputMaterial } label="Description" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insert</Button>
        <Button onClick={()=>AbrirCerrarModalInserta()}>Cancel</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Edit Job</h3>
      <br />
      <TextField name="compania" className={styles.inputMaterial} label="Company" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.compania}/>
      <br />
      <TextField name="tipo" className={styles.inputMaterial} label="Type" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.tipo}/>
      <br />
      <TextField name="posicion" className={styles.inputMaterial} label="Position" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.posicion}/>
      <br />
      <TextField name="ubicacion" className={styles.inputMaterial} label="Location" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.ubicacion}/>
      <br />
      <TextField name="categoria" className={styles.inputMaterial} label="Category" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.categoria}/>
      <br />
      <TextField name="email" className={styles.inputMaterial} label="Email" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.email}/>
      <br />
      <TextField name="descripcion" className={styles.inputMaterial} label="Description" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.descripcion}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Edit</Button>
        <Button onClick={()=>AbrirCerrarModalEditar()}>Cancel</Button>
      </div>
    </div>
  )
  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Are you sure you want to delete the company <b>{gestorSeleccionado && gestorSeleccionado.compania}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()} >Yes</Button>
        <Button onClick={()=>AbrirCerrarModalEliminar()}>No</Button>
      </div>

    </div>
  )
  const bodydetalles=(
    <div class="card col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a  class="d-flex align-items-center text-dark text-decoration-none">
          <span class="fs-4">View Job</span>
          <Close onClick={()=>AbrirDetalle()} className="Dise" />
        </a>
      </header>
      <main>
        <div>
          <img src={image} width="350" height="350" align="right"/>
          <h1><strong>{gestorSeleccionado && gestorSeleccionado.compania}</strong></h1>
          <br/>
          <p class="fs-5 col-md-8">
            <strong>Code:</strong> {gestorSeleccionado && gestorSeleccionado.idempleo}
          </p>
          <p class="fs-5 col-md-8">
            <strong>Type:</strong> {gestorSeleccionado && gestorSeleccionado.tipo}
          </p>
          <p class="fs-5 col-md-8">
            <strong>Position:</strong> {gestorSeleccionado && gestorSeleccionado.posicion}
          </p>
          <p class="fs-5 col-md-8">
            <strong>Location:</strong> {gestorSeleccionado && gestorSeleccionado.ubicacion}
          </p>
          <p class="fs-5 col-md-8">
            <strong>Category:</strong> {gestorSeleccionado && gestorSeleccionado.categoria}
          </p>
          <p class="fs-5 col-md-8">
            <strong>Email:</strong>{gestorSeleccionado && gestorSeleccionado.email}
          </p>
          <br/> 
        </div> 
        <hr class="col-3 col-md-2 mb-5"/>
        <div class="row g-5">
          <div class="col-md-6">
            <h2><strong>Descrption of Job</strong></h2>
            <p>{gestorSeleccionado && gestorSeleccionado.compania} </p>
          </div>
    
          <div class="col-md-6">
            <h2><strong>How apply:</strong></h2>
            <p></p>
          </div>
        </div>
      </main>
    </div>
  )
    return (
<div class="">
<header class="bg-dark py-5" src="">
<div class="container px-5">
    <div class="row gx-5 justify-content-center">
        <div class="col-lg-6">
            <div class="text-center my-5">
                <h1 class="display-5 fw-bolder text-white mb-2">Jobs</h1>
                <p class="lead text-white-50 mb-4">Search the job of your profession!</p>
                  <form class="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                      <div class="row">
                          <div class="col">
                              <input class="form-control form-control-lg inputBuscar" value={busqueda} onChange={handleBuscar} type="email" placeholder="White a Job..." data-sb-can-submit="no"/>
                          </div>
                          <div class="col-auto"><button class="btn btn-outline-light btn-lg " type="submit">Search</button></div>
                      </div>
                      <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                  </form>
              </div>
        </div>
    </div>
</div>
</header>
    <section class="py-5 " id="features">
     <TableContainer>
       <Table className={"table table-bordered table-hover"}>
         <TableHead >
           <TableRow className={"table-hover"} >
             <TableCell>Code</TableCell>
             <TableCell>Location</TableCell>
             <TableCell>Position</TableCell>
             <TableCell>Company</TableCell>
             <TableCell>Actions</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(consola=>(
             <TableRow key={consola.idempleo}>
               <TableCell>{consola.idempleo}</TableCell>
               <TableCell>{consola.ubicacion}</TableCell>
               <TableCell>{consola.posicion}</TableCell>
               <TableCell>{consola.compania}</TableCell>
               <TableCell>
                  <AddCircle className={styles.iconos} onClick={()=>AbrirCerrarModalInserta()}/>
                  &nbsp;&nbsp;&nbsp;
                  {normaluser?(<Edit className={styles.iconos} onClick={()=>seleccionarGestor(consola, 'Editar')}style={{display: "none"}}/>):
                  (<Edit className={styles.iconos} onClick={()=>seleccionarGestor(consola, 'Editar')}/>)}
                 &nbsp;&nbsp;&nbsp;
                 {normaluser?(<Delete  className={styles.iconos} onClick={()=>seleccionarGestor(consola, 'Eliminar')}style={{display: "none"}}/>):
                 (<Delete  className={styles.iconos} onClick={()=>seleccionarGestor(consola, 'Eliminar')}/>)}
                 &nbsp;&nbsp;&nbsp;
                 <Work  className={styles.iconos} onClick={()=>seleccionarGestor2(consola, 'Detalle')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
     <Modal
     open={modalInsertar}
     onClose={AbrirCerrarModalInserta}>
        {bodyInsertar}
     </Modal>

     <Modal
     open={modalEditar}
     onClose={AbrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={AbrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
     <Modal
     open={modalDetalles}
     onClose={AbrirDetalle}>
        {bodydetalles}
     </Modal>
     <NavLink className="btn btn-link " to="/Home2">
        <button type="button"  href="/Home2" className="btn btn-link mover" >Show more...</button>
      </NavLink>
     
</section>
</div>
    )
}

export default App;