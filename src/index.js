// src/index.js
const { registerPlugin } = wp.plugins;
import mosaicSettings from './settings/mosaicSettings';

/**
 * Every block starts by registering a new plugin type definition.
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/#registering-a-block
 */
registerPlugin( 'mosaic-settings', {
	render: mosaicSettings,
} );
