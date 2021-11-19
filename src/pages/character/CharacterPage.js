import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button, ListGroup, Container } from 'react-bootstrap';
import EpisodeCard from '../../components/episode-card/EpisodeCard';
import { useParams } from 'react-router';
import NavBar from '../../components/navbar/NavBar';



const CharacterPage = () => {

    const { id } = useParams()

    const [character, setCharacter] = useState()
    const [episode, setepisode] = useState()

    console.log(episode)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => { setCharacter(res.data) })
        axios.get(`https://rickandmortyapi.com/api/episode?characters=${character?.url}`).then(res => { setepisode(res.data) })
    }, [])


    return (
        <>
        <header>
        <NavBar/>
        </header>
            <section>
                <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={character?.image} />
                    <Card.Body>
                        <Card.Title>{character?.name}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="text-center">Species: {character?.species}</ListGroup.Item>
                            <ListGroup.Item className="text-center">Gender: {character?.gender}</ListGroup.Item>
                            <ListGroup.Item className="text-center">Status: {character?.status}</ListGroup.Item>
                            <ListGroup.Item className="text-center">Location: {character?.location?.name}</ListGroup.Item>

                        </ListGroup>
                        <Card.Text>

                        </Card.Text>
                        {episode?.results.map((episodes, index) => (<EpisodeCard key={index} episodes={episodes} />))}
                    </Card.Body>
                </Card>
                </Container>
            </section>
        </>
    )
}

export default CharacterPage