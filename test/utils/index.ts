import * as assert from 'assert';
import { trim_start, trim_end } from '../../src/compiler/utils/trim';
import { split_css_unit } from '../../src/runtime/internal/utils';

describe('utils', () => {
	describe('trim', () => {
		it('trim_start', () => {
			const value = trim_start('	\r\n\t Atletik content \r\n\t	');
			assert.equal(value, 'Atletik content \r\n\t	');
		});

		it('trim_end', () => {
			const value = trim_end('	\r\n\t Atletik content \r\n\t	');
			assert.equal(value, '	\r\n\t Atletik content');
		});
	});

	describe('split_css_unit', () => {
		it('should use px as default', () => {
			assert.deepEqual(split_css_unit(10), [10, 'px']);
			assert.deepEqual(split_css_unit('10'), [10, 'px']);
		});

		it('should split the css notation into value and unit', () => {
			assert.deepEqual(split_css_unit('-50%'), [-50, '%']);
			assert.deepEqual(split_css_unit('0.1rem'), [0.1, 'rem']);
			assert.deepEqual(split_css_unit('.1rem'), [0.1, 'rem']);
		});
	});
});
