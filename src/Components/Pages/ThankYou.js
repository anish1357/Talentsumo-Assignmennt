import React from "react"
import {Container,Box} from "@mui/material" 
import Typography from "@mui/material/Typography"
import CustomCard2 from '../Cards/Card2.js';
import CustomCard1 from "../Cards/Card1.js";
const ThankYou = () => {
   
   
   return (
     <Container maxWidth="md">
        <CustomCard1/>
        <CustomCard2 name="Bhavya"/>
     </Container>
);
}
export default ThankYou;