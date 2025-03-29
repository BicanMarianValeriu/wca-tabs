<?php

use function WeCodeArt\Functions\{ get_prop, toJSON };

$tab_id = explode( '-', get_prop( $attributes, [ 'tabId' ], '' ) );
$tab_id = current( $tab_id );

$tabs_id = $block->context['anchor'] ?: 'wp-tabs';

?>
<button <?php echo get_block_wrapper_attributes( [
    'data-wp-interactive'           => 'wecodeart/collapse',
    'data-wp-context'               => toJSON( [ 'isOpen' => get_prop( $attributes, [ 'isOpen' ], false ) ] ),
    'aria-controls'                 => join( '-', [ $tabs_id, 'content', $tab_id ] ),
    'aria-expanded'                 => 'false',
    'data-wp-bind--aria-expanded'   => 'context.isOpen',
    'data-wp-bind--aria-label'      => 'state.ariaLabel',
    'data-wp-class--collapsed'      => '!context.isOpen',
    'data-wp-on--click'             => 'actions.toggle',
    'role'                          => 'tab',
    'id'                            => join( '-', [ $tabs_id, 'toggle', $tab_id ] ),
    'data-wp-init'                  => 'wecodeart/tabs::callbacks.addElement'
] ); ?>><?php

    echo esc_html( get_prop( $attributes, [ 'metadata', 'name' ], 'Tab #' ) );

?></button>