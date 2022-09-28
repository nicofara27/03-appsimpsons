import React from 'react';
import { Container } from 'react-bootstrap';

const Frase = () => {
    return (
        <Container className='bg-white rounded my-5 py-4 d-flex justify-content-evenly'>
            <article >
            <img src={require("./../img/homero.png")} alt=""  className='w-100'/>
            </article>
            <article className='text-start me-5'>
            <h4 className='fw-bold'>Homer Simpson</h4>
            <p>Facts are miningless. You could use facts to prove anything thats even remotely true.</p>
            </article>
        </Container>
    );
};

export default Frase;