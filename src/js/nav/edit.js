/**
 * WordPress dependencies
 */
const {
    blockEditor: {
        useBlockProps,
        useInnerBlocksProps,
        store: blockEditorStore,
    },
    data: {
        useSelect,
        useDispatch,
    },
    element: {
        useEffect,
    },
} = wp;

import { default as panelBlock } from './../panel';
import { default as panelsBlock } from './../panels';
import { default as navItemBlock } from './../nav-item';

const TEMPLATE = [];

function edit({ clientId }) {

    const blockProps = useBlockProps();
    const { removeBlock } = useDispatch(blockEditorStore);
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        __experimentalCaptureToolbars: true,
        template: TEMPLATE,
        templateLock: false,
        allowedBlocks: [navItemBlock.name, 'core/button'],
    });

    const { tabIds, navBlocks } = useSelect((select) => {
        const { getBlock, getBlockRootClientId } = select(blockEditorStore);

        const parentId = getBlockRootClientId(clientId);
        const parentBlock = getBlock(parentId);

        if (!parentBlock) {
            return {
                tabIds: [],
                navBlocks: []
            };
        }

        const panelsBlocks = parentBlock.innerBlocks.find(({ name }) => name === panelsBlock.name);
        const tabIds = panelsBlocks?.innerBlocks.filter(({ name }) => name === panelBlock.name).map((b) => b.attributes.tabId) || [];
        const currentBlock = getBlock(clientId);
        const navBlocks = currentBlock?.innerBlocks.filter(({ name }) => name === navItemBlock.name) || [];

        return {
            tabIds,
            navBlocks,
        };
    }, [clientId]);

    useEffect(() => {
        const navBlocksToRemove = navBlocks.filter(({ attributes: { tabId } }) => tabId && !tabIds.includes(tabId));

        navBlocksToRemove.forEach(({ clientId }) => removeBlock(clientId));
    }, [tabIds, navBlocks, removeBlock]);

    return (
        <div {...innerBlocksProps}>
            {innerBlocksProps.children}
        </div>
    );
}

export default edit;