import React from 'react';



const ButtonTraining = (props) => {
    return ( 
        <div>
            <div className='w-50 mx-auto'>
                    <button type="button" class="btn btn-dark">btn-dark</button>
                    <button type="button" class="btn btn-light btn-outline-danger btn-sm m-2">btn-outline-danger</button>
                    <button type="button" class="btn btn-success">btn-success</button>
            </div>
            <div>
                <button type="button" class="btn btn-warning btn-block w-100 mx-auto">btn-block</button>
            </div>
        </div>
     );
}
 
export default ButtonTraining;