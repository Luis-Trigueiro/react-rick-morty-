import React, { useState, useEffect } from 'react';
import axios from "axios";
import CharacterCard from '../../components/card/CharacterCard';
import { Container, Row,Button} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import NavBar from '../../components/navbar/NavBar';




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
              <NavBar/>
            </header>

            <Row style={{ background: "black", padding: "26px 0 0 50px" }}>
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