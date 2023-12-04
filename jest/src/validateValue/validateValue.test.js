const validateValue = require('./validateValue');

describe('validateValue', () => {
	test('Корректное значение', () => {
		expect(validateValue(50)).toBe(true);
	})
	test('Корректное значение', () => {
		expect(validateValue(-1)).toBe(false);
	})
	test('Корректное значение', () => {
		expect(validateValue(101)).toBe(false);
	})
	test('Пограничное снизу', () => {
		expect(validateValue(0)).toBe(true);
	})
	test('Пограничное сверху', () => {
		expect(validateValue(100)).toBe(true);
	})
})
