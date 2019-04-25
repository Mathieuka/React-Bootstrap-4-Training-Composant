import React from 'react';




const AlertAndSuccessButton = (props) => {
    return ( 
        <div>
            <div class="alert alert-primary " role="alert">
                This is a primary alert—check it out!
            </div>
            <div class="alert alert-success  mt-3 " role="alert">
              <div>This is a <a href="" class="alert-link">success</a> link!</div>
            </div>
            <div className="alert alert-warning" role="alert">
                <h3 className="alert-heading">The Header !</h3>
                <p>This is an paragraph for an example</p>
               
            </div>
        </div>
     );
}
 
export default AlertAndSuccessButton;