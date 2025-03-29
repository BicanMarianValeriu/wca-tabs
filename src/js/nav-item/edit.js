/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
    blockEditor: {
        useBlockProps,
        useInnerBlocksProps,
    },
    data: {
        select,
        dispatch
    }
} = wp;

function edit({ attributes, setAttributes, clientId, name }) {
    
    const blockProps = useBlockProps({
        className: attributes.isOpen ? 'expanded' : 'collapsed',
    });
    const innerBlocksProps = useInnerBlocksProps(blockProps);
    const { getBlock, getBlockRootClientId } = select('core/block-editor');
    const { updateBlockAttributes } = dispatch('core/block-editor');
    
    const handleClick = () => {
        const navParentId = getBlockRootClientId(clientId);
        const tabsNavBlock = getBlock(navParentId);
        
        const tabsNavBlocks = tabsNavBlock.innerBlocks.filter(({ name: _name, clientId: _clientId }) => name === _name && clientId !== _clientId);
        
        tabsNavBlocks.forEach(({ clientId }) => updateBlockAttributes(clientId, { isOpen: false }));
        setAttributes({ isOpen: true });
    };

    return (
        <button {...innerBlocksProps} onClick={handleClick}>
            {attributes?.metadata?.name || __('Tab #', 'wecodeart')}
        </button>
    );
}

export default edit;