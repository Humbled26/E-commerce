"use client";

import {
  Group,
  Image,
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
  ChevronRight,
  Layers,
  LogOutIcon,
  NotepadText,
  Package,
  Receipt,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Sidebar({ closeSidebar }: { closeSidebar: () => void }) {
  const [dashboardOpen, setDashboardOpen] = useState(false);

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
          label="Dashboard"
          leftSection={<Layers size={16} />}
          rightSection={
            <ChevronRight
              size={14}
              strokeWidth={2}
              style={{
                transition: `transform 200ms ease`,
                transform: dashboardOpen ? `rotate(90deg)` : `none`,
              }}
            />
          }
        >
          <NavLink
            component={Link}
            href="/"
            label="Overview"
            onClick={() => console.log("Navigate to Overview")}
            leftSection={
              <Box
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: `50%`,
                  backgroundColor: `var(--mantine-primary-color-filled)`,
                }}
              />
            }
          />
        </NavLink>

        <NavLink
          component={Link}
          href="/inventory"
          label="Inventory"
          leftSection={<ChartNoAxesCombined size={16} />}
        />

        <NavLink
          component={Link}
          href="/products"
          label="Products"
          leftSection={<Package size={16} />}
        />

        <NavLink
          component={Link}
          href="/orders"
          label="Orders"
          leftSection={<BaggageClaim size={16} />}
        />
        <NavLink
          component={Link}
          href="/expenses"
          label="Expenses"
          leftSection={<Receipt size={16} />}
        />

        <NavLink
          component={Link}
          href="/reports"
          label="Reports"
          leftSection={<NotepadText size={16} />}
        />
        <NavLink
          component={Link}
          href="/settings"
          label="Settings"
          leftSection={<Settings2 size={16} />}
        />
        <NavLink
          component={Link}
          href="/logout"
          label="Logout"
          leftSection={<LogOutIcon size={16} />}
        />
      </Stack>
    </Stack>
  );
}

export default Sidebar;
