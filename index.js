console.log(document);

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
	materialCostHeader.textContent = `$${getTileCost()} + ${getCopingCost()}`;
	materialPlaceholder.appendChild(materialCostHeader);
});

const getPoolGallonSize = () => {
	let length = document.getElementById('pool-len').value;
	let width = document.getElementById('pool-wid').value;
	let depth = document.getElementById('pool-depth').value;

	let gallonSize = length * width * depth * 7.48;
	return gallonSize;
};

const getTileCost = () => {
	let tilePerimeter = document.getElementById('tile-perimeter').value;
	let tileDollar = document.getElementById('tile-dollar-foot').value;

	let tileCost = tileDollar * tilePerimeter;

	return tileCost;
};

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
