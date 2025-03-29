/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./inc/support/modules/tabs/src/js/nav-item/edit.js":
/*!**********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/nav-item/edit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  blockEditor: {
    useBlockProps,
    useInnerBlocksProps
  },
  data: {
    select,
    dispatch
  }
} = wp;
function edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const blockProps = useBlockProps({
    className: attributes.isOpen ? 'expanded' : 'collapsed'
  });
  const innerBlocksProps = useInnerBlocksProps(blockProps);
  const {
    getBlock,
    getBlockRootClientId
  } = select('core/block-editor');
  const {
    updateBlockAttributes
  } = dispatch('core/block-editor');
  const handleClick = () => {
    const navParentId = getBlockRootClientId(clientId);
    const tabsNavBlock = getBlock(navParentId);
    const tabsNavBlocks = tabsNavBlock.innerBlocks.filter(({
      name: _name,
      clientId: _clientId
    }) => name === _name && clientId !== _clientId);
    tabsNavBlocks.forEach(({
      clientId
    }) => updateBlockAttributes(clientId, {
      isOpen: false
    }));
    setAttributes({
      isOpen: true
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
    ...innerBlocksProps,
    onClick: handleClick,
    children: attributes?.metadata?.name || __('Tab #', 'wecodeart')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/nav-item/index.js":
/*!***********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/nav-item/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_tabs_nav_item_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../blocks/tabs-nav-item-block.json */ "./inc/support/modules/tabs/blocks/tabs-nav-item-block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./inc/support/modules/tabs/src/js/nav-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./inc/support/modules/tabs/src/js/nav-item/save.js");
/**
 * Internal dependencies
 */



const {
  name
} = _blocks_tabs_nav_item_block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  metadata: _blocks_tabs_nav_item_block_json__WEBPACK_IMPORTED_MODULE_0__,
  settings
});

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/nav-item/save.js":
/*!**********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/nav-item/save.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;
function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {});
}

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/nav/edit.js":
/*!*****************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/nav/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../panel */ "./inc/support/modules/tabs/src/js/panel/index.js");
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../panels */ "./inc/support/modules/tabs/src/js/panels/index.js");
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../nav-item */ "./inc/support/modules/tabs/src/js/nav-item/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */
const {
  blockEditor: {
    useBlockProps,
    useInnerBlocksProps,
    store: blockEditorStore
  },
  data: {
    useSelect,
    useDispatch
  },
  element: {
    useEffect
  }
} = wp;




const TEMPLATE = [];
function edit({
  clientId
}) {
  const blockProps = useBlockProps();
  const {
    removeBlock
  } = useDispatch(blockEditorStore);
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    __experimentalCaptureToolbars: true,
    template: TEMPLATE,
    templateLock: false,
    allowedBlocks: [_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"].name, 'core/button']
  });
  const {
    tabIds,
    navBlocks
  } = useSelect(select => {
    const {
      getBlock,
      getBlockRootClientId
    } = select(blockEditorStore);
    const parentId = getBlockRootClientId(clientId);
    const parentBlock = getBlock(parentId);
    if (!parentBlock) {
      return {
        tabIds: [],
        navBlocks: []
      };
    }
    const panelsBlocks = parentBlock.innerBlocks.find(({
      name
    }) => name === _panels__WEBPACK_IMPORTED_MODULE_1__["default"].name);
    const tabIds = panelsBlocks?.innerBlocks.filter(({
      name
    }) => name === _panel__WEBPACK_IMPORTED_MODULE_0__["default"].name).map(b => b.attributes.tabId) || [];
    const currentBlock = getBlock(clientId);
    const navBlocks = currentBlock?.innerBlocks.filter(({
      name
    }) => name === _nav_item__WEBPACK_IMPORTED_MODULE_2__["default"].name) || [];
    return {
      tabIds,
      navBlocks
    };
  }, [clientId]);
  useEffect(() => {
    const navBlocksToRemove = navBlocks.filter(({
      attributes: {
        tabId
      }
    }) => tabId && !tabIds.includes(tabId));
    navBlocksToRemove.forEach(({
      clientId
    }) => removeBlock(clientId));
  }, [tabIds, navBlocks, removeBlock]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ...innerBlocksProps,
    children: innerBlocksProps.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/nav/index.js":
/*!******************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/nav/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_tabs_nav_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../blocks/tabs-nav-block.json */ "./inc/support/modules/tabs/blocks/tabs-nav-block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./inc/support/modules/tabs/src/js/nav/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./inc/support/modules/tabs/src/js/nav/save.js");
/**
 * Internal dependencies
 */



