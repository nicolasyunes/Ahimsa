import React, { Component } from 'react'
import  "./Title.css"
export default class Title extends Component {
    render() {
        return (<div className="jumbotron">
        <h1 className="display-4">Hola, somos AHIMSA!</h1>
        
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"></hr>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="# !" role="button">Learn more</a>
        </p>
      </div>)
    }
}
