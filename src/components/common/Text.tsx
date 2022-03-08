import styled from 'styled-components';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
};
const Text = styled.span<Props>`
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${(props) => `${fontSizes[props.as]}px`};
  margin: 0;
`;

const fontSizes = {
  h1: 96,
  h2: 60,
  h3: 48,
  h4: 34,
  h5: 24,
  h6: 20,
  p: 16,
  span: 16,
};

export default Text;
