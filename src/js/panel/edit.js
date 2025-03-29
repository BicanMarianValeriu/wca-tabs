/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
    blocks: { createBlock },
    blockEditor: {
        useBlockProps,
        useInnerBlocksProps,
        store: blockEditorStore,
    },
    data: {
        useSelect,
        useDispatch
    },
    element: {
        useEffect,
    },
} = wp;

import { default as navBlock } from './../nav';
import { default as navItemBlock } from './../nav-item';

const TEMPLATE = [
    [
        'core/paragraph',
        {
            placeholder: __('Type / to add a block'),
        },
    ],
];

function edit({ attributes, setAttributes, clientId }) {
    const { isOpen, tabId, templateLock, allowedBlocks } = attributes;

    const blockProps = useBlockProps();

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        __experimentalCaptureToolbars: true,
        template: TEMPLATE,
        templateLock,
        allowedBlocks,
    });

    const { tabsNavClientId, tabsNavChildren } = useSelect((select) => {
        const { getBlock, getBlockRootClientId } = select(blockEditorStore);

        const panelsBlockClientId = getBlockRootClientId(clientId);
        const tabsBlockClientId = getBlockRootClientId(panelsBlockClientId);

        const tabsNavBlock = getBlock(tabsBlockClientId).innerBlocks.find(({ name }) => name === navBlock.name);

        return {
            tabsNavClientId: tabsNavBlock?.clientId,
            tabsNavChildren: tabsNavBlock?.innerBlocks,
        };
    }, [clientId]);

    const { insertBlock } = useDispatch(blockEditorStore);

    useEffect(() => {
        if (!tabId) {
            setAttributes({ tabId: clientId });

            const syblingBlock = createBlock(navItemBlock.name, {
                tabId: clientId,
                isOpen: true,
                metadata: {
                    name: `Tab ${tabsNavChildren.length + 1}`,
                },
            });

            insertBlock(syblingBlock, tabsNavChildren.length, tabsNavClientId);
        }

        const findOpen = tabsNavChildren.find(({ attributes: { isOpen, tabId: _tabId } }) => isOpen && _tabId === tabId);

        setAttributes({ isOpen: findOpen ? true : false });

    }, [tabId, clientId, insertBlock, tabsNavClientId, tabsNavChildren, setAttributes]);

    return (
        <div {...innerBlocksProps} hidden={!isOpen}>
            {innerBlocksProps.children}
        </div>
    );
}

export default edit;