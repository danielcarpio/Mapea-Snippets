// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	//Completitud de código de los eventos de Mapea
	require('./completionCode/eventosMapea').eventosMapea(vscode, context);
}

exports.activate = activate;

module.exports = {
	activate
}
