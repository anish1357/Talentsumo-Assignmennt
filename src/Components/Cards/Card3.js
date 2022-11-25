import {React,useState,useEffect} from "react"
import {Card,CardHeader,CardContent,CardActions,CardMedia,Box,TextareaAutosize,Rating} from "@mui/material" 
import Typography from "@mui/material/Typography"
import CustomButton from "../Button/CustomButton"
  const CustomCard3 = (props) =>  {
   const [stars,setStars] = useState(0);
   const [text,setText]=useState("");
   useEffect(()=>{

   },[stars]);
   console.log(stars + text)
   return (
    <Card sx={{ maxWidth: "100%", boxShadow: 3 ,marginBottom:"1%"}} variant="outlined" raised={true}>
        
      <CardContent sx={{ maxWidth : "100%" }}>
      <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
        How was your test taking experience ?
      </Typography>  
      <Rating
        name="simple-controlled"
        size={"large"}
        value={stars}
         sx={{"&.MuiRating-iconEmpty":{
             backgroundColor:"rgba(90,90,90,0.8)"
         }}}
        onChange={(event, newValue) => {
          setStars(newValue);
        }}
      />
      <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
        Anything else you want to tell us ?
      </Typography>
      <TextareaAutosize value={text}  onChange={(e) => {setText(e.target.value)}} aria-label="minimum height" minRows={5} placeholder="Please write your feedback here..." 
        style={{ width: "80%",borderColor: "rgba(90, 90, 90,0.3)",fontFamily:"Roboto",fontSize:"1rem"}}/>  
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <CustomButton name={"Share your feedback"} onClick ={()=>{alert(`Implement HandleSubmit ! Rating :${stars} Feedback :${text}`)}} borderRadius={"8px"}  />
      </CardActions>
    </Card>
    );
}
export default CustomCard3;
