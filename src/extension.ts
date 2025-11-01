// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Track the Claude terminal instance to reuse it
let claudeTerminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {
	console.log('vsclaude extension is now active!');

	// Listen for terminal close events to update our reference
	context.subscriptions.push(
		vscode.window.onDidCloseTerminal((terminal) => {
			if (terminal === claudeTerminal) {
				claudeTerminal = undefined;
			}
		})
	);

	const disposable = vscode.commands.registerCommand('vsclaude.openClaudeTerminal', () => {
		// Reuse existing terminal if it exists
		if (claudeTerminal) {
			claudeTerminal.show();
			return;
		}

		// Create a new terminal in a split to the right
		claudeTerminal = vscode.window.createTerminal({
			name: 'Claude',
			location: {
				viewColumn: vscode.ViewColumn.Beside,
				preserveFocus: true
			}
		});

		// Show the terminal
		claudeTerminal.show();

		// Send the claude command
		claudeTerminal.sendText('claude');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
