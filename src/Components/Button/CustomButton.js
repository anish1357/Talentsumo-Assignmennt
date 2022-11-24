import React from "react"
import {Button} from "@mui/material" 
import Typography from "@mui/material/Typography"
const CustomButton = (props) => {
   
   
   return (
      <Button fullWidth={true} variant={"contained"} sx={{ color: `${props.color}`, backgroundColor: `${props.backgroundColor}`,textTransform: 'none', borderRadius : `${props.borderRadius}`}}>
       <Typography variant="subtitle2" >
       {props.name}
       </Typography>
      </Button>
);
}
export default CustomButton;