const {
  name
} = _blocks_tabs_nav_block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  metadata: _blocks_tabs_nav_block_json__WEBPACK_IMPORTED_MODULE_0__,
  settings
});

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/nav/save.js":
/*!*****************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/nav/save.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;
function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {});
}

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/panel/edit.js":
/*!*******************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/panel/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../nav */ "./inc/support/modules/tabs/src/js/nav/index.js");
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nav-item */ "./inc/support/modules/tabs/src/js/nav-item/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  blocks: {
    createBlock
  },
  blockEditor: {
    useBlockProps,
    useInnerBlocksProps,
    store: blockEditorStore
  },
  data: {
    useSelect,
    useDispatch
  },
  element: {
    useEffect
  }
} = wp;



const TEMPLATE = [['core/paragraph', {
  placeholder: __('Type / to add a block')
}]];
function edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    isOpen,
    tabId,
    templateLock,
    allowedBlocks
  } = attributes;
  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    __experimentalCaptureToolbars: true,
    template: TEMPLATE,
    templateLock,
    allowedBlocks
  });
  const {
    tabsNavClientId,
    tabsNavChildren
  } = useSelect(select => {
    const {
      getBlock,
      getBlockRootClientId
    } = select(blockEditorStore);
    const panelsBlockClientId = getBlockRootClientId(clientId);
    const tabsBlockClientId = getBlockRootClientId(panelsBlockClientId);
    const tabsNavBlock = getBlock(tabsBlockClientId).innerBlocks.find(({
      name
    }) => name === _nav__WEBPACK_IMPORTED_MODULE_0__["default"].name);
    return {
      tabsNavClientId: tabsNavBlock?.clientId,
      tabsNavChildren: tabsNavBlock?.innerBlocks
    };
  }, [clientId]);
  const {
    insertBlock
  } = useDispatch(blockEditorStore);
  useEffect(() => {
    if (!tabId) {
      setAttributes({
        tabId: clientId
      });
      const syblingBlock = createBlock(_nav_item__WEBPACK_IMPORTED_MODULE_1__["default"].name, {
        tabId: clientId,
        isOpen: true,
        metadata: {
          name: `Tab ${tabsNavChildren.length + 1}`
        }
      });
      insertBlock(syblingBlock, tabsNavChildren.length, tabsNavClientId);
    }
    const findOpen = tabsNavChildren.find(({
      attributes: {
        isOpen,
        tabId: _tabId
      }
    }) => isOpen && _tabId === tabId);
    setAttributes({
      isOpen: findOpen ? true : false
    });
  }, [tabId, clientId, insertBlock, tabsNavClientId, tabsNavChildren, setAttributes]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...innerBlocksProps,
    hidden: !isOpen,
    children: innerBlocksProps.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/panel/index.js":
/*!********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/panel/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_tabs_panel_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../blocks/tabs-panel-block.json */ "./inc/support/modules/tabs/blocks/tabs-panel-block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./inc/support/modules/tabs/src/js/panel/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./inc/support/modules/tabs/src/js/panel/save.js");
/**
 * Internal dependencies
 */



const {
  name
} = _blocks_tabs_panel_block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  metadata: _blocks_tabs_panel_block_json__WEBPACK_IMPORTED_MODULE_0__,
  settings
});

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/panel/save.js":
/*!*******************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/panel/save.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;
function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {});
}

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/panels/edit.js":
/*!********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/panels/edit.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../panel */ "./inc/support/modules/tabs/src/js/panel/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nav */ "./inc/support/modules/tabs/src/js/nav/index.js");
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../nav-item */ "./inc/support/modules/tabs/src/js/nav-item/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */
const {
  blockEditor: {
    useBlockProps,
    useInnerBlocksProps,
    store: blockEditorStore
  },
  data: {
    useSelect,
    useDispatch
  },
  element: {
    useEffect
  }
} = wp;




