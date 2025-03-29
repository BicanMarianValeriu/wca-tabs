/**
 * Internal dependencies
 */
import metadata from './../../../blocks/tabs-panel-block.json';
import edit from './edit';
import save from './save';

const { name } = metadata;

export const settings = {
    save,
    edit,
};

export default { name, metadata, settings };