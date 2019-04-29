import React from 'react'; 
import { Form } from 'react-bootstrap';




const Formular = (props) => {
    return ( 
        <Form className='w-25 mx-auto'>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className='float-left'>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter email'></Form.Control>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group>
                    <Form.Label className='float-left' >Firstname</Form.Label>
                    <Form.Control type='text' placeholder='Firstname..' value='Mathieu' readOnly></Form.Control>
                    <Form.Text className="text-muted">You can't modified this field</Form.Text>
            </Form.Group>
            <Form.Group>
                    <Form.Label className='float-left' >Firstname</Form.Label>
                    <Form.Control type='text' placeholder='Firstname..' value='Mathieu' readOnly plaintext></Form.Control>
                    <Form.Text >You can't modified this field</Form.Text>
            </Form.Group>
        </Form>
     );
}
 
export default Formular;