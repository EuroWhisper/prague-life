import styled from 'styled-components';
import {
  border,
  layout,
  typography,
  space,
  color,
  position,
  BorderProps,
  TypographyProps,
  SpaceProps,
  ColorProps,
  PositionProps,
  LayoutProps,
} from 'styled-system';

const Box = styled.div<
  | BorderProps
  | LayoutProps
  | TypographyProps
  | SpaceProps
  | ColorProps
  | PositionProps
>`${border}; ${layout}; ${typography};  ${space}; ${color}; ${position};);`;

export default Box;
