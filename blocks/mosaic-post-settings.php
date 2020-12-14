<?php
/**
 * Functions to register client-side assets (scripts and stylesheets) for the
 * Gutenberg block.
 *
 * @package mosaic-blocks
 */

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function mosaic_post_settings_register() {
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	$dir = dirname( __FILE__ );

	$index_js = 'mosaic-post-settings/index.js';
	wp_register_script(
		'mosaic-post-settings',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-plugins',
			'wp-edit-post',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-data',
		),
		filemtime( "$dir/$index_js" )
	);


	$index_js = 'mosaic-post-title/index.js';
	wp_register_script(
		'mosaic-post-title',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-hooks',
		),
		filemtime( "$dir/$index_js" )
	);

	$editor_css = 'mosaic-post-settings/editor.css';
	wp_register_style(
		'mosaic-post-settings-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	register_post_meta( '', '_mosaic_show_title_block', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'boolean',
		'auth_callback' => function() {
			return current_user_can('edit_posts');
		}
	) );

}
add_action( 'init', 'mosaic_post_settings_register' );


