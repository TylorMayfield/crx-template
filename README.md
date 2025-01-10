# Chrome Extension Template with Mantine UI

A minimal Chrome extension template built with React and Mantine UI. This template provides a clean starting point for building Chrome extensions with a modern UI framework.

## Features

- **React 18**: Built with the latest version of React
- **Mantine UI**: Beautiful and customizable UI components
- **Modern Build System**: Uses Vite for fast development and builds
- **TypeScript Support**: Includes TypeScript configurations
- **Notification System**: Demonstrates Mantine's notification system
- **Tabler Icons**: Integrated with Mantine UI

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Load the extension:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` directory

## Project Structure

```
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── App.css          # Global styles
├── src/components/     # Component directory
└── index.html           # HTML template
├── manifest.json        # Extension manifest
├── vite.config.js       # Vite configuration
└── manifest.json        # Extension manifest
└── icon.png             # Extension icon
└── PRIVACY.md           # Privacy policy
└── README.md            # Project README
└── package.json         # Project configuration
└── package-lock.json    # Project lock file


```

## Links

- [GitHub Repository](https://github.com/TylorMayfield/crx-template)
- [Chrome Web Store](https://chromewebstore.google.com/detail/chrome-extension-template/mechhnlbchididihbgadhfokjnbhfbed)

## Customization

The template uses Mantine UI's theme system. You can customize the theme in `App.jsx`:

```javascript
<MantineProvider
  theme={{
    colorScheme: preferredColorScheme,
    // Add your theme customizations here
  }}
>
```

## Links

- [GitHub Repository](https://github.com/TylorMayfield/crx-template)
- [Chrome Web Store](https://chromewebstore.google.com/detail/chrome-extension-template/mechhnlbchididihbgadhfokjnbhfbed)
