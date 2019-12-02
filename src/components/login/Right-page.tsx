import React from 'react';
import Button from 'react-bootstrap/Button';
import icon from './images/icon-star.svg'
import './css/right-page.css'


function LoginRpage(){
  return(
    <div className="col col-12 col-md-6 right">
        <div className="inner text-right">
            <h3><img src= {icon} className="icon" alt="임시아이콘" />IT_Help_U</h3>
            <p> We’ve got tips and tools to keep your business growing <br/> while you’re out of the office.</p>
            <Button variant="outline-dark" type="button" className="btn btn-small btn-outline">Start learning</Button>
        </div>
    </div>
  );
}

export default LoginRpage;