const TEMPLATE = [[_panel__WEBPACK_IMPORTED_MODULE_0__["default"].name]];
function edit({
  clientId
}) {
  const blockProps = useBlockProps();
  const {
    removeBlock
  } = useDispatch(blockEditorStore);
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    __experimentalCaptureToolbars: true,
    template: TEMPLATE,
    templateLock: false,
    allowedBlocks: [_panel__WEBPACK_IMPORTED_MODULE_0__["default"].name]
  });
  const {
    tabIds,
    panelBlocks
  } = useSelect(select => {
    const {
      getBlock,
      getBlockRootClientId
    } = select(blockEditorStore);
    const parentId = getBlockRootClientId(clientId);
    const parentBlock = getBlock(parentId);
    if (!parentBlock) {
      return {
        tabIds: [],
        panelBlocks: []
      };
    }
    const navBlocks = parentBlock.innerBlocks.find(({
      name
    }) => name === _nav__WEBPACK_IMPORTED_MODULE_1__["default"].name);
    const tabIds = navBlocks?.innerBlocks?.filter(({
      name
    }) => name === _nav_item__WEBPACK_IMPORTED_MODULE_2__["default"].name).map(b => b.attributes.tabId) || [];
    const currentBlock = getBlock(clientId);
    const panelBlocks = currentBlock?.innerBlocks?.filter(({
      name
    }) => name === _panel__WEBPACK_IMPORTED_MODULE_0__["default"].name) || [];
    return {
      tabIds,
      panelBlocks
    };
  }, [clientId]);
  useEffect(() => {
    const panelsToRemove = panelBlocks.filter(({
      attributes: {
        tabId
      }
    }) => tabId && !tabIds.includes(tabId));
    panelsToRemove.forEach(({
      clientId
    }) => removeBlock(clientId));
  }, [tabIds, panelBlocks, removeBlock]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ...innerBlocksProps,
    children: innerBlocksProps.children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/panels/index.js":
/*!*********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/panels/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_tabs_panels_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../blocks/tabs-panels-block.json */ "./inc/support/modules/tabs/blocks/tabs-panels-block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./inc/support/modules/tabs/src/js/panels/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./inc/support/modules/tabs/src/js/panels/save.js");
/**
 * Internal dependencies
 */



const {
  name
} = _blocks_tabs_panels_block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  metadata: _blocks_tabs_panels_block_json__WEBPACK_IMPORTED_MODULE_0__,
  settings
});

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/panels/save.js":
/*!********************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/panels/save.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;
function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {});
}

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/tabs/edit.js":
/*!******************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/tabs/edit.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../panels */ "./inc/support/modules/tabs/src/js/panels/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nav */ "./inc/support/modules/tabs/src/js/nav/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */
const {
  i18n: {
    __
  },
  blockEditor: {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
  },
  components: {
    PanelBody
  }
} = wp;



const TEMPLATE = [[_nav__WEBPACK_IMPORTED_MODULE_1__["default"].name], [_panels__WEBPACK_IMPORTED_MODULE_0__["default"].name]];
function edit({
  attributes
}) {
  const {
    templateLock
  } = attributes;
  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    __experimentalCaptureToolbars: true,
    template: TEMPLATE,
    templateLock,
    allowedBlocks: [_nav__WEBPACK_IMPORTED_MODULE_1__["default"].name, _panels__WEBPACK_IMPORTED_MODULE_0__["default"].name]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PanelBody, {
        title: __('Settings'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            marginBottom: 0
          },
          children: "Soon"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ...innerBlocksProps,
      children: innerBlocksProps.children
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/tabs/index.js":
/*!*******************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/tabs/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _blocks_tabs_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../blocks/tabs-block.json */ "./inc/support/modules/tabs/blocks/tabs-block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./inc/support/modules/tabs/src/js/tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./inc/support/modules/tabs/src/js/tabs/save.js");
/**
 * Internal dependencies
 */



const {
  name
} = _blocks_tabs_block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name,
  metadata: _blocks_tabs_block_json__WEBPACK_IMPORTED_MODULE_0__,
  settings
});

