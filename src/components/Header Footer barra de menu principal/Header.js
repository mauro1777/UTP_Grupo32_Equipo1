import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../CargarImagenes.css'
import canasta from './basket2.svg'
import { Link } from 'react-router-dom';
import crear from '../Crear'

const Header = () => {
    return (
        <div className="header">
            <Navbar>
                <Container >
                    <Navbar.Brand href="#home" >

                        <img
                            src={canasta}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        &nbsp;
                        &nbsp;
                        <b className="letraHeader">Catálogo de Productos</b>
                        <Nav className="me-auto">
<<<<<<< HEAD
                            <Nav.Link >Crear producto</Nav.Link>
                            <Nav.Link href="#features">Modificar producto</Nav.Link>
                            <Nav.Link href="#pricing">Consultar producto</Nav.Link>
                            <Nav.Link href="#pricing">Recetas</Nav.Link>
=======
                            <Nav.Link href="/crear">Crear producto</Nav.Link>
                            <Nav.Link href="/modificar">Modificar producto</Nav.Link>
                            <Nav.Link href="/consultar">Consultar producto</Nav.Link>
                            <Nav.Link href="/recetas">Recetas</Nav.Link>
>>>>>>> c2e414215f006f0f9ada677c848100ff5dcb2e9b
                        </Nav>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}


export default Header;