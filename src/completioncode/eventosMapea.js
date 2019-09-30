exports.eventosMapea = function(vscode, context){

    const events = vscode.languages.registerCompletionItemProvider(
		'javascript',
		{
			provideCompletionItems(document, position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('M.evt.')) {
					return undefined;
				}

				let added_layer = new vscode.CompletionItem('ADDED_LAYER', vscode.CompletionItemKind.Method);
				added_layer.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa";

				let added_wfs = new vscode.CompletionItem('ADDED_WFS', vscode.CompletionItemKind.Method);
				added_wfs.detail = "Evento asociado al mapa y a las capas: Se ha añadido uan capa WFS";

				let added_wmc = new vscode.CompletionItem('ADDED_WMC', vscode.CompletionItemKind.Method);
				added_wmc.detail = "Evento asociado al mapa y a las capas: Se ha añadido un WMC";

				let added_wmt = new vscode.CompletionItem('ADDED_WMT', vscode.CompletionItemKind.Method);
				added_wmt.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa WMTS";

				let added_kml = new vscode.CompletionItem('ADDED_KML', vscode.CompletionItemKind.Method);
				added_kml.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa KML";

				let load = new vscode.CompletionItem('LOAD', vscode.CompletionItemKind.Method);
				load.detail = "Evento asociado al mapa y a las capas sobre capa vectorial: Se han cargado los features de la capa.\n Evento asociado al mapa y a las capas sobre WMC: Se ha activado el WMC";

				let added_wms = new vscode.CompletionItem('ADDED_WMS', vscode.CompletionItemKind.Method);
				added_wms.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa WMS";

				let completed = new vscode.CompletionItem('COMPLETED', vscode.CompletionItemKind.Method);
				completed.detail = "Evento asociado al mapa y a las capas: Se ha completado la definición interna del mapa. Requiere capa base";

				let change = new vscode.CompletionItem('CHANGE', vscode.CompletionItemKind.Method);
				change.detail = "Evento asociado al mapa y a las capas: Ha cambiado la proyección del mapa";

				let change_wmc = new vscode.CompletionItem('CHANGE_WMC', vscode.CompletionItemKind.Method);
				change_wmc.detail = "Evento asociado al mapa y a las capas: Ha cambiado el wmc activo";

				let click = new vscode.CompletionItem('CLICK', vscode.CompletionItemKind.Method);
				click.detail = "Evento asociado al mapa y a las capas: Se ha hecho click en el mapa (captura coordenadas)";

				let change_style = new vscode.CompletionItem('CHANGE_STYLE', vscode.CompletionItemKind.Method);
				change_style.detail = "Evento asociado al mapa y a las capas sobre capa vectorial: Ha cambiado el estilo de la capa. \nEvento sobre feature: Ha cambiado el estilo del feature"

				let added_to_map = new vscode.CompletionItem('ADDED_TO_MAP', vscode.CompletionItemKind.Method);
				added_to_map.detail = "Evento asociado a un panel: El panel se ha añadido al mapa";

				let show = new vscode.CompletionItem('SHOW', vscode.CompletionItemKind.Method);
				show.detail = "Evento asociado a un panel: El panel se ha abierto";

				let hide = new vscode.CompletionItem('HIDE', vscode.CompletionItemKind.Method);
				hide.detail = "Evento asociado a un panel: El panel se ha ocultado";

				let added_to_panel = new vscode.CompletionItem('ADDED_TO_PANEL', vscode.CompletionItemKind.Method);
				added_to_panel.detail = "Evento asociado a un control: El control se ha añadido al panel";

				let activated = new vscode.CompletionItem('ACTIVATED', vscode.CompletionItemKind.Method);
				activated.detail = "Evento asociado a un control: El control se ha activado";

				let deactivated = new vscode.CompletionItem('DEACTIVATED', vscode.CompletionItemKind.Method);
				deactivated.detail = "Evento asociado a un control: El control se ha desactivado";

				let select_feature = new vscode.CompletionItem('SELECT_FEATURES', vscode.CompletionItemKind.Method);
				select_feature.detail = "Evento asociado a una feature: Se ha seleccionado una feature";

				let unselect_feature = new vscode.CompletionItem('UNSELECT_FEATURES', vscode.CompletionItemKind.Method);
				unselect_feature.detail = "Evento asociado a una feature: Ha perdido la selección";

				let hover_feature = new vscode.CompletionItem('HOVER_FEATURES', vscode.CompletionItemKind.Method);
				hover_feature.detail = "Evento asociado a una feature: El cursor pasa por encima";

				let leave_feature = new vscode.CompletionItem('LEAVE_FEATURES', vscode.CompletionItemKind.Method);
				leave_feature.detail = "El cursor abandona una feature";

				return [
					added_layer, added_wfs, added_wmc, added_wmt, added_kml, load, added_wms, completed, change_style, 
					change_wmc, click, change_style, added_to_map, show, hide, added_to_panel, activated, deactivated, 
					select_feature, unselect_feature, hover_feature, leave_feature
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	const eventshtml = vscode.languages.registerCompletionItemProvider(
		'html',
		{
			provideCompletionItems(document, position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('M.evt.')) {
					return undefined;
				}

				let added_layer = new vscode.CompletionItem('ADDED_LAYER', vscode.CompletionItemKind.Method);
				added_layer.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa";

				let added_wfs = new vscode.CompletionItem('ADDED_WFS', vscode.CompletionItemKind.Method);
				added_wfs.detail = "Evento asociado al mapa y a las capas: Se ha añadido uan capa WFS";

				let added_wmc = new vscode.CompletionItem('ADDED_WMC', vscode.CompletionItemKind.Method);
				added_wmc.detail = "Evento asociado al mapa y a las capas: Se ha añadido un WMC";

				let added_wmt = new vscode.CompletionItem('ADDED_WMT', vscode.CompletionItemKind.Method);
				added_wmt.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa WMTS";

				let added_kml = new vscode.CompletionItem('ADDED_KML', vscode.CompletionItemKind.Method);
				added_kml.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa KML";

				let load = new vscode.CompletionItem('LOAD', vscode.CompletionItemKind.Method);
				load.detail = "Evento asociado al mapa y a las capas sobre capa vectorial: Se han cargado los features de la capa.\n Evento asociado al mapa y a las capas sobre WMC: Se ha activado el WMC";

				let added_wms = new vscode.CompletionItem('ADDED_WMS', vscode.CompletionItemKind.Method);
				added_wms.detail = "Evento asociado al mapa y a las capas: Se ha añadido una capa WMS";

				let completed = new vscode.CompletionItem('COMPLETED', vscode.CompletionItemKind.Method);
				completed.detail = "Evento asociado al mapa y a las capas: Se ha completado la definición interna del mapa. Requiere capa base";

				let change = new vscode.CompletionItem('CHANGE', vscode.CompletionItemKind.Method);
				change.detail = "Evento asociado al mapa y a las capas: Ha cambiado la proyección del mapa";

				let change_wmc = new vscode.CompletionItem('CHANGE_WMC', vscode.CompletionItemKind.Method);
				change_wmc.detail = "Evento asociado al mapa y a las capas: Ha cambiado el wmc activo";

				let click = new vscode.CompletionItem('CLICK', vscode.CompletionItemKind.Method);
				click.detail = "Evento asociado al mapa y a las capas: Se ha hecho click en el mapa (captura coordenadas)";

				let change_style = new vscode.CompletionItem('CHANGE_STYLE', vscode.CompletionItemKind.Method);
				change_style.detail = "Evento asociado al mapa y a las capas sobre capa vectorial: Ha cambiado el estilo de la capa. \nEvento sobre feature: Ha cambiado el estilo del feature"

				let added_to_map = new vscode.CompletionItem('ADDED_TO_MAP', vscode.CompletionItemKind.Method);
				added_to_map.detail = "Evento asociado a un panel: El panel se ha añadido al mapa";

				let show = new vscode.CompletionItem('SHOW', vscode.CompletionItemKind.Method);
				show.detail = "Evento asociado a un panel: El panel se ha abierto";

				let hide = new vscode.CompletionItem('HIDE', vscode.CompletionItemKind.Method);
				hide.detail = "Evento asociado a un panel: El panel se ha ocultado";

				let added_to_panel = new vscode.CompletionItem('ADDED_TO_PANEL', vscode.CompletionItemKind.Method);
				added_to_panel.detail = "Evento asociado a un control: El control se ha añadido al panel";

				let activated = new vscode.CompletionItem('ACTIVATED', vscode.CompletionItemKind.Method);
				activated.detail = "Evento asociado a un control: El control se ha activado";

				let deactivated = new vscode.CompletionItem('DEACTIVATED', vscode.CompletionItemKind.Method);
				deactivated.detail = "Evento asociado a un control: El control se ha desactivado";

				let select_feature = new vscode.CompletionItem('SELECT_FEATURES', vscode.CompletionItemKind.Method);
				select_feature.detail = "Evento asociado a una feature: Se ha seleccionado una feature";

				let unselect_feature = new vscode.CompletionItem('UNSELECT_FEATURES', vscode.CompletionItemKind.Method);
				unselect_feature.detail = "Evento asociado a una feature: Ha perdido la selección";

				let hover_feature = new vscode.CompletionItem('HOVER_FEATURES', vscode.CompletionItemKind.Method);
				hover_feature.detail = "Evento asociado a una feature: El cursor pasa por encima";

				let leave_feature = new vscode.CompletionItem('LEAVE_FEATURES', vscode.CompletionItemKind.Method);
				leave_feature.detail = "El cursor abandona una feature";

				return [
					added_layer, added_wfs, added_wmc, added_wmt, added_kml, load, added_wms, completed, change_style, 
					change_wmc, click, change_style, added_to_map, show, hide, added_to_panel, activated, deactivated, 
					select_feature, unselect_feature, hover_feature, leave_feature
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);

	context.subscriptions.push(events);
	context.subscriptions.push(eventshtml);


}