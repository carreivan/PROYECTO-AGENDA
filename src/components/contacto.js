import React, { Component } from 'react'
import ContactoNoFoto from './Img/ContactoNoFoto3.png';

import '../App.css'

export default class contacto extends Component {

    state = {
        nombre: this.props.contacto.nombre,
        numero: this.props.contacto.numero,
        email: this.props.contacto.email,
        disabled: true
    }

    //Cambiamos el valor de disabled cada que se usa esta funcion
    handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

  EstiloEditanto() {
    return {  
        color: this.state.disabled ? 'white' : '#c2c2c2',
        fontSize: this.state.disabled ? '0.9rem' : '1rem',
        border: "none",
        padding: "15px",
        margin: "4px",
        align: "center",
        textDecoration: "none",
        background: "#16A085 "
    }
}

    onSubmit = (e) => {
        e.preventDefault();
    }
    
    
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }


    render() {       
        const {contacto} = this.props;
        
        return (
            <div className="container" style={TarjetaContacto}>

                <div className="card" >
                    <img src={ContactoNoFoto} className="card-img-top" alt="ImagemContacto"/>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <h5 className="card-title">Nome</h5>
                            <div className="form-group row">
                            <input type="text"
                            id="nombre" 
                            onChange={this.onChange} 
                            name ="nombre" 
                            value={this.state.nombre}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Telefone</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="numero" 
                            value={this.state.numero}
                            disabled={(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">E-mail</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="email" 
                            value={this.state.email}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <button type="submit" className="btn btn-secundary"
                                style={this.EstiloEditanto()}
                                onClick = {this.handleGameClik.bind(this)}>
                                Editar
                            </button>
                            {"  "}
                            <button className="btn btn-primary"
                                style={btnEliminar}
                                onClick = {this.props.deleteContacto.bind(this, contacto.id)}>
                                Apagar
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const TarjetaContacto = {
    width: "21rem",
    margin: "2.5% 3.5% 1.5% 4.5%",
    align: "center",
    display: "inline-block"
}

const btnEliminar = {
    border: "none",
    color: "white",
    padding: "14px",
    align: "center",
    textDecoration: "none",
    background: "red"
}

