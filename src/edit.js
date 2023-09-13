/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

import {
	TextControl,
	SelectControl,
	RadioControl,
} from "@wordpress/components";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		company_name,
		company_phone2,
		company_address,
		company_city,
		company_state,
		company_type,
		company_shift,
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<TextControl
				label={__("Company name", "text-domain")}
				value={company_name}
				onChange={(value) => setAttributes({ company_name: value })}
			/>
			<TextControl
				label={__("Company phone", "text-domain")}
				value={company_phone2}
				onChange={(value) => setAttributes({ company_phone2: value })}
			/>
			<TextControl
				label={__("Company address", "text-domain")}
				value={company_address}
				onChange={(value) => setAttributes({ company_address: value })}
			/>
			<TextControl
				label={__("Company City", "text-domain")}
				value={company_city}
				onChange={(value) => setAttributes({ company_city: value })}
			/>
			<TextControl
				label={__("Company state", "text-domain")}
				value={company_state}
				onChange={(value) => setAttributes({ company_state: value })}
			/>
			<SelectControl
				label={__("Company Type", "text-domain")}
				value={company_type}
				options={[
					{ label: "Government", value: "government" },
					{ label: "Private", value: "private" },
				]}
				onChange={(value) => setAttributes({ company_type: value })}
				__nextHasNoMarginBottom
			/>
			<RadioControl
				label="Company Shift"
				selected={company_shift}
				options={[
					{ label: "Day", value: "day" },
					{ label: "Night", value: "night" },
				]}
				onChange={(value) => setAttributes({ company_shift: value })}
			/>
		</div>
	);
}
