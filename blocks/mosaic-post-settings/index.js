( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/#registering-a-block
	 */
	var registerPlugin = wp.plugins.registerPlugin;
	var PluginSidebar = wp.editPost.PluginSidebar;
	var ToggleControl = wp.components.ToggleControl;
	var withSelect = wp.data.withSelect;
	var withDispatch = wp.data.withDispatch;
	var compose = wp.compose.compose;
	var el = wp.element.createElement;
	var __ = wp.i18n.__;

	var MetaBlockField = compose(
		withDispatch(
			function( dispatch, props ) {
				return {
					setMetaFieldValue: function( value ) {
						dispatch( 'core/editor' ).editPost(
							{ meta: { [ props.metaFieldName ]: value } }
						);
					}
				}
			}
		),
		withSelect( function( select, props ) {
			return {
				metaFieldValue: select( 'core/editor' )
					.getEditedPostAttribute( 'meta' )
					[ props.metaFieldName ],
			}
		} )
	)( function( props ) {
		return el(ToggleControl, {
			label: __('Show Post Title?'),
			help: (props.metaFieldValue) ? 'The title will be shown.' : 'The title will be hidden.',
			checked: props.metaFieldValue,
			onChange: function ( value ) {
				props.setMetaFieldValue( value );
			},
		});
	});

	/**
	 * Every block starts by registering a new plugin type definition.
	 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/#registering-a-block
	 */
	registerPlugin( 'mosaic-post-settings', {
		render: function() {
			return el( PluginSidebar,
				{
					name: 'mosaic-post-settings',
					icon: 'screenoptions',
					title: 'Mosaic Post Settings',
				},
				el( 'div',
					{ className: 'mosaic-post-settings' },
					el( MetaBlockField,
						{ metaFieldName: '_mosaic_show_title_block' } )
				)
			);
		},
	} );

} )(
	window.wp
);
