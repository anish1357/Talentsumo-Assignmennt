import React from "react"
import {Button, formGroupClasses} from "@mui/material" 
import Typography from "@mui/material/Typography"
const CustomButton = (props) => {
   
   
   return (
      <Button fullWidth={props.fullWidth ? true : false} disabled={props.disabled ? true :  false} variant={"contained"} sx={{ color: `${props.color}`, backgroundColor: `${props.backgroundColor}`,textTransform: 'none', borderRadius : `${props.borderRadius}`}}>
       <Typography variant="subtitle2" >
       {props.name}
       </Typography>
      </Button>
);
}
export default CustomButton;