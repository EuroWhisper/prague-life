import Image from 'next/image';
import { Business } from '../../generated/graphql';
import Box from './layout/Box';
import StarRating from './StarRating';
import Card from './surfaces/Card';
import Text from './Text';

type Props = {
  business: Business;
};

const BusinessCard = ({ business }: Props) => {
  return (
    <Card padding="0px">
      {business.photos && business.photos.length > 0 && (
        <Box
          borderRadius={'8px 8px 0 0'}
          position="relative"
          height="12rem"
          overflow="hidden"
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="Restaurant"
            src={business.photos[0] ?? ''}
          />
        </Box>
      )}
      <Box p={2}>
        {<Text as="h6">{business.name}</Text>}
        {business.rating && (
          <Box>
            <StarRating rating={business.rating} />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default BusinessCard;
