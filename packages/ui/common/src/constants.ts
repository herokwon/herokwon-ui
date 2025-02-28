export const ELEMENT_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const ELEMENT_SPACINGS = [0, 2, 4, 6, 8, 10, 12, 16, 20] as const;
export const ELEMENT_STATUS = [
  'isDisabled',
  'isSelected',
  'isLoading',
] as const;
export const ELEMENT_TYPES: (keyof React.JSX.IntrinsicElements)[] = [
  // starts_with_a
  'a',
  'abbr',
  'address',
  'animate',
  'animateMotion',
  'animateTransform',
  'area',
  'article',
  'aside',
  'audio',

  // starts_with_b
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',

  // starts_with_c

  'canvas',
  'caption',
  'cite',
  'circle',
  'clipPath',
  'code',
  'col',
  'colgroup',

  // starts_with_d
  'data',
  'datalist',
  'dd',
  'defs',
  'del',
  'desc',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',

  // starts_with_e
  'ellipse',
  'em',
  'embed',

  // starts_with_f
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'fieldset',
  'figcaption',
  'figure',
  'filter',
  'footer',
  'foreignObject',
  'form',

  // starts_with_g
  'g',

  // starts_with_h
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',

  // starts_with_i
  'i',
  'iframe',
  'image',
  'img',
  'input',
  'ins',

  // starts_with_k
  'kbd',
  'keygen',

  // starts_with_l
  'label',
  'legend',
  'li',
  'line',
  'linearGradient',
  'link',

  // starts_with_m
  'main',
  'map',
  'mark',
  'mask',
  'menu',
  'menuitem',
  'meta',
  'metadata',
  'meter',
  'mpath',

  // starts_with_n
  'nav',
  'noindex',
  'noscript',

  // starts_with_o
  'object',
  'ol',
  'optgroup',
  'option',
  'output',

  // starts_with_p
  'p',
  'param',
  'path',
  'pattern',
  'picture',
  'polygon',
  'polyline',
  'pre',
  'progress',

  // starts_with_q
  'q',

  // starts_with_r
  'radialGradient',
  'rect',
  'rp',
  'rt',
  'ruby',

  // starts_with_s
  's',
  'samp',
  'script',
  'section',
  'select',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'svg',
  'switch',
  'symbol',

  // starts_with_t
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'tspan',

  // starts_with_u
  'u',
  'ul',
  'use',

  // starts_with_v
  'var',
  'video',
  'view',

  // starts_with_w
  'wbr',
  'webview',
] as const;
