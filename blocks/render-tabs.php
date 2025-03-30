<?php

use function WeCodeArt\Functions\{ get_prop, toJSON };

\wp_interactivity_config( 'wecodeart/collapse', [
    'ariaLabel'	=>	[
        'collapsed' => esc_html__( 'Open item', 'wecodeart' ),
        'expanded'	=> esc_html__( 'Close item', 'wecodeart' )
    ],
    'classNames' => [
        'show' 			=> 'show',
        'collapse' 		=> 'collapse',
        'collapsing'    => 'collapsing'
    ]
] );

\wecodeart( 'styles' )->Components->load( [ 'transition' ] );

?>
<div <?php echo get_block_wrapper_attributes( [
    'data-wp-interactive'   => 'wecodeart/tabs',
    'data-wp-context'       => toJSON( [
        'elements'  => [],
        'isOpened'  => null,
    ] ),
    'data-wp-init'          => 'callbacks.onTabChange',
    'role'                  => 'tablist',
    'id'                    => get_prop( $attributes, [ 'anchor' ] ) ?: wp_unique_id( 'wp-tabs-' ),
] ); ?>>
    <?php echo $content; ?>
</div>