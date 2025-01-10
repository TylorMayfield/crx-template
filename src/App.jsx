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
import {
  IconSun,
  IconMoon,
  IconBrandGithub,
  IconBrandChrome,
} from "@tabler/icons-react";
import "./App.css";

function App() {
  const preferredColorScheme = useColorScheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    defaultValue: preferredColorScheme,
  });
  const dark = colorScheme === "dark";

  const showNotification = () => {
    notifications.show({
      title: "Hello!",
      message: "This is a Mantine notification",
      color: "blue",
    });
  };

  function Footer() {
    return (
      <footer
        style={{
          marginTop: "auto",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Group align="center" justify="center" spacing="sm">
          <Text
            size="sm"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <a
              href="https://github.com/TylorMayfield/crx-template"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }}
            >
              <IconBrandGithub />
            </a>
            <a
              href="https://chromewebstore.google.com/detail/chrome-extension-template/mechhnlbchididihbgadhfokjnbhfbed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandChrome />
            </a>
          </Text>
        </Group>
      </footer>
    );
  }

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
                  color={dark ? "yellow" : "blue"}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
                </ActionIcon>
              </Group>
              <Text color="dimmed" size="sm" align="center" mb="xl">
                Built with Mantine UI
              </Text>
              <Group align="center" justify="center" spacing="sm">
                <Button variant="light" onClick={showNotification}>
                  Show Notification
                </Button>
              </Group>
              <Footer />
            </Card>
          </Stack>
        </AppShell>
      </Box>
    </MantineProvider>
  );
}

export default App;
