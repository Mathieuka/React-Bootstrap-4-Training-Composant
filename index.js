// index.js
import React from 'react';
import { render } from 'react-dom';
import ButtonTraining from './src/lib/button';
import AlertAndSuccessButton from './src/lib/alertAndSuccessButton';
import NavigationBar from './src/lib/navigationBar';
import BadgeComponent from './src/lib/badge';
import Formular from './src/lib/formular';
import Formular2 from './src/lib/formular2';


class Index extends React.Component{

    
    render(){
        return(
           <section className='p-5 text-center'>  
                <h1 className='mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>Buttons</b></h1>
                <ButtonTraining/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>Alert</b></h1>
                <AlertAndSuccessButton/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>Navigation Bar</b></h1>
                <NavigationBar/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>Badge</b></h1>
                <BadgeComponent/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>Formular</b></h1>
                <Formular/>
                <h1 className='mt-5 mb-3 bg-dark p-5 text-white'>The class <b className='text-danger'>Formular Prepend</b></h1>
                <Formular2/>
           </section>
        )
    }
}

render(
      <Index/>,
      document.getElementById('root')
)
  













