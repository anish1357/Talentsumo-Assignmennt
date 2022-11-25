import React from "react"
import {Button, formGroupClasses} from "@mui/material" 
import Typography from "@mui/material/Typography"
const CustomButton = ({fullWidth,disabled,color,backgroundColor,name,borderRadius,onClick}) => {
   
   
   return (
      <Button onClick={onClick} fullWidth={fullWidth ? true : false} disabled={disabled ? true :  false} variant={"contained"} sx={{ color: `${color}`, backgroundColor: `${backgroundColor}`,textTransform: 'none', borderRadius : `${borderRadius}`}}>
       <Typography variant="subtitle2" >
       {name}
       </Typography>
      </Button>
);
}
export default CustomButton;