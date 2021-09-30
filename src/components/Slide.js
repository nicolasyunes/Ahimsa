import React, { Component } from 'react'
import aceite from "../assets/aceite.jpg";
import crema from "../assets/crema.jpg";
import "./Slide.css"
export default class Slide extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide col-9 justify-content-center" data-bs-ride="carousel" >
                <div
                id="intro-example"
                className="p-5 text-center bg-image"
                style={{"background-image": "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')"}}>
                        <div className="mask" style={{"background-color": "rgba(0, 0, 0, 0.7)"}}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div className="text-white">
                                    <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                                    <h5 className="mb-4">Best & free guide of responsive web design</h5>
                                    <a
                                        className="btn btn-outline-light btn-lg m-2"
                                        href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                                        role="button"
                                        rel="nofollow"
                                        target="blank"
                                        >Start tutorial</a
                                    >
                                    <a
                                        className="btn btn-outline-light btn-lg m-2"
                                        href="https://mdbootstrap.com/docs/standard/"
                                        target="blank"
                                        role="button"
                                        >Download MDB UI KIT</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}
