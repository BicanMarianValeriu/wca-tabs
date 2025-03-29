<?php

use function WeCodeArt\Functions\{ get_prop, toJSON };

$is_open    = get_prop( $attributes, [ 'isOpen' ], false );
$tab_id     = explode( '-', get_prop( $attributes, [ 'tabId' ], '' ) );
$tab_id     = current( $tab_id );

?>
<div <?php echo get_block_wrapper_attributes( [
    'class'             => $is_open ? 'collapse fade show' : 'fade collapse',
    'aria-labelledby'   => 'wp-tabs-toggle-' . $tab_id,
    'id'                => 'wp-tabs-content-' . $tab_id,
    'role'              => 'tabpanel'
] ); ?>>
    <?php echo $content; ?>
</div>