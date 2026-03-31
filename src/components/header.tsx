"use client";

import {
  Group,
  ActionIcon,
  Indicator,
  Box,
  Avatar,
  UnstyledButton,
} from "@mantine/core";
import { PanelLeft, PanelLeftClose, Sun, Moon, Bell } from "lucide-react";
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";

interface HeaderProps {
  toggleSidebar: () => void;
  toggleCollapsed: () => void;
  isMobile: boolean;
  opened: boolean;
  collapsed: boolean;
}

function Header({
  toggleSidebar,
  toggleCollapsed,
  isMobile,
  collapsed,
}: HeaderProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const isDarkMode = computedColorScheme === "dark";

  const toggleColorScheme = () => {
    setColorScheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Group
      justify="space-between"
      align="center"
      h={60}
      p="xs"
      style={{borderBottom: "1px solid var(--mantine-color-gray-4)",
        background: "var(--mantine-color-body)",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* left site */}
      <Group gap="lg" p="xs" align="center">
        {/* mobile collapse button */}
        {isMobile ? (
        <ActionIcon
          variant="subtle"
          color="gray"
          size="lg"
          onClick={toggleSidebar}
        >
          <PanelLeft size={20} />
        </ActionIcon>
        ) : (
          // desktop collapse button
          <ActionIcon variant="subtle" color="gray" size="lg" onClick={toggleCollapsed}
          >
            <PanelLeftClose
            size={20}
            style={{transform: collapsed ? "rotate(180deg)" :"rotate(0deg)",
              transition:"transform 250ms ease",
            }}
            />
          </ActionIcon>
        )}
      </Group>

      {/* rightside */}
      <Group gap="lg"> 
        <Group gap="md">
          <UnstyledButton
            onClick={toggleColorScheme}
            style={{
              position: "relative",
              width: "35px",
              height: "20px",
              borderRadius: "20px",
              backgroundColor: "#1c1f24",
              border: "2px solid #808080",
              boxShadow: "0 0 2px rgba(0,0,0, 0.4)",
              display: "flex",
              alignItems: "center",
              justfyBetween: "center",
              cursor: "pointer",
              transition: " all 200ms ease",
            }}
          >
            <Box
              style={{
                transform: `translateX(${isDarkMode ? "15px" : "0"})`,
                transition: "transform 200ms ease",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0, 0.2)",
              }}
            >
              {isDarkMode ? (
                <Moon size={15} color="#c0c0c0" />
              ) : (
                <Sun size={15} color="#c0c0c0" />
              )}
            </Box>
          </UnstyledButton>
          <Indicator label="2" size={14} color="red" offset={2}>
            <ActionIcon variant="transparent" color="gray">
              <Bell size={24} />
            </ActionIcon>
          </Indicator>

          {/* divider Box */}
          <Box w={1} h={24} bg="gray" />

          {/*user profile  */}
          <Group gap="xs" style={{ cursor: "pointer" }}>
            <Avatar size="sm" radius="xl" src="null" alt="User" color="gray" />
          </Group>
        </Group>
      </Group>
    </Group>
  );
}
export default Header;
