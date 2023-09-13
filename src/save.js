/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
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
		<div {...useBlockProps.save()}>
			{company_name && (
				<div className="company_name">
					{__("Company name", "text-domain")} : {company_name}
				</div>
			)}

			{company_phone2 && (
				<div className="company_phone">
					{__("Company phone", "text-domain")} : {company_phone2}
				</div>
			)}
			{company_address && (
				<div className="company_address">
					{__("Company address", "text-domain")} : {company_address}
				</div>
			)}
			{company_city && (
				<div className="company_city">
					{__("Company city", "text-domain")} : {company_city}
				</div>
			)}
			{company_state && (
				<div className="company_state">
					{__("Company state", "text-domain")} : {company_state}
				</div>
			)}
			{company_type && (
				<div className="company_type">
					{__("Company type", "text-domain")} : {company_type}
				</div>
			)}
			{company_shift && (
				<div className="company_shift">
					{__("Company shift", "text-domain")} : {company_shift}
				</div>
			)}
		</div>
	);
}
