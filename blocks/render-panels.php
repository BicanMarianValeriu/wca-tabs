<?php

use function WeCodeArt\Functions\{ get_prop, toJSON };

$panels_id = $block->context['anchor'] ? $block->context['anchor'] . '-panels' : '';

?>
<div <?php echo get_block_wrapper_attributes( [
    'id' => get_prop( $attributes, [ 'anchor' ] ) ?: $panels_id
] ); ?>>
    <?php echo $content; ?>
</div>