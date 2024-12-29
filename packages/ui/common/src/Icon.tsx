import type { IconBaseProps, IconType } from 'react-icons';

import type { ElementSize, OmitStrict } from './types';

type IconProps = OmitStrict<IconBaseProps, 'type'> & {
  type: IconType;
  size?: ElementSize;
};

const ICON_SIZE: { [key in ElementSize]: number } = {
  xs: 0.75,
  sm: 0.875,
  md: 1,
  lg: 1.25,
  xl: 1.5,
};

export default function Icon({ type, size = 'md', ...props }: IconProps) {
  const IconElement = type;

  return (
    <IconElement
      {...props}
      size={`${ICON_SIZE[size]}rem`}
      className={`aspect-square ${props.className ?? ''}`}
    />
  );
}
