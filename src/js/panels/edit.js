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
import { default as navBlock } from './../nav';
import { default as navItemBlock } from './../nav-item';

const TEMPLATE = [
    [panelBlock.name],
];

function edit({ clientId }) {

    const blockProps = useBlockProps();
    const { removeBlock } = useDispatch(blockEditorStore);

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        __experimentalCaptureToolbars: true,
        template: TEMPLATE,
        templateLock: false,
        allowedBlocks: [panelBlock.name],
    });

    const { tabIds, panelBlocks } = useSelect((select) => {
        const { getBlock, getBlockRootClientId } = select(blockEditorStore);

        const parentId = getBlockRootClientId(clientId);
        const parentBlock = getBlock(parentId);

        if (!parentBlock) {
            return {
                tabIds: [],
                panelBlocks: []
            };
        }

        const navBlocks = parentBlock.innerBlocks.find(({ name }) => name === navBlock.name);
        const tabIds = navBlocks?.innerBlocks?.filter(({ name }) => name === navItemBlock.name).map((b) => b.attributes.tabId) || [];
        const currentBlock = getBlock(clientId);
        const panelBlocks = currentBlock?.innerBlocks?.filter(({ name }) => name === panelBlock.name) || [];

        return {
            tabIds,
            panelBlocks,
        };
    }, [clientId]);

    useEffect(() => {
        const panelsToRemove = panelBlocks.filter(({ attributes: { tabId } }) => tabId && !tabIds.includes(tabId));

        panelsToRemove.forEach(({ clientId }) => removeBlock(clientId));
    }, [tabIds, panelBlocks, removeBlock]);

    return (
        <div {...innerBlocksProps}>
            {innerBlocksProps.children}
        </div>
    );
}

export default edit;