/***/ }),

/***/ "./inc/support/modules/tabs/src/js/tabs/save.js":
/*!******************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/tabs/save.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;
function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InnerBlocks.Content, {});
}

/***/ }),

/***/ "./inc/support/modules/tabs/src/scss/index.scss":
/*!******************************************************!*\
  !*** ./inc/support/modules/tabs/src/scss/index.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "./inc/support/modules/tabs/blocks/tabs-block.json":
/*!*********************************************************!*\
  !*** ./inc/support/modules/tabs/blocks/tabs-block.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wecodeart/tabs","title":"Tabs","category":"wca","description":"Hide and show additional content.","keywords":["tabs","summary","toggle","disclosure"],"icon":"welcome-widgets-menus","textdomain":"default","allowedBlocks":["wecodeart/tabs-nav","wecodeart/tabs-panels"],"attributes":{"templateLock":{"default":"insert","type":["string","boolean"],"enum":["all","insert","contentOnly",false]}},"render":"file:./render-tabs.php","supports":{"anchor":true,"ariaLabel":true,"html":false,"align":["wide","full"],"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalBorder":{"color":true,"width":true,"radius":true,"style":true},"layout":{"allowCustomContentAndWideSize":false,"allowSizingOnChildren":false,"allowInheriting":false,"allowSwitching":false,"allowOrientation":true,"allowJustification":true,"allowVerticalAlignment":true,"default":{"type":"flex","orientation":"vertical","justifyContent":"stretch"}},"spacing":{"margin":true,"padding":true,"blockGap":true,"__experimentalDefaultControls":{"margin":false,"padding":false}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"interactivity":true,"__experimentalStyles":true,"__experimentalSettings":true},"styles":[{"name":"mobile-vertical","label":"Mobile Vertical"}],"editorScript":["wp-block-wecodeart-tabs"],"viewStyle":["wp-block-wecodeart-tabs"],"viewScriptModule":"file:./tabsView.js"}');

/***/ }),

/***/ "./inc/support/modules/tabs/blocks/tabs-nav-block.json":
/*!*************************************************************!*\
  !*** ./inc/support/modules/tabs/blocks/tabs-nav-block.json ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wecodeart/tabs-nav","title":"Tabs: Navigation","parent":["wecodeart/tabs"],"category":"wca","description":"Holds tabs navigation.","keywords":["tabs","summary","toggle","disclosure"],"icon":"button","textdomain":"default","attributes":{},"render":"file:./render-nav.php","supports":{"anchor":true,"ariaLabel":true,"html":false,"align":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalBorder":{"color":true,"width":true,"radius":true,"style":true},"layout":{"allowCustomContentAndWideSize":false,"allowSizingOnChildren":false,"allowInheriting":false,"allowSwitching":false,"allowOrientation":true,"allowJustification":true,"allowVerticalAlignment":true,"default":{"type":"flex","orientation":"horizontal","flexWrap":"nowrap"}},"shadow":true,"spacing":{"margin":true,"padding":true,"blockGap":true,"__experimentalDefaultControls":{"margin":false,"padding":false,"blockGap":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalStyles":true,"__experimentalSettings":true}}');

/***/ }),

