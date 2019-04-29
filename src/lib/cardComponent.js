import React from 'react';  
import { Card, Button, CardColumns } from 'react-bootstrap';


const CardComponent = (props) => {
    return ( 
        <Card className='mx-auto  w-25' >
            <Card.Header>My Card Header</Card.Header>
            <Card.Img variant="top" src="https://resize.programme-television.ladmedia.fr/r/1120,600/img/var/premiere/storage/images/racine/film/ninja-turtles-2-4462259/ninja-turtles-2-4462406/ninja-turtles-217/89883974-1-fre-FR/Ninja-Turtles-2.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
     );
}
 
export default CardComponent;



