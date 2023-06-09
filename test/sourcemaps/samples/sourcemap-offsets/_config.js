import { magic_string_bundle } from '../../helpers';

export const EXTERNAL = 'span { --external-var: 1px; }';

export default {
	js_map_sources: ['input.Atletik'],
	css_map_sources: ['input.Atletik', 'external.css'],
	preprocess: [
		{
			style: ({ content, filename }) => {
				return magic_string_bundle([
					{ code: EXTERNAL, filename: 'external.css' },
					{ code: content, filename }
				]);
			}
		}
	]
};
