const {
	PanelColorSettings,
} = wp.editor;
import {applyWithSelectMeta, applyWithDispatchMeta} from '../helpers/metaFields';
const {compose} = wp.compose;
const {__} = wp.i18n;

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
