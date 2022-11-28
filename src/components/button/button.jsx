import React from "react";
import { BUTTON_TYPES } from "../../common/data/buttonConst";
import "./button.css"

const Button = (props) => {
    const {type, btnText}= props;

    const getButtonClass=()=>{
      switch(type){
        case BUTTON_TYPES.PRIMARY:
        return "primaryBtn button";

           default:
            return 'secondaryBtn button';
      }
    };

    return (
      <div className={`${getButtonClass()}`}>
        {btnText}
      </div>
    )
  }
  
  export default Button