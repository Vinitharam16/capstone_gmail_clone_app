import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Main(){
    const [openDrawer,setOpenDrawer] = useState(true);

    function toggleDrawer(){
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <div>
            <Header toggleDrawer={toggleDrawer}/>
            <Sidebar openDrawer={openDrawer}/>
            <div>
                Display mail
            </div>
        </div>
    );
}