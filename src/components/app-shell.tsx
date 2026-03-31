"use client";

import { Box } from "@mantine/core";
import {useEffect, useState, ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
const [collapsed,setCollapsed]= useState(false);
const [isMobile,setIsMobile]= useState(false);

useEffect(()=>{
  const checkScreen=()=>{
    setIsMobile(window.innerWidth < 768);
  };

  checkScreen();
  window.addEventListener("resize",checkScreen);

  return()=> window.removeEventListener("resize",checkScreen);
},[]);

  return (
    <Box style={{ display: "flex", height: "100vh" }}>
      {/* overlay for mobile */}
      {isMobile && opened && (
        <Box
        onClick={()=>setOpened(false)}
        style={{
          position:"fixed",
          inset:0,
          background:"rgba(0,0,0,0.5)",
        zIndex:999,
        }}
        />
      )}
      {/* Sidebar */}
      <Box
        style={{
          width: isMobile ? 220 :collapsed ? 50 :220,
          position: isMobile ? "fixed" : "relative",
          height: "100%",
          top:0,
          left:isMobile ? (opened ? 0 : -220) :0,
          transition: "width 200ms ease",
          overflow: "hidden",
          borderRight: "1px solid var(--mantine-color-gray-4)",
          zIndex: 1000,
          background: "var(--mantine-color-body)",
        }}
      >
        <Sidebar collapsed={!opened} closeSidebar={() => setOpened(false)} />
      </Box>

      {/* Main content */}
      <Box
       style={{
          flex: 1,
          marginLeft:isMobile ? 0 : 0,
          transition: "all 250ms ease",
          width: "100%",
          minHeight: "100vh",
        }}
      >
      
        <Header
          toggleSidebar={() => setOpened((o) => !o)}
          toggleCollapsed={() => setCollapsed((c) => !c)}
          isMobile={isMobile}
          opened={opened}
          collapsed={collapsed}
        />

        <Box p="md">{children}</Box>
      </Box>
    </Box>
  );
}
