import React from 'react'
import { Form, Button, Col, Row} from 'react-bootstrap';
import '../css/App.css';
import {  useHistory } from 'react-router-dom';

const New_Job = () => {
  let history= useHistory();

  function handleClick() {
    history.push("/Empleo");
  }
  function handleServicies(){
    history.push("/Home2")
  }
    return (
      
      <section class=" bajar ">
      <div class="mask d-flex align-items-center h-100 gradient-custom">
        <div class="container">
          
          <div class="row justify-content-center">
            
            <div class="col-12 col-lg-9 col-xl-7 ">
              
              <div class="card shadow-sm">
              <div class=" modal-header bg-dark">

              <h3 class="text-white"><strong> Registration Form</strong></h3>
            </div>
                <div class="card-body p-4 p-md-5">
                  
    
                  <form action="">
    
                    <div class="row ">
                      <div class="col-md-6 mb-4">
    
                        <div class="form-outline">
                        <label class="form-label" for="firstName">Compañia</label>
                          <input type="text" id="firstName" class="form-control" />
                          
                        </div>
    
                      </div>
                      <div class="col-md-6 mb-4">
    
                        <div class="form-outline">
                          <label class="form-label" for="lastName">Posicion</label>
                          <input type="text" id="lastName" class="form-control" />
                          
                        </div>
    
                      </div>
                    </div>
    
                    <div class="row">
                      <div class="col-md-6 mb-4">
    
                        <div class="form-outline datepicker">
                        <label for="birthdayDate" class="form-label">Ubicacion</label>
                          <input
                            type="text"
                            class="form-control"
                            id="birthdayDate"
                          />
                        </div>
    
                      </div>
                      <div class="col-md-6 mb-4">
    
                        <h6 class="mb-2 pb-1">Tipo: </h6>
    
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label class="form-check-label" for="femaleGender">Full Time</label>
                        </div>
    
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label class="form-check-label" for="maleGender">Part Time</label>
                        </div>
    
                        <div class="form-check form-check-inline">
                        <label class="form-check-label" for="otherGender">Freelance</label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          
                        </div>
    
                      </div>
                    </div>
    
                    <div class="row">
                      <div class="col-md-6 mb-4">
    
                        <div class="form-outline">
                          <label class="form-label" for="emailAddress">Email</label>
                          <input type="email" id="emailAddress" class="form-control" />
                          
                        </div>
    
                      </div>
                      <div class="col-md-6 mb-4">
    
                      <div class="">
                      <label for="inputState">Categoria</label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                        
                      </div>
    
                      </div>
                      <div class="col-md-6 mb-4">
    
                        <div class="form-outline">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">Descricion del empleo</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>
    
                      </div>
                      <div class="col-md-6 mb-4">
    
                        <div class="form-outline">
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">Como Aplicar</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 ">
    
                        <div class="">
                          <div class="modal-body d-flex justify-content-between">
                            <button type="button" class="btn btn-secondary col-md-6" data-bs-dismiss="modal"onClick={handleServicies}>Atras</button>
                            <button  type="submit" class="btn btn-outline-success col-md-6 mx-2 "onClick={handleClick}>Agregar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  

                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default New_Job
