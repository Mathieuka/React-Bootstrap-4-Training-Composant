import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const ProgressionBar = (props) => {
    let value = 20;
    return (
        <div>
            <div>
                <ProgressBar animated variant="success" now={40} />
                <ProgressBar variant="info" label={`${value}%`} now={value}/>
                <ProgressBar style={{height:'5'}} variant="warning" now={60} />
                <ProgressBar variant="danger" now={80} />
            </div>
            <div className='mt-5'>
                <ProgressBar>
                <ProgressBar striped variant="success" now={35} key={1} />
                <ProgressBar variant="warning" now={20} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
                </ProgressBar>
            </div>
      </div>
       
     );
}
 
export default ProgressionBar;