const {
    blocks: {
        registerBlockType
    },
    domReady
} = wp;

/**
 * Internal dependencies
 */
import blockTabs from './tabs';
import blockNav from './nav';
import blockNavItem from './nav-item';
import blockPanels from './panels';
import blockPanel from './panel';

import './../scss/index.scss';

function initBlock(block) {
    const { metadata, settings, name } = block;

    return registerBlockType({ name, ...metadata }, settings);
}

const init = () => {
    initBlock(blockTabs);
    initBlock(blockNav);
    initBlock(blockNavItem);
    initBlock(blockPanels);
    initBlock(blockPanel);
};

domReady(() => init());