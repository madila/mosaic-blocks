(function (wp) {
	/**
	 * WordPress Dependencies
	 */
	var addFilter = wp.hooks.addFilter;

	/**
	 * Add custom attribute for mobile visibility.
	 *
	 * @param {Object} settings Settings for the block
	 * @param {String} name Name for the block.
	 *
	 * @return {Object} settings Modified settings.
	 */
	function addAttributes(settings, name) {

		if ("core/post-title" === name) {
			// check if object exists for old Gutenberg version compatibility

			if (typeof settings.attributes !== 'undefined') {

				console.log(settings);
				settings.attributes = Object.assign(settings.attributes, {
					screenReaderText: {
						type: 'boolean',
						source: 'meta',
						meta: '_mosaic_show_title_block',
						default: false,
					}
				});

			}
		}

		return settings;
	}

	addFilter(
		'blocks.registerBlockType',
		'mosaic/post-title',
		addAttributes
	);

})(
	window.wp
);
