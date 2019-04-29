// index.js
import React from 'react';
import { render } from 'react-dom';
import ButtonTraining from './src/lib/button';
import AlertAndSuccessButton from './src/lib/alertAndSuccessButton';
import NavigationBar from './src/lib/navigationBar';

class Index extends React.Component{

    
    render(){
        return(
           <section className='p-5 text-center'>  
                <h1 className='mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>buttons</b></h1>
                <ButtonTraining/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>alert</b></h1>
                <AlertAndSuccessButton/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>navigation bar</b></h1>
                <NavigationBar/>
           </section>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
)
  













