import React from "react"
import {Button, formGroupClasses} from "@mui/material" 
import Typography from "@mui/material/Typography"
const CustomButton = ({fullWidth,disabled,color,backgroundColor,name,borderRadius,onClick}) => {
   
   
   return (
      <Button onClick={onClick} fullWidth={fullWidth ? true : false} disabled={disabled ? true :  false} 
      variant={"contained"} sx={{ color: `${color}`, backgroundColor: `${disabled ? "black" : backgroundColor}`,
      textTransform: 'none', borderRadius : `${borderRadius}`,'&.Mui-disabled': {
         backgroundColor: "rgba(90,90,90,0.8)",color:"white"
       },}}>
       <Typography variant="subtitle2" >
       {name}
       </Typography>
      </Button>
);
}
export default CustomButton;