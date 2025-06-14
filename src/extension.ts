import * as vscode from 'vscode';

let autosaveInterval: NodeJS.Timeout | undefined;

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('autosaveExtension');
  let intervalMs = config.get<number>('interval', 2000); // default: 2 seconds

  startAutoSave(intervalMs);

  // Command to manually trigger autosave
  let disposable = vscode.commands.registerCommand('autosaveExtension.manualSave', () => {
    saveAllDirtyFiles();
    vscode.window.showInformationMessage('Manual autosave triggered!');
  });

  context.subscriptions.push(disposable);

  // Listen for config changes
  vscode.workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration('autosaveExtension.interval')) {
      intervalMs = config.get<number>('interval', 2000);
      restartAutoSave(intervalMs);
    }
  });
}

function startAutoSave(intervalMs: number) {
  if (autosaveInterval) {
    clearInterval(autosaveInterval);
  }
  autosaveInterval = setInterval(() => {
    saveAllDirtyFiles();
  }, intervalMs);
}

function restartAutoSave(intervalMs: number) {
  clearInterval(autosaveInterval);
  startAutoSave(intervalMs);
}

function saveAllDirtyFiles() {
  vscode.workspace.saveAll(false);
}

export function deactivate() {
  if (autosaveInterval) {
    clearInterval(autosaveInterval);
  }
}

