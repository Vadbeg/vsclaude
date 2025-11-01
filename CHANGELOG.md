# Change Log

All notable changes to the "vsclaude" extension will be documented in this file.

## [0.0.2] - 2025-11-02

### Changed
- Excluded demo gif from extension package to reduce bundle size

## [0.0.1] - 2025-11-02

### Added
- Initial release
- Opens Claude terminal in a new editor split to the right using `ViewColumn.Beside`
- Terminal persistence: reuses the same terminal instance when command is triggered multiple times
- Automatically executes `claude` command when terminal opens
- Custom green asterisk icon for the editor title bar button
- Terminal reference tracking with cleanup on close events