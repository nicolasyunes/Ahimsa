import React, { Component } from 'react'
import logo512 from "../assets/logo512.png"
import crema from "../assets/crema.jpg"
import aceite from "../assets/aceite.jpg"
import aceite2 from "../assets/aceite2.jpg"
import "./Card.css"
export default class Card extends Component {
    render() {
        return (
        <div className="row justify-content-between">
        
        
            <div className="card m-2 col-md-3 col-sm-12 animate__animated animate__fadeInDownBig animate__delay-1s" >
                <img src={crema} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">CremaCBD</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" className="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>
            <div className="card m-2 col-md-3 col-sm-12 animate__animated animate__fadeInDownBig animate__delay-1s" >
                <img src={aceite} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">Aceite CBD</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" className="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>
            <div className="card m-2 col-md-3 col-sm-12  animate__animated animate__fadeInDownBig animate__delay-1s" >
                <img src={aceite2} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">Kit CDB</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" className="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>
            
        </div>
        )
    }
}
