import React from 'react';
import styled from 'styled-components';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButton from 'react-bootstrap/ToggleButton'
import MenuTitle from '../MenuTitle';

function MentorField(){
  return(
    <Field>
        <MenuTitle />
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox">
            <ToggleButton value = "1">Java</ToggleButton>
            <ToggleButton value = "2">JavaScript</ToggleButton>
            <ToggleButton value = "3">HTML</ToggleButton>
            <ToggleButton value = "4">CSS</ToggleButton>
            <ToggleButton value = "5">C/C++</ToggleButton>
            <ToggleButton value = "6">Go</ToggleButton>
            <ToggleButton value = "7">Python</ToggleButton>
            <ToggleButton value = "8">React</ToggleButton>
            <ToggleButton value = "9">Angular</ToggleButton>
            <ToggleButton value = "10">Vue</ToggleButton>
            <ToggleButton value = "11">PHP</ToggleButton>
            <ToggleButton value = "12">C#</ToggleButton>
            <ToggleButton value = "13">MATLAP</ToggleButton>
            <ToggleButton value = "14">Ruby</ToggleButton>
            <ToggleButton value = "15">TypeScript</ToggleButton>
            <ToggleButton value = "16">Kotlin</ToggleButton>
            <ToggleButton value = "17">Swift</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
    </Field>
  );
}

export default MentorField;

const Field = styled.div`
  margin: 35px 0;
  box-sizing: border-box;
  position: relative;
  letter-spacing: 0;
  font-size: 100%;

  .btn{
    color: #4a47d5;
    background-color: white;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 4px !important;
  }
  
  .btn-group{
    display:block;
  }

  .btn-primary:not(:disabled):not(.disabled).active{
    background-color: #4a47d5;
    border-color: #4a47d5;
  }
`