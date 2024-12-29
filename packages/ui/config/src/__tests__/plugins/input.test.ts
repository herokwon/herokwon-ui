import { baseInput } from '../../plugins/input';

describe('baseInput', () => {
  it('should have correct styles for input elements', () => {
    expect(baseInput.input).toStrictEqual({
      'background-color': 'transparent',
    });
  });

  it('should have correct styles for autofill inputs elements', () => {
    expect(
      baseInput[
        'input:autofill, input:autofill:hover, input:autofill:focus, input:autofill:active'
      ],
    ).toStrictEqual({
      'box-shadow': '0 0 0 1000px white inset !important',
    });
    expect(
      baseInput[
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active'
      ],
    ).toStrictEqual({
      '-webkit-box-shadow': '0 0 0 1000px white inset !important',
      '-webkit-text-fill-color': 'black !important',
    });
  });

  it('should have correct styles for dark mode autofill inputs elements', () => {
    expect(
      baseInput[
        '.dark input:autofill, .dark input:autofill:hover, .dark input:autofill:focus, .dark input:autofill:active'
      ],
    ).toStrictEqual({
      'box-shadow': '0 0 0 1000px #121212 inset !important',
    });
    expect(
      baseInput[
        '.dark input:-webkit-autofill, .dark input:-webkit-autofill:hover, .dark input:-webkit-autofill:focus, .dark input:-webkit-autofill:active'
      ],
    ).toStrictEqual({
      '-webkit-box-shadow': '0 0 0 1000px #121212 inset !important',
      '-webkit-text-fill-color': 'white !important',
    });
  });

  it('should have correct styles for range type inputs elements', () => {
    expect(baseInput['input[type="range"]']).toStrictEqual({
      height: '4px',
      width: '100%',
      cursor: 'pointer',
      appearance: 'none',
      'border-radius': '9999px',
      outline: '2px solid transparent',
      'outline-offset': '2px',
    });
    expect(
      baseInput['input[type="range"]::-webkit-slider-runnable-track'],
    ).toStrictEqual({
      'margin-left': '-0.375rem',
      'margin-right': '-0.375rem',
    });
    expect(baseInput['input[type="range"]::-moz-range-track']).toStrictEqual({
      'margin-left': '-0.375rem',
      'margin-right': '-0.375rem',
    });
    expect(
      baseInput['input[type="range"]::-webkit-slider-thumb'],
    ).toStrictEqual({
      'aspect-ratio': '1 / 1',
      width: '0.75rem',
      '-webkit-appearance': 'none',
      'border-radius': '9999px',
    });
    expect(baseInput['input[type="range"]::-moz-range-thumb']).toStrictEqual({
      'aspect-ratio': '1 / 1',
      width: '0.75rem',
      '-webkit-appearance': 'none',
      'border-radius': '9999px',
    });
  });
});
