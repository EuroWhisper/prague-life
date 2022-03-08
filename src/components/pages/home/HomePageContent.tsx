import { Business } from '../../../generated/graphql';
import Container from '../../common/layout/Container';
import Grid from '../../common/layout/Grid';
import BusinessCard from '../../common/BusinessCard';

type Props = {
  newBusinesses: Business[];
};

export default function HomePageContent(props: Props) {
  return (
    <Container>
      <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
        {props.newBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </Grid>
    </Container>
  );
}
