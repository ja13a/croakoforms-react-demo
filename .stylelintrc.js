module.exports = {
  'extends': [
    'stylelint-config-recommended-scss'
  ],
  'plugins': [
    'stylelint-order',
  ],
  'rules': {
    'indentation': 2,
    'string-quotes': 'single',
    'color-no-invalid-hex': true,
    'max-empty-lines': 1,
    'color-hex-length': 'long',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'always',
    'declaration-no-important': true,
    'no-duplicate-selectors': true,
    'order/properties-order': sortingOrder,
  }
}

const sortingOrder = [
  'content',
  'quotes',

  // Box

  'position',
  'top',
  'right',
  'bottom',
  'left',
  'z-index',

  'box-sizing',

  'display',
  'visibility',

  'grid',
  'grid-after',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-before',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-columns',
  'grid-end',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-rows',
  'grid-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',

  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'order',

  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',

  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',

  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',

  'float',
  'clear',

  'overflow',
  'overflow-x',
  'overflow-y',

  'clip',
  'zoom',

  'columns',
  'column-gap',
  'column-fill',
  'column-rule',
  'column-span',
  'column-count',
  'column-width',

  'table-layout',
  'empty-cells',
  'caption-side',
  'border-spacing',
  'border-collapse',
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image',

  // Text

  'color',

  'font',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-style',
  'font-variant',
  'font-weight',

  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',

  'letter-spacing',
  'line-height',
  'list-style',
  'word-spacing',

  'text-align',
  'text-align-last',
  'text-decoration',
  'text-indent',
  'text-justify',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-rendering',
  'text-outline',
  'text-shadow',
  'text-transform',
  'text-wrap',
  'word-wrap',
  'word-break',

  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',

  'vertical-align',
  'white-space',
  'word-spacing',
  'hyphens',

  'src',

  // Border

  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-width',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',

  'border-style',
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style',

  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',

  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',

  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',

  'stroke-width',
  'stroke-linecap',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke',

  // Background

  'opacity',
  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-position',
  'background-size',
  'box-shadow',
  'fill',

  // Animation

  'transform',
  'transform-origin',
  'transform-style',
  'backface-visibility',
  'perspective',
  'perspective-origin',

  'transition',
  'transition-property',
  'transition-duration',
  'transition-timing-function',
  'transition-delay',

  'animation',
  'animation-name',
  'animation-duration',
  'animation-play-state',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',

  // Other

  'tab-size',
  'counter-reset',
  'counter-increment',
  'resize',
  'cursor',
  'pointer-events',
  'speak',
  'user-select',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left',
]