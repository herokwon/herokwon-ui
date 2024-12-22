import { baseTable } from '../../plugins';

describe('baseTable', () => {
  it('should have correct styles for table', () => {
    expect(baseTable.table).toStrictEqual({
      width: '100%',
      'border-collapse': 'collapse',
    });
  });

  it('should have correct styles for table headers and cells', () => {
    expect(baseTable['table th, table td']).toStrictEqual({
      padding: '0.25rem 1rem',
      'border-bottom-width': '2px',
      'border-color': '#e2e8f0',
      '.dark &': {
        'border-color': '#1e293b',
      },
    });
  });

  it('should have correct styles for table headers', () => {
    expect(baseTable['table th']).toStrictEqual({
      'background-color': '#e2e8f0',
      '.dark &': {
        'background-color': '#1e293b',
      },
    });
  });
});
