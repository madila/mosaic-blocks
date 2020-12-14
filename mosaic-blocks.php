<?php
/**
 * Plugin Name:     Mosaic Blocks
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     mosaic-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Mosaic_Blocks
 */

// Your code starts here.

function mosaic_register_blocks()
{
	// Skip block registration if Gutenberg is not enabled/merged.
	if ( ! function_exists( 'register_block_type' )) {
		return;
	}

	$block_settings = require_once "build/index.asset.php";

	if(is_array($block_settings) && array_key_exists('dependencies', $block_settings)) {
		wp_register_script(
			'mosaic-blocks',
			plugins_url('build/index.js', __FILE__),
			$block_settings['dependencies'],
			$block_settings['version']
		);

		// Register editor style src/editor.css
		wp_register_style(
			'mosaic-blocks-editor-style',
			plugins_url( 'src/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'src/editor.css' )
		);

		// Register front end block style src/style.css
		wp_register_style(
			'mosaic-blocks-frontend-style',
			plugins_url( 'src/style.css', __FILE__ ),
			array( ),
			filemtime( plugin_dir_path( __FILE__ ) . 'src/style.css' )
		);

		register_post_meta( '', '_mosaic_show_title_block', array(
			'show_in_rest' => true,
			'single' => true,
			'type' => 'boolean',
			'auth_callback' => function() {
				return current_user_can('edit_posts');
			}
		) );

		register_post_meta( '', '_mosaic_primary_colour', array(
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'auth_callback' => function() {
				return current_user_can('edit_posts');
			}
		) );
	}
}
add_action( 'init', 'mosaic_register_blocks' );
