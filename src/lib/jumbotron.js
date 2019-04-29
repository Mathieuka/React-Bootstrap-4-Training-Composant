import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const JumbotronComponent = (props) => {
    return ( 
        <Jumbotron>
            <h1>Hello, world</h1>
            <hr/>
            <p className='lead'>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button className='mx-auto d-block' variant='danger'>Learn more</Button>
            </p>
        </Jumbotron>
     );
}
 
export default JumbotronComponent;