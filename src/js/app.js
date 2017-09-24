import '../css/main.scss';

import '../page2.html';

import { RandomGenerator } from './random-generator';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInit = () => {
	outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
	outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInit');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInit);
buttonRndRange.addEventListener('click', outputRandomRange);