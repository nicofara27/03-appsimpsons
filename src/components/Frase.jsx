import { Container } from 'react-bootstrap';

const Frase = ({personaje}) => {
    return (
        <Container className='bg-white rounded my-5 py-4 d-flex justify-content-evenly'>
            <article >
            <img src={personaje.image} alt={personaje.character}  className='w-100'/>
            </article>
            <article className='text-start me-5'>
            <h4 className='fw-bold'>{personaje.character}</h4>
            <p>{personaje.quote}</p>
            </article>
        </Container>
    );
};

export default Frase;