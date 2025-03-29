<?php

use function WeCodeArt\Functions\{ get_prop, toJSON };

$is_open    = get_prop( $attributes, [ 'isOpen' ], false );
$tab_id     = explode( '-', get_prop( $attributes, [ 'tabId' ], '' ) );
$tab_id     = current( $tab_id );

$tabs_id = $block->context['anchor'] ?: 'wp-tabs';

?>
<div <?php echo get_block_wrapper_attributes( [
    'class'             => $is_open ? 'collapse fade show' : 'fade collapse',
    'aria-labelledby'   => join( '-', [ $tabs_id, 'toggle', $tab_id ] ),
    'id'                => join( '-', [ $tabs_id, 'content', $tab_id ] ),
    'role'              => 'tabpanel'
] ); ?>>
    <?php echo $content; ?>
</div>