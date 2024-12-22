import { extendedOpacity } from '../../themes';

describe('extendedOpacity', () => {
  it('should have bold opacity value', () => {
    expect(extendedOpacity.bold).toStrictEqual('0.87');
  });

  it('should have normal opacity value', () => {
    expect(extendedOpacity.normal).toStrictEqual('0.6');
  });

  it('should have off opacity value', () => {
    expect(extendedOpacity.off).toStrictEqual('0.38');
  });
});
