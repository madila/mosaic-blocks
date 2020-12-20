import { withSelect, withDispatch } from '@wordpress/data';

const applyWithDispatchMeta = withDispatch( (dispatch, ownProps) => {
	return {
		setMetaFieldValue: function (value) {
			dispatch('core/editor').editPost(
				{meta: {[ownProps.metaFieldName]: value}}
			);
		}
	}
});



const applyWithSelectMeta = withSelect( (select, ownProps) => {
	return {
		metaFieldValue: select('core/editor')
			.getEditedPostAttribute('meta')
			[ownProps.metaFieldName],
	}
});

export {applyWithDispatchMeta, applyWithSelectMeta}
