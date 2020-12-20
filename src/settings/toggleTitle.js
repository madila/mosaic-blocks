import {ToggleControl} from "@wordpress/components";
import {compose} from  '@wordpress/compose';
import {__} from  '@wordpress/i18n';
import { applyWithSelectMeta, applyWithDispatchMeta } from '../helpers/metaFields';

const MetaBlockField = (props) => {
	return <ToggleControl
		label={__('Show Post Title?')}
		help={(props.metaFieldValue) ? 'The title will be shown.' : 'The title will be hidden.'}
		checked={props.metaFieldValue}
		onChange={(value) => {
			props.setMetaFieldValue(value);
		}}
	/>
}

export default compose(
	applyWithSelectMeta,
	applyWithDispatchMeta,
)( MetaBlockField );
