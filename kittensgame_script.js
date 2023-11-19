// clear up existing intervals
if (typeof intervals !== 'undefined') {
	for (const interval of intervals) {
		clearInterval(interval);
	}
}
var intervals = []

var simpleAutocraftFunc = (source, result) => {
	return () => {
		var resource = game.resPool.get(source);
		if (resource.value >= resource.maxValue * 0.999) {
			game.workshop.craftAll(result);
		};
	}
}

var gistysFuncs = [
	// Autoobserve sky
	() => {
		if(game.calendar.observeBtn) {
			game.calendar.observeHandler();
		};
	},
	// Autoobserve sky only for science
	// () => {
	// 	var resource = game.resPool.get("science");
	// 	if(game.calendar.observeBtn && resource.value < resource.maxValue) {
	// 	    game.calendar.observeHandler();
	// 	};
	// },
	// Autocraft wood
	() => {
		var resource = game.resPool.get("catnip");
		var resource_wood = game.resPool.get("wood");
		if ((resource.value >= resource.maxValue * 0.8) && (resource_wood.value <resource_wood.maxValue)) {
			game.workshop.craftAll("wood");
		};
	},
	// Autofaith
	() => {
		var resource = game.resPool.get("faith");
			// if (resource.value > 500) {
			if (resource.value > resource.maxValue * 0.99) {
				game.tabs[5].praiseBtn.model.handler()
			};
	},
	// Autocraft blueprints
	() => {
		var resource = game.resPool.get("science");
		var resource_compedium = game.resPool.get("compedium");
		if ( resource.value >= resource.maxValue * 0.99 && resource_compedium.value > 2000) {
			game.workshop.craftAll("blueprint");
		};
	},
	// Autocraft compendia
	() => {
		var resource = game.resPool.get("science");
		var resource_manuscript = game.resPool.get("manuscript");
		if ( resource.value >= resource.maxValue * 0.99 && resource_manuscript.value > 2000) {
			game.workshop.craftAll("compedium");
		};
	},
	// Autocraft manuscript
	() => {
		var resource = game.resPool.get("culture");
		var resource_parchment = game.resPool.get("parchment");
		if (resource.value > resource.maxValue * 0.9 && resource_parchment.value > 20000) {
			game.workshop.craftAll("manuscript");
		};
	},
	// Autocraft steel
	() => {
		var resource_coal = game.resPool.get("coal");
		var resource_iron = game.resPool.get("iron");
		if (resource_coal.value >= resource_coal.maxValue * 0.8 && resource_iron.value >= resource_coal.value * 0.8 ) {
			game.workshop.craftAll("steel");
		};
	},
	// Autohunt
	() => {
		var resource = game.resPool.get("manpower");
		if(resource.value >= resource.maxValue * 0.9) {
			gamePage.village.huntAll();
		};
	},
	// Autotrade TBD
	// () => {
	// 	if (game.resPool.get("gold").value > 50) {
	// 		switch (game.calendar.season) {
	// 			case 0:
	// 				var resourceMinerals = game.resPool.get("minerals");
	// 				if (resourceMinerals.value < resourceMinerals.maxValue * 0.95) {
	// 					game.tabs[4].racePanels[3].tradeBtn.model.handler();
	// 				} else if (game.calendar.day < 80) {
	// 					game.workshop.craftAll("slab");
	// 				}
	// 				break; //покупка камня весной
	// 			case 1:
	// 				var resourceSlab = game.resPool.get("slab");
	// 				var resourceIron = game.resPool.get("iron");
	// 				if (resourceSlab.value > 1500 && resourceIron.value < resourceIron.maxValue * 0.8) {
	//         			game.tabs[4].racePanels[4].tradeBtn.model.handler();
	//         		} else if (game.calendar.day < 80) {
	// 					game.workshop.craftAll("plate");
	// 				}
	// 				break;
	// 			case 2:
	// 				var resourceIron = game.resPool.get("iron");
	// 				if (resourceIron.value < resourceIron.maxValue * 0.8) {
	// 					game.tabs[4].racePanels[2].tradeBtn.model.handler();
	// 				} else if (game.calendar.day < 90) {
	// 					game.workshop.craftAll("plate");
	// 				} // покупка железа
	// 				break;
	// 			case 3:
	// 				var resourceCatnip = game.resPool.get("catnip");
	// 				var resourceWood = game.resPool.get("wood");
	// 				// if (resourceCatnip.value < resourceCatnip.maxValue * 0.8 && resourceWood.value < resourceWood.maxValue * 0.95) {
	// 				if (resourceWood.value < resourceWood.maxValue * 0.8) {
	// 					game.tabs[4].racePanels[1].tradeBtn.model.handler();
	// 					if (game.calendar.day < 80) {
	// 						game.workshop.craftAll("wood");
	// 					}
	// 				} else if (game.calendar.day < 80) {
	// 					game.workshop.craftAll("beam");
	// 				}
	// 				break; //покупка мяты
	// 			default:
	//         break;
	// 		};
	// 	};
	// },
	// Autocrtaft beam
	simpleAutocraftFunc("wood", "beam"),
	// Autopcraft slab
	simpleAutocraftFunc("minerals", "slab"),
	//Autocraft plate
	simpleAutocraftFunc("iron", "plate"),
	// Autocraft Kerosene
	simpleAutocraftFunc("oil", "kerosene"),
	// Autocraft Thorium
	simpleAutocraftFunc("uranium", "thorium"),
	// Autocraft Eludium
	simpleAutocraftFunc("unobtainium", "eludium"),
]

for (const gistysFunc of gistysFuncs) {
	intervals.push(setInterval(gistysFunc, 2000))
}

var gistysGatherCatnip1 = () => {
	resource = game.resPool.get("catnip");
	if (resource.value <= resource.maxValue * 0.95) {
		game.bld.gatherCatnip();
	}
}

intervals.push(setInterval(gistysGatherCatnip1, 1))
