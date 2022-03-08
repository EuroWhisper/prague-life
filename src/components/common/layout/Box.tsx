import styled from 'styled-components';
import {
  border,
  layout,
  flexbox,
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
  FlexboxProps,
} from 'styled-system';

const Box = styled.div<
  | BorderProps
  | LayoutProps
  | TypographyProps
  | SpaceProps
  | ColorProps
  | PositionProps
  | FlexboxProps
>`${border}; ${layout}; ${flexbox}; ${typography};  ${space}; ${color}; ${position};);`;

export default Box;
