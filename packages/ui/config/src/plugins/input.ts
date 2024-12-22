export const baseInput = {
  input: {
    'background-color': 'transparent',
  },
  'input:autofill, input:autofill:hover, input:autofill:focus, input:autofill:active':
    {
      'box-shadow': '0 0 0 1000px white inset !important',
    },
  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
    {
      '-webkit-box-shadow': '0 0 0 1000px white inset !important',
      '-webkit-text-fill-color': 'black !important',
    },
  '.dark input:autofill, .dark input:autofill:hover, .dark input:autofill:focus, .dark input:autofill:active':
    {
      'box-shadow': '0 0 0 1000px #121212 inset !important',
    },
  '.dark input:-webkit-autofill, .dark input:-webkit-autofill:hover, .dark input:-webkit-autofill:focus, .dark input:-webkit-autofill:active':
    {
      '-webkit-box-shadow': '0 0 0 1000px #121212 inset !important',
      '-webkit-text-fill-color': 'white !important',
    },
  'input[type="range"]': {
    height: '4px',
    width: '100%',
    cursor: 'pointer',
    appearance: 'none',
    'border-radius': '9999px',
    outline: '2px solid transparent',
    'outline-offset': '2px',
  },
  'input[type="range"]::-webkit-slider-runnable-track': {
    'margin-left': '-0.375rem',
    'margin-right': '-0.375rem',
  },
  'input[type="range"]::-moz-range-track': {
    'margin-left': '-0.375rem',
    'margin-right': '-0.375rem',
  },
  'input[type="range"]::-webkit-slider-thumb': {
    'aspect-ratio': '1 / 1',
    width: '0.75rem',
    '-webkit-appearance': 'none',
    'border-radius': '9999px',
  },
  'input[type="range"]::-moz-range-thumb': {
    'aspect-ratio': '1 / 1',
    width: '0.75rem',
    '-webkit-appearance': 'none',
    'border-radius': '9999px',
  },
};
