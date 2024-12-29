import { extendedHeight, extendedWidth } from '../../themes/size';

describe('extendedSizes', () => {
  it('should have size for 0px', () => {
    expect(extendedWidth[0]).toStrictEqual('0px');
    expect(extendedHeight[0]).toStrictEqual('0px');
  });

  it('should have size for 1000px', () => {
    expect(extendedWidth[1000]).toStrictEqual('1000px');
    expect(extendedHeight[1000]).toStrictEqual('1000px');
  });

  it('should have size for 2000px', () => {
    expect(extendedWidth[2000]).toStrictEqual('2000px');
    expect(extendedHeight[2000]).toStrictEqual('2000px');
  });
});
