import { PanelColorSettings } from  '@wordpress/editor';
import { compose } from  '@wordpress/compose';
import { __ } from  '@wordpress/i18n';
import { applyWithSelectMeta, applyWithDispatchMeta } from '../helpers/metaFields';

const ColorOptions = (props) => {
	return (
		<PanelColorSettings
			title={__('Global Color Settings')}
			colorSettings={[
				{
					value: props.metaFieldValue,
					onChange: (value) => props.setMetaFieldValue(value),
					label: __('Primary Color'),
				}
			]}
		>
		</PanelColorSettings>)
};

export default compose(
	applyWithSelectMeta,
	applyWithDispatchMeta,
)( ColorOptions );
