# 💾 AutoSave – VS Code Extension


[![Downloads](https://img.shields.io/visual-studio-marketplace/d/wifgroup.autosave?color=2A7C76&label=downloads&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=wifgroup.autosave)
[![Version](https://img.shields.io/visual-studio-marketplace/v/wifgroup.autosave?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=wifgroup.autosave)

Automatically saves all dirty (unsaved) files in your workspace at regular intervals.  
Perfect for developers who want to avoid losing progress or prefer not to manually hit `Ctrl+S`.

---

## ✨ Features

- ✅ Automatically saves all unsaved files every X milliseconds (default: 2000ms)
- ⚙️ Configurable autosave interval through settings
- 🖱️ Manual command to trigger autosave at any time
- 🚀 Lightweight and runs automatically on startup

---

## ⚙️ Configuration

You can change the autosave interval from **VS Code Settings**:

> File → Preferences → Settings → Search for `autosaveExtension.interval`

Or directly in `settings.json`:

```json
"autosaveExtension.interval": 3000
````

| Setting Name                 | Type   | Default | Description                                      |
| ---------------------------- | ------ | ------- | ------------------------------------------------ |
| `autosaveExtension.interval` | number | `2000`  | Interval in milliseconds to autosave dirty files |

---

## 🧩 Commands

Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and type:

* **`AutoSave: Trigger Save Now`**
  Forces an immediate save of all open and modified files.

---

## 📦 Installation

1. Open VS Code
2. Go to the Extensions panel (sidebar) → Search for **AutoSave**
3. Click **Install**

Or install from VSIX (if testing locally):

```bash
code --install-extension autosave-1.0.0.vsix
```

---

## 🙌 Contributing

Have ideas or improvements?
Pull requests and feedback are welcome once the extension is on GitHub!

---

## 📃 License

MIT © 2025
