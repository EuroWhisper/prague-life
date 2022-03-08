import Icon from '@mdi/react';
import { mdiStar, mdiStarHalfFull } from '@mdi/js';
import Text from '../common/Text';
import Box from './layout/Box';
import { uniqueId } from 'lodash';
import { useTheme } from 'styled-components';

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  const theme = useTheme();

  let stars = [];
  const shouldAppendHalfStar = rating % 1 !== 0;

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(
      <Icon
        key={uniqueId()}
        path={mdiStar}
        title="star"
        size={1}
        color={theme.colors.ratingStar}
      />
    );
  }
  if (shouldAppendHalfStar) {
    stars.push(
      <Icon
        key={uniqueId()}
        path={mdiStarHalfFull}
        title="half star"
        size={1}
        color={theme.colors.ratingStar}
      />
    );
  }

  return (
    <Box display="flex" alignItems="center">
      {stars}
      <Text as="span">{`(${rating})`}</Text>
    </Box>
  );
};

export default StarRating;
