import styled from 'styled-components';

type Props = {
  padding?: string;
};

const Card = styled.div<Props>`
  border-radius: 0.5rem;
  padding: ${(props) => props.padding || '1rem'};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

export default Card;
