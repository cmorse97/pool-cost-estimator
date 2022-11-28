console.log(document);
// Report generation functionality

// When report button is clicked, functions executed and results displayed on browser. When refreshed, this resets along with page.
const generateReportButton = document.getElementById('generate-report-button');
generateReportButton.addEventListener('click', () => {
	const gallonPlaceholder = document.getElementById('gallon-placeholder');
	while (gallonPlaceholder.firstChild) {
		gallonPlaceholder.removeChild(gallonPlaceholder.firstChild);
	}
	const gallonSizeHeader = document.createElement('h2');
	gallonSizeHeader.textContent = `${getPoolGallonSize()} gallons.`;
	gallonPlaceholder.appendChild(gallonSizeHeader);

	const materialPlaceholder = document.getElementById('material-placeholder');
	const materialCostHeader = document.createElement('h2');
	while (materialPlaceholder.firstChild) {
		materialPlaceholder.removeChild(materialPlaceholder.firstChild);
	}
	materialCostHeader.textContent = `$${getCopingCost()} +
		${getDeckingCost()} +
		${getElectricalCost()} +
		${getEquipmentCost()} +
		${getGuniteCost()} +
		${getPlasterCost()} +
		${getPlumbingCost()} +
		${getTileCost()}`;
	materialPlaceholder.appendChild(materialCostHeader);
});

// Functions to determine output of data submitted

// Material Cost Functions

// Calculate the gallon size of the pool
const getPoolGallonSize = () => {
	let length = document.getElementById('pool-len').value;
	let width = document.getElementById('pool-wid').value;
	let depth = document.getElementById('pool-depth').value;

	let gallonSize = length * width * depth * 7.48;
	return gallonSize;
};

// Calculate the cost of tile
const getTileCost = () => {
	let tilePerimeter = document.getElementById('tile-perimeter').value;
	let tileDollar = document.getElementById('tile-dollar-foot').value;

	let tileCost = tileDollar * tilePerimeter;

	return tileCost;
};

// Calculate the cost of coping
const getCopingCost = () => {
	let copingPerimeter = document.getElementById('coping-perimeter').value;
	let copingDollar = document.getElementById('coping-dollar-foot').value;
	let isBullNose = document.getElementById('bullnose').checked;

	if (!isBullNose) {
		return copingDollar * copingPerimeter;
	} else {
		return copingDollar * copingPerimeter * 2;
	}
};

// Calculate the cost of decking
const getDeckingCost = () => {
	let deckingUnit = document.getElementById('decking-sqft').value;
	let deckingDollarPerUnit = document.getElementById(
		'decking-dollar-sqft'
	).value;
	let deckingCost = deckingUnit * deckingDollarPerUnit;
	return deckingCost;
};

// Calculate the cost of gunite
const getGuniteCost = () => {
	let guniteUnit = document.getElementById('gunite-sqft').value;
	let guniteDollarPerUnit = document.getElementById('gunite-dollar-sqft').value;
	let guniteCost = guniteUnit * guniteDollarPerUnit;
	return guniteCost;
};

// Calculate the cost of plumbing
const getPlumbingCost = () => {
	let plumbingUnit = document.getElementById('plumbing-feet').value;
	let plumbingDollarPerUnit = document.getElementById(
		'plumbing-dollar-foot'
	).value;
	let plumbingCost = plumbingUnit * plumbingDollarPerUnit;
	return plumbingCost;
};

// Calculate the cost of equipment
const getEquipmentCost = () => {
	let equipmentUnit = document.getElementById('equipment-unit').value;
	let equipmentDollarPerUnit = document.getElementById(
		'equipment-dollar-unit'
	).value;
	let equipmentCost = equipmentUnit * equipmentDollarPerUnit;
	return equipmentCost;
};

// Calculate the cost of plaster
const getPlasterCost = () => {
	let plasterUnit = document.getElementById('plaster-sqft').value;
	let plasterDollarPerUnit = document.getElementById(
		'plaster-dollar-sqft'
	).value;
	let plasterCost = plasterUnit * plasterDollarPerUnit;
	return plasterCost;
};

// Calculate the cost of electrical
const getElectricalCost = () => {
	let electricalUnit = document.getElementById('electrical-foot').value;
	let electricalDollarPerUnit = document.getElementById(
		'electrical-dollar-foot'
	).value;
	let electricalCost = electricalUnit * electricalDollarPerUnit;
	return electricalCost;
};

// Total cost of Materials
// // const materialTotalCost = () => {
// 	getCopingCost() +
// 		getPoolGallonSize() +
// 		getTileCost() +
// 		getPlasterCost() +
// 		getDeckingCost() +
// 		getElectricalCost() +
// 		getEquipmentCost() +
// 		getGuniteCost() +
// 		getPlumbingCost();
// };

// materialTotalCost();
