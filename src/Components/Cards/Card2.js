import { React, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomButton from "../Button/CustomButton";
import exportAsImage from "../utils/export";
import SocialShareDialog from "../utils/SocialShareDialog";
// import image from "./147142.png"
import logo from "../../assets/avatar.png";
const CustomCard2 = (props) => {
  const [open, setOpen] = useState(false);
  const exportRef = useRef();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{ maxWidth: "100%", boxShadow: 3, marginBottom: "2%" }}
      variant="outlined"
      raised={true}
    >
      <div ref={exportRef}>
        <CardHeader
          sx={{ color: "white", backgroundColor: "black" }}
          title={`Congratulations ${props.name},you are a explorer`}
          titleTypographyProps={{ variant: "subtitle1" }}
        />
        <CardContent sx={{ display: "flex", maxWidth: "100%" }}>
          <CardMedia component="img" sx={{ width: 180 }} image={logo} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginLeft: "5%", color: "black" }}
            >
              Congratulations, you displayed an Explorer personality type! They
              tend to have an open mindset. They are open-minded about new
              things, open to opportunities, but approach everything in life
              without judgement. Their positivity helps to uncover new
              opportunities and possibilities in the future.
            </Typography>
          </Box>
        </CardContent>
      </div>
      <hr />
      <SocialShareDialog open={open} onClose={handleClose} />
      <CardActions>
        <CustomButton
          onClick={() => exportAsImage(exportRef.current, "Card")}
          name={"Download Card!"}
          color={"white"}
          backgroundColor={"black"}
          borderRadius={"0px"}
          fullWidth={true}
        />
        <CustomButton
          onClick={handleClickOpen}
          name={"Share on Social Media"}
          color={"white"}
          backgroundColor={"black"}
          borderRadius={"0px"}
          fullWidth={true}
        />
      </CardActions>
    </Card>
  );
};
export default CustomCard2;
