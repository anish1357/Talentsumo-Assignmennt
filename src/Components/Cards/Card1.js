import {React,useState,useEffect} from "react"
import {Card,CardHeader,CardContent,CardActions,CardMedia,Box} from "@mui/material" 
import Typography from "@mui/material/Typography"
import CustomButton from "../Button/CustomButton"
import logo from './handsphoto.jpg';
  const CustomCard1 = (props) =>  {
    const [disable, setDisable] = useState(true);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
   
    useEffect(()=>{
     var timer;
      timer =setTimeout(()=> {
        setSeconds(seconds -1);
        if(seconds === 0 && minutes ===0 )
        { setDisable(false);
          
        }
        if(seconds === 0){
            setMinutes(minutes - 1)
            setSeconds(59)
        }
        
      },1000);
      if(!disable){
        setMinutes(0)
        setSeconds(0)
        clearInterval(timer);
      }
     

    },[seconds,minutes,disable]);
   return (
    <Card sx={{ maxWidth: "90%"}} variant="outlined" raised={true}>
        
        <CardContent sx={{ maxWidth : "100%" }}>
            <CardMedia  component="img" image={logo}/>
            <Typography variant="subtitle1" sx={{fontWeight:"bold"}}>
            Great, your interaction is now complete! 
            </Typography>
            <Typography variant="subtitle2">
                 This will now be analyzed by our Al models (and coaches/HR managers, if applicable). 
                 You or your administrator will receive a detailed feedback on the same within next 72 hours.
              </Typography>   
              <br/> 
              <Typography variant="subtitle2">
                 Every human interaction is an opportunity to learn. Its also an opportunity to demonstrate your
                 skills and expertise in a specific context and capacity. We view every professional interactions
                 as a high-stakes game- whether you are likely to save money, generate revenue, make a process 
                 more efficient or improve your performance. These virtual interactions act as practice sessions
                  where you can test drive real-world interactions. Experts in the world may differ on what skills 
                  matter - but they all have a common point of view. Practice is the key to improvement - and 
                  specific feedback makes improvement faster. 
            </Typography>
            <Typography variant="subtitle2">Available in {minutes < 10 ?  "0" +minutes : minutes} : {seconds< 10 ?  "0" +seconds : seconds} seconds</Typography> 
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <CustomButton name={"Veiw Your Response & Answers"}  borderRadius={"8px"} disabled={disable}/>
      </CardActions>
    </Card>
    );
}
export default CustomCard1;
