import React from "react"
import {Card,CardHeader,CardContent,CardActions,CardMedia,Box} from "@mui/material" 
import Typography from "@mui/material/Typography"
import CustomButton from "../Button/CustomButton"
// import image from "./147142.png"
import logo from './avatar.png';
  const CustomCard2 = (props) =>  {
   
   
   return (
    <Card sx={{ maxWidth: "90%"}} variant="outlined" raised={true}>
        <CardHeader sx={{color: 'white', backgroundColor: 'black'}} title= {`Congratulations ${props.name},you are a explorer`} titleTypographyProps={{variant:'subtitle1' }}/>
        <CardContent sx={{display: "flex", maxWidth : "100%" }}>
        <CardMedia component="img" sx={{ width: 180 }} image= {logo}/>
        <Box sx={{ display: 'flex', flexDirection: 'column' ,alignItems:"center",justifyContent: 'center',}}>

        
        <Typography variant="body2" color="text.secondary" >
        Congratulations, you displayed an Explorer personality type! They tend to have an open mindset.
         They are open-minded about new things, open to opportunities, but approach everything in life without judgement. 
         Their positivity helps to uncover new opportunities and possibilities in the future. 
        </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <CustomButton name={"Download Card!"} color={"white"} backgroundColor={"black"} borderRadius={"0px"} fullWidth={true}/>
        <CustomButton name={"Share on Social Media"} color={"white"} backgroundColor={"black"} borderRadius={"0px"} fullWidth={true}/>
      </CardActions>
    </Card>
    );
}
export default CustomCard2;
