import {React,useState,useEffect} from "react"
import {Card,CardHeader,CardContent,CardActions,CardMedia,Box,TextareaAutosize,Rating} from "@mui/material" 
import Typography from "@mui/material/Typography"
import CustomButton from "../Button/CustomButton"
  const CustomCard3 = (props) =>  {
   const [stars,setStars] = useState(0);
   useEffect(()=>{

   },[stars]);
   console.log(stars)
   return (
    <Card sx={{ maxWidth: "100%", boxShadow: 3 ,marginBottom:"2%"}} variant="outlined" raised={true}>
        
      <CardContent sx={{ maxWidth : "100%" }}>
      <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
        How was your test taking experience ?
      </Typography>  
      <Rating
        name="simple-controlled"
        value={stars}
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
      />
      <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
        Anything else you want to tell us
      </Typography>
      <TextareaAutosize aria-label="minimum height"  minRows={5} placeholder="Please write your feedback here..." style={{ width: "80%" }}
/>  
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <CustomButton name={"Share your feedback"}  borderRadius={"8px"} />
      </CardActions>
    </Card>
    );
}
export default CustomCard3;