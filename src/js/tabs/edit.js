/**
 * WordPress dependencies
 */
const {
    i18n: { __ },
    blockEditor: {
        useBlockProps,
        useInnerBlocksProps,
        InspectorControls,
    },
    components: {
        PanelBody,
    }
} = wp;

import { default as panelsBlock } from './../panels';
import { default as navBlock } from './../nav';

const TEMPLATE = [
    [navBlock.name],
    [panelsBlock.name],
];

function edit({ attributes }) {
    const { templateLock } = attributes;

    const blockProps = useBlockProps();

    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        __experimentalCaptureToolbars: true,
        template: TEMPLATE,
        templateLock,
        allowedBlocks: [navBlock.name, panelsBlock.name],
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings')} initialOpen={false}>
                    <p style={{ marginBottom: 0 }}>Soon</p>
                </PanelBody>
            </InspectorControls>
            <div {...innerBlocksProps}>
                {innerBlocksProps.children}
            </div>
        </>
    );
}

export default edit;