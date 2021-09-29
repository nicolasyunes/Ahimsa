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
                <div className="card-footer">
                <footer><small>&copy; Copyright 2021, Ahimsa Corporation</small> </footer> 
                </div>
                
            </div>
        )
    }
}
