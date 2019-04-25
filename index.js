// index.js
import React from 'react';
import { render } from 'react-dom';
import ButtonTraining from './src/lib/button';
import AlertAndSuccessButton from './src/lib/alertAndSuccessButton';

class Index extends React.Component{

    
    render(){
        return(
           <section className='p-5 text-center'>
           <h1 className='mb-5 p-5 bg-dark text-white'>Les classes <b className='text-danger'>buttons</b></h1>  
               <ButtonTraining/>
           <h1 className='mb-5 mt-5 p-5 bg-dark text-white'>Les classe <b className='text-danger'>alert</b></h1>
               <AlertAndSuccessButton/>
           </section>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
)
  













