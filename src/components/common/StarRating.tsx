type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<div>*</div>);
  }

  return <>{stars}</>;
};

export default StarRating;
