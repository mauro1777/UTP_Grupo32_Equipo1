import React, { useContext } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../../components/CargarImagenes.css'
import canasta from '../../components/Header Footer barra de menu principal/basket2.svg'
import { Link } from 'react-router-dom';
import { ProductProvider } from '../../context/ProductContext';
import AuthContext from "../../context/AuthContext";


const Dashboard = () => {

    const {handleLogout} = useContext(AuthContext);


    return (
        <div>
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
                        <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo" href="#catalogo">catalogo</Nav.Link>
                        {/**<Nav.Link as={Link} to="/crear" href="#crear" >Crear producto</Nav.Link>
                            <Nav.Link as={Link} to="/modificar" href="#modificar">Modificar producto</Nav.Link>
                            <Nav.Link as={Link} to="/consultar" href="#consultar">Consultar producto</Nav.Link> */}
                            
                            <Nav.Link as={Link} to="/recetas" href="#recetas">Recetas</Nav.Link>
                            <Nav.Link  href="#salir" onClick={handleLogout} >Salir</Nav.Link>
                        </Nav>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            {/**Aquí se mostrarán las componentes al navegar por las opciones del navbar */}
            <ProductProvider>
              <Outlet/>  
            </ProductProvider>
            
        </div>
    )
}

export default Dashboard
