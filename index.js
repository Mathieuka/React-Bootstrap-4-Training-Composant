// index.js
import React from 'react';
import { render } from 'react-dom';

import ButtonDark from './src/components/dumbComponents/ButtonJoke';
import { Button } from 'react-bootstrap';


class Index extends React.Component{

    
    render(){
        return(
           <div> 
                <Button variant="danger" className='mx-auto d-block m-3 btn btn-outline-success text-white'>Button</Button>
           </div>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
)
  













