import React from 'react';
import styled from 'styled-components';

function MentorCard(){
  return(
    <div className="col-100 tablet-50 desktop-25">
      <CardMentor>
      <p>hello</p>
      </CardMentor>
    </div>
  );
}

export default MentorCard;

const CardMentor= styled.div`
  margin: 15px;
  margin-top: 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.09);
  position: relative;
  border-radius: 15px;
  background: #fff;
  font-size: 14px;
}
`