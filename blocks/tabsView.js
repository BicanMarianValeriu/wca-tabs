import { store, getContext, getElement, getConfig } from '@wordpress/interactivity';

const { Events, Selector } = window.wecodeart || {};

if (typeof Events === 'undefined' || typeof Selector === 'undefined') {
    console.warn('WeCodeArt\'s Tabs require WeCodeArt\'s Events & Selector plugins.');
}

let tabsElementsCache = [];

const NAME = 'tabs';
const NAMESPACE = `wecodeart/${NAME}`;

store(NAMESPACE, {
    callbacks: {
        onTabChange() {
            const { ref } = getElement();
            const context = getContext();
            const { classNames } = getConfig('wecodeart/collapse');
            const elements = tabsElementsCache.filter(({ parent }) => parent === ref);

            context.isOpened = elements.find(({ context: { isOpen } }) => isOpen)?.content;

            // Hide other tabs on open current
            elements.forEach(({ content }) => Events.on(content, 'show.wp.collapse', ({ currentTarget: target }) => {
                context.isOpened = target;
                target.classList.add(classNames?.show);
                elements.filter(({ content, context: { isOpen } }) => isOpen && content !== target).map(({ toggle }) => toggle.click());
            }));

            // Prevent hide current tab if it is opened
            elements.forEach(({ content }) => Events.on(content, 'hide.wp.collapse', (e) => {
                if (e.target === content) {
                    if (context.isOpened === content) {
                        e.preventDefault();
                    }
                }
            }));
        },
        addElement() {
            const { ref } = getElement();

            tabsElementsCache = [...tabsElementsCache, {
                context: getContext('wecodeart/collapse'),
                parent: ref.closest('.wp-block-wecodeart-tabs'),
                toggle: ref,
                content: Selector.findOne(`#${ref.getAttribute('aria-controls')}`),
            }];
        }
    }
});