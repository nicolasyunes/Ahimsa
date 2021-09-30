import React, { Component } from 'react'
import "./Footer.css"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer card">
                <div className="card-header ">
                    <h3 className="contact"><i className="fas fa-user-plus"></i></h3>
                </div>
                <div className="card-body">
                    <div className="col-12 m-3">
                        <div className="justify-content-center d-flex">
                            <h6 className="title-footer">Encontranos en todas las redes sociales</h6>
                        </div>
                        <div className="row col-12 justify-content-center">
                            
                            <div className="col-2 item">
                                <a target="blank" href="https://www.facebook.com/ememierez">  <i  className="fab fa-facebook-square"></i></a>
                            </div>
                            <div className="col-2 item">
                                <a target="blank" href="https://www.instagram.com/ahimsaproductosnaturales/">   <i className="fab fa-instagram" ></i></a>
                            </div>
                            <div className="col-2 item">
                            <a target="blank" href="https://api.whatsapp.com/send?phone=+543794012194"><i className="fab fa-whatsapp"></i></a>    
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className="col-12">
                <div className="row">
                    <div className="contact-container col-6 flex-lg-column d-flex justify-content-center">
                        <div className="contact-title p-1">Contact Us </div>
                        
                        <div className="contact-info">
                            <ul>
                                <p>
                                    <i className="fas fa-map-marker-alt"> Corrientes, Argentina.</i>
                                    
                                </p>
                               <p>
                               <i className="fas fa-phone-volume"> +54111111111</i>
                               </p>
                               <p>
                               <i className="fas fa-at">maildeprueba@gmail.com</i>
                               </p>

                               
                            </ul>
                        </div>
                    </div>
                    <div  className="col-6 contact-input">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                    

                </div>
                <div className="card-footer">
                <footer><small>&copy; Copyright 2021, Ahimsa Corporation</small> </footer> 
                </div>
                
            </div>
        )
    }
}
