import { baseCode } from '../../plugins/code';

describe('baseCode', () => {
  it('should have correct styles for code and pre elements', () => {
    expect(
      baseCode['pre[class*="language-"], code[class*="language-"]'],
    ).toStrictEqual({
      'text-shadow': '0 1px rgba(0, 0, 0, 0.3)',
      'text-align': 'left',
      'font-size': '1rem',
      'line-height': '1.5',
      'font-family':
        'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      'white-space': 'pre',
      'word-spacing': 'normal',
      'word-break': 'normal',
      'word-wrap': 'normal',
      color: '#f8f8f2',
      'background-image': 'none',
      '-moz-tab-size': '4',
      '-o-tab-size': '4',
      'tab-size': '4',
      '-webkit-hyphens': 'none',
      '-moz-hyphens': 'none',
      '-ms-hyphens': 'none',
      hyphens: 'none',
    });
  });

  it('should have correct styles for pre elements', () => {
    expect(baseCode['pre[class*="language-"]']).toStrictEqual({
      padding: '0',
      margin: '0',
    });
  });

  it('should have correct styles for code elements', () => {
    expect(baseCode['code[class*="language-"]']).toStrictEqual({
      width: '100%',
      padding: '0.5rem 1rem',
      'box-sizing': 'content-box',
      'background-color': '#1e293b',
    });
  });
});
