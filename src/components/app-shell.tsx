"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "./sidebar";
import React, { useEffect, useState } from "react";
import Header from "./header";

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [mounted, setMounted] = React.useState(false);
  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    toggleMobile();
    toggleDesktop();
  };

  if (!mounted) return null;

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: { base: 220, sm: 250 },
        breakpoint: "sm",
        collapsed: {
          mobile: !mobileOpened,
          desktop: !desktopOpened,
        },
      }}
      layout="alt"
    >
      <AppShell.Header>
        <Header toggleSidebar={handleToggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar closeSidebar={handleToggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default AppLayout;
