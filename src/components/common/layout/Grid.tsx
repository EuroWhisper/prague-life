import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';

export default styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  ${grid};
`;
