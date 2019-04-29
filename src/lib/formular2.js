import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';


const Formular2 = (props) => {
    return ( 
        <Form.Group  className='w-25 mx-auto' controlId="validationCustomUsername">
            <Form.Label className='float-left'>Username</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                   Please choose a username.
                </Form.Control.Feedback>
            </InputGroup>
      </Form.Group>
     );
}
 
export default Formular2;