
import {React,useState} from "react";
import { Dialog,DialogActions,DialogContent,DialogTitle } from "@mui/material";
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,FacebookIcon,TwitterIcon,LinkedinIcon,WhatsappIcon,WhatsappShareButton} from "react-share" 
import { Container } from "@mui/system";


  
  const SocialShareDialog =({ onClose, selectedValue, open }) => {
    
    const handleClose = () => {
        onClose(selectedValue);
      };
  
    return (
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle sx={{fontWeight:"bold"}}>
          {"Where do you want to share?"}
        </DialogTitle>
        <DialogActions sx= {{justifyContent:"center"}}>
           <FacebookShareButton url={"http://github.com"}  hashtag={"test"} title={"See My Website"}>
              <FacebookIcon size={32} round={true}/>
           </FacebookShareButton>
           <LinkedinShareButton title={"See My Website"} url={'http://github.com'}>
              <LinkedinIcon size={32} round={true}/>
           </LinkedinShareButton>
           <TwitterShareButton title={"See My Website"} url={"http://github.com"}>
            <TwitterIcon size={32} round={true}/>
           </TwitterShareButton>
           <WhatsappShareButton title={"See My Website"} url={"http://github.com"}>
            <WhatsappIcon size={32} round={true}/>
           </WhatsappShareButton>
        </DialogActions>
       
      </Dialog>
    );
  }

  export default SocialShareDialog;