//сброс таймеров
if (typeof gistysGatherCatnip1 !== 'undefined') {
  clearInterval(gistysGatherCatnip1)
}
if (typeof gistysHuntTimerId !== 'undefined') {
  clearInterval(gistysHuntTimerId)
}
if (typeof gistysSciTimerId !== 'undefined') {
  clearInterval(gistysSciTimerId)
}
if (typeof gistysCraftWoodTimerId !== 'undefined') {
  clearInterval(gistysCraftWoodTimerId)
}
if (typeof gistysCraftSteelTimerId !== 'undefined') {
  clearInterval(gistysCraftSteelTimerId)
}
if (typeof gistysCraftManuscriptTimerId !== 'undefined') {
  clearInterval(gistysCraftManuscriptTimerId)
}
if (typeof gistysCraftCompendiumTimerId !== 'undefined') {
  clearInterval(gistysCraftCompendiumTimerId)
}
if (typeof gistysCraftBeamTimerId !== 'undefined') {
  clearInterval(gistysCraftBeamTimerId)
}
if (typeof gistysCraftSlabTimerId !== 'undefined') {
  clearInterval(gistysCraftSlabTimerId)
}
if (typeof gistysCraftPlateTimerId !== 'undefined') {
  clearInterval(gistysCraftPlateTimerId)
}
if (typeof gistysTradeTimerId !== 'undefined') {
  clearInterval(gistysTradeTimerId)
}
if (typeof gistysFaithTimerId !== 'undefined') {
  clearInterval(gistysFaithTimerId)
}
if (typeof gistysCraftBlueprintTimerId !== 'undefined') {
  clearInterval(gistysCraftBlueprintTimerId)
}


// сбор мяты
var gistysGatherCatnip1 = setInterval( function gistysGatherCatnipFunc() { resource = game.resPool.get("catnip"); if (resource.value <= resource.maxValue * 0.95) game.bld.gatherCatnip();}, 1)

//var gistysHuntTimerId = setInterval( function gistysHuntFunc() {var resource = game.resPool.get("manpower"); if(resource.value >= 200) {gamePage.village.huntAll();};})


// все астрономические явления
var gistysSciTimerId = setInterval( function gistysSciFunc() {
	var resource = game.resPool.get("science"); 
	if(game.calendar.observeBtn) {
		game.calendar.observeHandler();
	};
}, 2000);

// астрономические явления только для науки
// var gistysSciTimerId = setTimeout( function gistysSciFunc() {
//   var resource = game.resPool.get("science"); 
//   if(game.calendar.observeBtn) {
//     if (resource.value < resource.maxValue) {
//       game.calendar.observeHandler();
//     };
//   };
//   gistysSciTimerId = setTimeout(gistysSciFunc, 2000);
// }, 1000);

// //автотрейд 
// var gistysTradeTimerId = setInterval( function gistysTradeFunc() {
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
//         } else if (game.calendar.day < 80) {
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
// }, 500)
	
// автокрафт дерева
var gistysCraftWoodTimerId = setInterval( function gistysCraftWoodFunc() {
  var resource = game.resPool.get("catnip"); 
  var resource_wood = game.resPool.get("wood"); 
  if ((resource.value >= resource.maxValue * 0.8) && (resource_wood.value <resource_wood.maxValue)) {
    game.workshop.craftAll("wood");
  };
}, 2000)

// автокрафт стали
var gistysCraftSteelTimerId = setInterval( function gistysCraftSteelFunc() {
	var resource_coal = game.resPool.get("coal"); 
	var resource_iron = game.resPool.get("iron"); 
	if (resource_coal.value >= resource_coal.maxValue * 0.8 && resource_iron.value >= resource_coal.value * 0.8 ) {
		game.workshop.craftAll("steel");
	};
}, 2000)

// автоохота
var gistysHuntTimerId = setInterval( function gistysHuntFunc() {
	var resource = game.resPool.get("manpower");
	// if(resource.value >= 100) {
	if(resource.value >= resource.maxValue * 0.9) {
		gamePage.village.huntAll();
		game.workshop.craftAll("parchment");
	};
}, 1000)

// автовера
var gistysFaithTimerId = setInterval( function gistysFaithFunc() {
  var resource = game.resPool.get("faith"); 
  // if (resource.value > 500) {
  if (resource.value > resource.maxValue * 0.99) {
    game.tabs[5].praiseBtn.model.handler()
  };
}, 3000)

// автокрафт блюпринтов
var gistysCraftBlueprintTimerId = setInterval(function gistysCraftBlueprint() {
	var resource = game.resPool.get("science"); 
	var resource_compedium = game.resPool.get("compedium");
	if ( resource.value >= resource.maxValue * 0.99 && resource_compedium.value > 2000) {
		game.workshop.craftAll("blueprint");
	};
}, 2000);

// автокрафт компендиумов
var gistysCraftCompendiumTimerId = setInterval(function gistysCraftCompendium() {
	var resource = game.resPool.get("science"); 
	var resource_manuscript = game.resPool.get("manuscript");
	if ( resource.value >= resource.maxValue * 0.99 && resource_manuscript.value > 2000) {
		game.workshop.craftAll("compedium");
	};
}, 2000);

// автокрафт манускриптов
var gistysCraftManuscriptTimerId = setInterval( function gistysCraftManuscriptFunc() {
  var resource = game.resPool.get("culture"); 
  var resource_parchment = game.resPool.get("parchment");
  if (resource.value > resource.maxValue * 0.9 && resource_parchment.value > 10000) { 
    game.workshop.craftAll("manuscript");
  };
}, 3000)


// автокрафт beam
var gistysCraftBeamTimerId = setInterval( function gistysCraftBeamFunc() {
  var resource = game.resPool.get("wood"); 
  if (resource.value >= resource.maxValue * 0.999) {
    game.workshop.craftAll("beam");
  };
}, 2000)

// автокрафт slab
var gistysCraftSlabTimerId = setInterval( function gistysCraftSlabFunc() {
  var resource = game.resPool.get("minerals"); 
  if (resource.value >= resource.maxValue * 0.999) {
    game.workshop.craftAll("slab");
  };
}, 2000)

// автокрафт plate
var gistysCraftPlateTimerId = setInterval( function gistysCraftSlabFunc() {
  var resource = game.resPool.get("iron"); 
  if (resource.value >= resource.maxValue * 0.999) {
    game.workshop.craftAll("plate");
  };
}, 2000)


