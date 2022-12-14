import React from "react";
import { Container } from "@mui/material";
import CustomCard2 from "../Cards/Card2.js";
import CustomCard1 from "../Cards/Card1.js";
import CustomCard3 from "../Cards/Card3.js";
import Footer from "../Footer.js";
const ThankYou = () => {
  return (
    <Container maxWidth="md">
      <CustomCard1 />
      <CustomCard2 name="Bhavya" />
      <CustomCard3 />
      <Footer />
    </Container>
  );
};
export default ThankYou;
