import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from '../../components/card/CharacterCard';
import { Container, Row, Nav, Navbar, Button, Pagination } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';

import logo from './img/logo.png'


const Home = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(res => { setCharacters(res.data) })
    }, []);

    const allCharacters = characters.results;

    const nextPage = () => { axios.get(characters.info?.next).then(res => { setCharacters(res.data) }) };
    const backPage = () => { axios.get(characters.info?.prev).then(res => { setCharacters(res.data) }) };


    return (
        <>
            <header>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="95px"
                                className="d-inline-block align-top"
                                alt="Rick and Morty logo"
                            />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            <Row style={{ background: "black", padding: "110px" }}>
                {allCharacters?.map((character, index) => (<CharacterCard key={index} character={character} />))}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {characters.info?.prev && <Button style={{margin:"20px"}} onClick={backPage}>Back</Button>}
                    <Button style={{margin:"20px"}} onClick={nextPage}>Next</Button>
                </div>
            </Row>



        </>
    )

}

export default Home