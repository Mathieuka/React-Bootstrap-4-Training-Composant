import React from 'react';
import { Badge, Button } from 'react-bootstrap';


const BadgeComponent = (props) => {
    return ( 
        <div>
            <h1>
                <Badge variant='info'>My Badge</Badge>
            </h1>
            <Button type='button' className='btn btn-dark mb-3'>
             Message <Badge variant='light'>0</Badge>
            </Button>
            <h1>
                <Badge pill variant='warning'>My badge</Badge>
            </h1>
        </div>
     );
}
 
export default BadgeComponent;