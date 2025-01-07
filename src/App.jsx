import {
  MantineProvider,
  AppShell,
  Text,
  Button,
  Group,
  Stack,
  Card,
  Box,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { notifications } from "@mantine/notifications";
import { IconSun, IconMoon } from '@tabler/icons-react';
import "./App.css";

function App() {
  const preferredColorScheme = useColorScheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    defaultValue: preferredColorScheme,
  });
  const dark = colorScheme === 'dark';

  const showNotification = () => {
    notifications.show({
      title: "Hello!",
      message: "This is a Mantine notification",
      color: "blue",
    });
  };

  return (
    <MantineProvider
      theme={{
        colorScheme,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Box
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
        }}
      >
        <Notifications position="top-center" />
        <AppShell padding="md" style={{ minHeight: "100vh" }}>
          <Stack spacing="lg">
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Group position="apart" mb="md">
                <Text size="xl" weight={500}>
                  Chrome Extension Template
                </Text>
                <ActionIcon
                  variant="outline"
                  color={dark ? 'yellow' : 'blue'}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
                </ActionIcon>
              </Group>
              <Text color="dimmed" size="sm" align="center" mb="xl">
                Built with Mantine UI
              </Text>
              <Group position="center" spacing="sm">
                <Button variant="filled" onClick={showNotification}>
                  Show Notification
                </Button>
                <Button variant="light">Another Button</Button>
              </Group>
            </Card>
          </Stack>
        </AppShell>
      </Box>
    </MantineProvider>
  );
}

export default App;
