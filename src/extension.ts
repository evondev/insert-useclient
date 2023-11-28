import * as vscode from "vscode";
export function activate(context: vscode.ExtensionContext) {
  const pattern = /^['"]use client['"];?$/m;

  let command1 = vscode.commands.registerCommand(
    "insert-useclient.insertUseClient",
    async () => {
      // insert use client to the top of the current valid javascript file
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const text = document.getText();
        if (pattern.test(text)) {
          const range = new vscode.Range(
            new vscode.Position(0, 0),
            new vscode.Position(1, 0)
          );
          editor.edit((editBuilder) => {
            editBuilder.replace(range, "");
          });
          vscode.window.showInformationMessage(
            "Remove use client successfully!"
          );
          return;
        }
        const range = new vscode.Range(
          new vscode.Position(0, 0),
          new vscode.Position(0, 0)
        );
        editor.edit((editBuilder) => {
          editBuilder.replace(range, "'use client';\n");
        });
        vscode.window.showInformationMessage("Insert use client successfully!");
      }
    }
  );
  let command2 = vscode.commands.registerCommand(
    "insert-useclient.insertUseServer",
    async () => {
      // insert use client to the top of the current valid javascript file
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const text = document.getText();
        if (pattern.test(text)) {
          const range = new vscode.Range(
            new vscode.Position(0, 0),
            new vscode.Position(1, 0)
          );
          editor.edit((editBuilder) => {
            editBuilder.replace(range, "");
          });
          vscode.window.showInformationMessage(
            "Remove use server successfully!"
          );
          return;
        }
        const range = new vscode.Range(
          new vscode.Position(0, 0),
          new vscode.Position(0, 0)
        );
        editor.edit((editBuilder) => {
          editBuilder.replace(range, "'use server';\n");
        });
        vscode.window.showInformationMessage("Insert use server successfully!");
      }
    }
  );

  context.subscriptions.push(command1, command2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
