<?php

use function WeCodeArt\Functions\{ get_prop, toJSON };

$nav_id = $block->context['anchor'] ? $block->context['anchor'] . '-nav' : '';

?>
<nav <?php echo get_block_wrapper_attributes( [
    'id' => get_prop( $attributes, [ 'anchor' ] ) ?: $nav_id,
] ); ?>>
    <?php echo $content; ?>
</nav>