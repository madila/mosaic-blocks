const {ToggleControl} = wp.components;
const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;
const {__} = wp.i18n;

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

const applyWithDispatch = withDispatch( (dispatch, ownProps) => {
	return {
		setMetaFieldValue: function (value) {
			dispatch('core/editor').editPost(
				{meta: {[ownProps.metaFieldName]: value}}
			);
		}
	}
});


const applyWithSelect = withSelect( (select, ownProps) => {
	return {
		metaFieldValue: select('core/editor')
			.getEditedPostAttribute('meta')
			[ownProps.metaFieldName],
	}
});

export default compose(
	applyWithSelect,
	applyWithDispatch,
)( MetaBlockField );
