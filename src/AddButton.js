import React from 'react';
import { Button } from 'reactstrap';

const buttonStyle ={
  color: "black"
}

let AddButton = (props) => {
  return (
    <Button style={buttonStyle} className="btn-sm" color="warning">+ Add Book</Button>
  );
};

export default AddButton;