/***/ "./inc/support/modules/tabs/blocks/tabs-nav-item-block.json":
/*!******************************************************************!*\
  !*** ./inc/support/modules/tabs/blocks/tabs-nav-item-block.json ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wecodeart/tabs-nav-item","title":"Tabs: Navigation Item","parent":["wecodeart/tabs-nav"],"category":"wca","description":"A single tabs navigation item.","keywords":["tabs","summary","toggle","disclosure"],"icon":"button","textdomain":"default","attributes":{"tabId":{"type":"string","default":""},"isOpen":{"type":"boolean","default":false}},"render":"file:./render-nav-item.php","supports":{"html":false,"inserter":false,"reusable":false,"remove":false,"anchor":true,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalBorder":{"color":true,"width":true,"radius":true,"style":true},"spacing":{"margin":true,"padding":true,"blockGap":false,"__experimentalDefaultControls":{"margin":false,"padding":false,"blockGap":false}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalStyles":true,"__experimentalSettings":true}}');

/***/ }),

/***/ "./inc/support/modules/tabs/blocks/tabs-panel-block.json":
/*!***************************************************************!*\
  !*** ./inc/support/modules/tabs/blocks/tabs-panel-block.json ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wecodeart/tabs-panel","title":"Tabs: Panel","parent":["wecodeart/tabs-panels"],"category":"wca","description":"A single tab panel.","keywords":["tabs","summary","toggle","disclosure"],"icon":"welcome-write-blog","textdomain":"default","attributes":{"isOpen":{"type":"boolean","default":false},"tabId":{"type":"string","default":""},"templateLock":{"type":["string","boolean"],"enum":["all","insert","contentOnly",false]},"allowedBlocks":{"type":"array"}},"render":"file:./render-panel.php","supports":{"anchor":true,"ariaLabel":true,"html":false,"align":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalBorder":{"color":true,"width":true,"radius":true,"style":true},"layout":{"allowCustomContentAndWideSize":true,"allowSizingOnChildren":false,"allowInheriting":false,"allowSwitching":true,"allowOrientation":true,"allowJustification":true,"allowVerticalAlignment":true},"spacing":{"margin":false,"padding":true,"blockGap":true,"__experimentalDefaultControls":{"margin":true,"padding":false,"blockGap":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalStyles":true,"__experimentalSettings":true}}');

/***/ }),

/***/ "./inc/support/modules/tabs/blocks/tabs-panels-block.json":
/*!****************************************************************!*\
  !*** ./inc/support/modules/tabs/blocks/tabs-panels-block.json ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wecodeart/tabs-panels","title":"Tabs: Panels","parent":["wecodeart/tabs"],"category":"wca","description":"Holds tabs panels.","keywords":["tabs","summary","toggle","disclosure"],"icon":"admin-page","textdomain":"default","attributes":{},"render":"file:./render-panels.php","supports":{"anchor":true,"ariaLabel":true,"html":false,"align":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalBorder":{"color":true,"width":true,"radius":true,"style":true},"shadow":true,"spacing":{"margin":true,"padding":true,"blockGap":false,"__experimentalDefaultControls":{"margin":false,"padding":true,"blockGap":false}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalStyles":true,"__experimentalSettings":true}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./inc/support/modules/tabs/src/js/index.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./inc/support/modules/tabs/src/js/tabs/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./inc/support/modules/tabs/src/js/nav/index.js");
/* harmony import */ var _nav_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-item */ "./inc/support/modules/tabs/src/js/nav-item/index.js");
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panels */ "./inc/support/modules/tabs/src/js/panels/index.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel */ "./inc/support/modules/tabs/src/js/panel/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../scss/index.scss */ "./inc/support/modules/tabs/src/scss/index.scss");
const {
  blocks: {
    registerBlockType
  },
  domReady
} = wp;

/**
 * Internal dependencies
 */






function initBlock(block) {
  const {
    metadata,
    settings,
    name
  } = block;
  return registerBlockType({
    name,
    ...metadata
  }, settings);
}
const init = () => {
  initBlock(_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);
  initBlock(_nav__WEBPACK_IMPORTED_MODULE_1__["default"]);
  initBlock(_nav_item__WEBPACK_IMPORTED_MODULE_2__["default"]);
  initBlock(_panels__WEBPACK_IMPORTED_MODULE_3__["default"]);
  initBlock(_panel__WEBPACK_IMPORTED_MODULE_4__["default"]);
};
domReady(() => init());
})();

/******/ })()
;
//# sourceMappingURL=index.js.map