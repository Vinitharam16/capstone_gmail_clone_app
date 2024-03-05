import { Box, Button, styled, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { CreateOutlined, Photo } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
    background: "#c2e7ff",
    color: "#001d35",
    borderRadius:"16px",
    padding: 15,
    minWidth: 140,
})
const Container = styled(Box)({
    padding:10,
    '& >ul':{
        padding:'10px 0 0 5px',
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer' 
    },
    '& > ul > li > svg' : {
        marginRight: 20,
    }
})

export default function SideBarContent(){
    const [openDialog, setOpenDialog] = useState(false);

    function onComposeClick(){
        setOpenDialog(true);
    }

    return (
        <Container>
            <ComposeButton onClick={()=> onComposeClick()}>
                <CreateOutlined />COMPOSE
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <ListItem>
                            <data.icon fontSize="small"/> {data.title}
                        </ListItem>
                    ))
                }
            </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Container>
    );
}