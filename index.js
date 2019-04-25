// index.js
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';


class Index extends React.Component{

    
    render(){
        return(
           <section className='p-5 text-center'>  
                <h1 className='mb-5 bg-dark p-5 text-white'>Les classes <b className='text-danger'>boutons</b></h1>
                <Button variant="dark" className='m-1'>Button</Button>
                <Button variant="light" className='btn btn-outline-danger m-1'>Button</Button>
                <Button variant='primary' className='btn btn-sm m-1'>Button Small</Button>
                <Button variant='success' className ='btn btn-lg btn-block mt-1'>Large button</Button>
           </section>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
)
  













