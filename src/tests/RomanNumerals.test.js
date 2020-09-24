import {romanToInt, intToRoman} from './../helper/RomanNumerals.jsx';

describe('Given a Roman number', () => {
	describe('When it gets converted', () => {
		it('Should call cb once', () => {
			const doSomethingWithOutputCb = jest.fn();

			romanToInt('I', doSomethingWithOutputCb);
			expect(doSomethingWithOutputCb).toHaveBeenCalled();
		})

		it("Should throw expection when value to be converted is not a valid Roman String value", () => {
			const doSomethingWithOutputCb = jest.fn();
			expect(() => {
				romanToInt("123", doSomethingWithOutputCb);
			}).toThrow();

			expect(doSomethingWithOutputCb).not.toHaveBeenCalled();
		});

		it("Should throw expection when converting 'XMX'", () => {
			const doSomethingWithOutputCb = jest.fn();
			expect(() => {
				romanToInt("XMX", doSomethingWithOutputCb);
			}).toThrow();

			expect(doSomethingWithOutputCb).not.toHaveBeenCalled();
		});

		it("Should throw expection when converting 'CDC'", () => {
			const doSomethingWithOutputCb = jest.fn();
			expect(() => {
				romanToInt("CDC", doSomethingWithOutputCb);
			}).toThrow();

			expect(doSomethingWithOutputCb).not.toHaveBeenCalled();
		});

		it("Should throw expection when converting 'CMCM'", () => {
			const doSomethingWithOutputCb = jest.fn();
			expect(() => {
				romanToInt("CMCM", doSomethingWithOutputCb);
			}).toThrow();

			expect(doSomethingWithOutputCb).not.toHaveBeenCalled();
		});

		it("Should display the correct values in digits for 'I'", () => {
			romanToInt('I',(value) => expect(value).toBe(1));
		});

		it("Should display the correct values in digits for 'C'", () => {
			romanToInt('C',(value) => expect(value).toBe(100));
		});

		it("Should display the correct values in digits for 'DC'", () => {
			romanToInt('DC',(value) => expect(value).toBe(600));
		});

		it("Should display the correct values in digits for 'DCC'", () => {
			romanToInt('DCC',(value) => expect(value).toBe(700));
		});

		it("Should display the correct values in digits for 'CM'", () => {
			romanToInt('CM',(value) => expect(value).toBe(900));
		});

		it("Should display the correct values in digits for 'CMXCI'", () => {
			romanToInt('CMXCI',(value) => expect(value).toBe(991));
		});

		it("Should display the correct values in digits for 'MCMLXXXIV'", () => {
			romanToInt('MCMLXXXIV',(value) => expect(value).toBe(1984));
		});

		it("Should display the correct values in digits for 'MMMMMMMMI'", () => {
			romanToInt('MMMMMMMMI',(value) => expect(value).toBe(8001));
		});

		it("Should display the correct values in digits for 'MMMMMMMMMM'", () => {
			romanToInt('MMMMMMMMMM',(value) => expect(value).toBe(10000));
		});

		it("Should display the correct values in digits for 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDLVI'", () => {
			romanToInt('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDLVI',
			(value) => expect(value).toBe(123456));
		});
	})
})

describe('Given an Integer number', () => {
	describe('When it gets converted', () => {
		it('Should call cb once', () => {
			const doSomethingWithOutputCb = jest.fn();

			intToRoman(1000, doSomethingWithOutputCb);
			expect(doSomethingWithOutputCb).toHaveBeenCalled();
		})

		it("Should throw expection when value to be converted is not an Integer", () => {
			const doSomethingWithOutputCb = jest.fn();
			expect(() => {
				intToRoman("123", doSomethingWithOutputCb);
			}).toThrow();

			expect(doSomethingWithOutputCb).not.toHaveBeenCalled();
		});

		it("Should display the correct values in digits for 0", () => {
			intToRoman(0, (value) => expect(value).toBe(''));
		});

		it("Should display the correct values in digits for 1", () => {
			intToRoman(1, (value) => expect(value).toBe('I'));
		});

		it("Should display the correct values in digits for 10", () => {
			intToRoman(10, (value) => expect(value).toBe('X'));
		});

		it("Should display the correct values in digits for 123", () => {
			intToRoman(123, (value) => expect(value).toBe('CXXIII'));
		});

		it("Should display the correct values in digits for 1010", () => {
			intToRoman(1010, (value) => expect(value).toBe('MX'));
		});

		it("Should display the correct values in digits for 1984", () => {
			intToRoman(1984, (value) => expect(value).toBe('MCMLXXXIV'));
		});

		it("Should display the correct values in digits for 10000", () => {
			intToRoman(10000, (value) => expect(value).toBe('MMMMMMMMMM'));
		});

		it("Should display the correct values in digits for 123456", () => {
			intToRoman(123456, (value) => expect(value).toBe('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCDLVI'));
		});
	})
})
