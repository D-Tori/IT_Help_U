import React from 'react';


type ConditionType = {
  btnName: string,
  routing?: string
}

// const ToggleBtnStyle = styled.button`
//   display: flex;
//   margin-left: 5px;
//   font-weight: ${props => props.theme.fontWeight.emphasis};
//   background-color: ${props => props.theme.colors.whiteColor};
//   border-radius: 4px;

//   .onToggle {
//     color: ${props => props.theme.colors.smalldescColor};
//     border: 1px solid ${props => props.theme.colors.smalldescColor};
//   }

//   .offToggle {
//     color: ${props => props.theme.colors.pointColor};
//     border: 1px solid ${props => props.theme.colors.pointColor};
//   }



//     @media (max-width: 767px) {
//       justify-content: center;
//       width: ${props => props.theme.width.fullWidth};
//       margin-top: 10px;
//     }
//   }
// `;

function ToggleBtn ({ btnName, routing }: ConditionType) {

  // const [isToggle, setIsToggle] = useState(false);

  // const history = useHistory();

  // const onClickHandler = () => {

  //   if( isToggle === true) setIsToggle(false);
  //   if( isToggle === false) setIsToggle(true);
  // }


  return (
    <>

    </>
  )
}

export default ToggleBtn;
