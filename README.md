# vsclaude

A VS Code extension that opens Claude CLI in a persistent terminal split on the right side of your editor.

## Features

- **Quick Access**: Click the button in the editor title bar to instantly open Claude terminal
- **Right Split View**: Terminal opens in a new editor column to the right, keeping your code visible
- **Persistent Terminal**: Reuses the same terminal instance, staying visible across file navigation
- **Auto-Run**: Automatically executes the `claude` command when opening the terminal

## Requirements

- [Claude CLI](https://claude.com/claude-code) must be installed and available in your PATH
- The `claude` command should be executable from your terminal

## Usage

1. Click the green asterisk icon in the editor title bar (when a file is open)
2. Or use the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) and search for "Open Claude Terminal"

The terminal will open in a split view to the right and automatically run the `claude` command.

## Extension Settings

This extension does not add any VS Code settings.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for release notes.
