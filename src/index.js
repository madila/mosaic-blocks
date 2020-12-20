// src/index.js
import { registerPlugin } from "@wordpress/plugins";
import mosaicSettings from './settings/mosaicSettings';

let DEBUG_MODE_ON = false;

console.log(DEBUG_MODE_ON);
console.log('Loading Mosaic Settings');

if (!DEBUG_MODE_ON) {
	console = console || {};
	console.log = function(){};
}

/**
 * Every block starts by registering a new plugin type definition.
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/#registering-a-block
 */
registerPlugin( 'mosaic-settings', {
	render: mosaicSettings,
} );

