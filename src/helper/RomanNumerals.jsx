const ROMAN_NUMBERS = {
	M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
};

const DIGIT_NUMBERS = {
	1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
}

export const romanToInt = function(romanNum, cb) {
	const romanNumberRegx = new RegExp('^M{0,}(CM|CD|D?C{0,})(XC|XL|L?X{0,})(IX|IV|V?I{0,})$');

	if (romanNum === undefined || romanNum.match(romanNumberRegx) === null) {
		throw Error('Invalid Roman Number');
	}

	const romanNumArr = romanNum.split('');

	const convertedNum = romanNumArr.reduce((acc, romanLetter, index) => {
		const currentValue = ROMAN_NUMBERS[romanLetter];

		const followingRomanLetter = romanNumArr[index + 1];
		const nextValue = ROMAN_NUMBERS[followingRomanLetter];

		acc = currentValue < nextValue ? acc -= currentValue : acc += currentValue;

		return acc;
	}, 0);

	cb(convertedNum);
};

const findClosest = (num, multiplier) => {
	const BIGGEST_ROMAN_NUMBER = 1000;
	const multipliedNum = num * multiplier;

	if (DIGIT_NUMBERS[multipliedNum] !== undefined) {
		return multipliedNum;
	}

	if (multipliedNum > BIGGEST_ROMAN_NUMBER) {
		return BIGGEST_ROMAN_NUMBER;
	}

	return findClosest(num - 1, multiplier);
}

export const addTillEqual = (digit, multiplier, acc = '') => {
	const BIGGEST_ROMAN_NUMBER = 1000;
	const numberMultiplied = digit * multiplier;
	const closestNum = findClosest(digit, multiplier);

	acc = acc.concat(DIGIT_NUMBERS[closestNum]);
  
	if (closestNum === numberMultiplied) {
		return acc;	
	} else if (numberMultiplied > BIGGEST_ROMAN_NUMBER) {
		const subtracted = numberMultiplied - BIGGEST_ROMAN_NUMBER;
		multiplier = Math.pow(10, String(subtracted).length - 1);

		return addTillEqual(subtracted / multiplier, multiplier, acc);
	} else {
		return addTillEqual(digit - (closestNum / multiplier), multiplier, acc);
	}
}

export const intToRoman = (intNum, cb) => {
	if (!Number.isInteger(intNum)) {
		throw new Error("Is not valid Integer");
	}

	const intNumArr = String(intNum).split('');

	const convertedNum = intNumArr.reduce((acc, intDigit, index, array) => {
		const mutiplier = Math.pow(10, array.length - index - 1);
		if (intDigit === '0') {
			return acc;
		} else {
			return acc.concat(addTillEqual(Number(intDigit), mutiplier));
		}
	}, '');

	cb(convertedNum);
}