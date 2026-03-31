"use client";

import {
  Group,
  NavLink,
  Box,
  Stack,
  Divider,
  ActionIcon,
} from "@mantine/core";
import {
  X,
  BaggageClaim,
  ChartNoAxesCombined,
  Layers,
  LogOutIcon,
  NotepadText,
  Package,
  Receipt,
  Settings2,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  collapsed:boolean;
closeSidebar:()=> void;
}

function Sidebar ({ closeSidebar} : SidebarProps){

  return (
    <Stack align="stretch" justify="start" gap="md" h="100%">
      <Group justify="space-between" align="flex-start">
        <Group
          align="center"
          justify="space-between"
          p={8}
          gap="xs"
          style={{ flex: 1 }}
        >
          <Box>Logo</Box>
          <ActionIcon
            variant="subtle"
            color="gray"
            onClick={closeSidebar}
            hiddenFrom="sm"
          >
            <X size={18} />
          </ActionIcon>
        </Group>
      </Group>
      <Divider c="gray" />
      <Stack gap={2} p="xs">
        <NavLink
        component={Link}
        href={"/"}
        onClick={closeSidebar}
        label="Dashboard"
        leftSection={<Layers size={16}/>}
        ></NavLink>

        <NavLink
          component={Link}
          href="/inventory"
          onClick={closeSidebar}
          label="Inventory"
          leftSection={<ChartNoAxesCombined size={16} />}
        />

        <NavLink
          component={Link}
          href="/products"
          onClick={closeSidebar}
          label="Products"
          leftSection={<Package size={16} />}
        />

        <NavLink
          component={Link}
          href="/orders"
          onClick={closeSidebar}
          label="Orders"
          leftSection={<BaggageClaim size={16} />}
        />
        <NavLink
          component={Link}
          href="/expenses"
          onClick={closeSidebar}
          label="Expenses"
          leftSection={<Receipt size={16} />}
        />

        <NavLink
          component={Link}
          href="/reports"
          onClick={closeSidebar}
          label="Reports"
          leftSection={<NotepadText size={16} />}
        />
        <NavLink
          component={Link}
          href="/settings"
          onClick={closeSidebar}
          label="Settings"
          leftSection={<Settings2 size={16} />}
        />
        <NavLink
          component={Link}
          href="/logout"
          onClick={closeSidebar}
          label="Logout"
          leftSection={<LogOutIcon size={16} />}
        />
      </Stack>
    </Stack>
  );
}

export default Sidebar;
