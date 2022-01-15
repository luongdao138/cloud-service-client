import React from 'react';
import { Container, Item } from './RatingDistribution.styles';

const RatingDistribution = ({ rating_distribution, big }) => {
  return (
    <Container>
      {rating_distribution
        .sort((a, b) => Number(b.name) - Number(a.name))
        .map((r) => (
          <Item big={big} key={r.name} percent={r.percent}>
            <span>{r.name} Star</span>
            <div className='progress'></div>
            <span>{r.percent}%</span>
          </Item>
        ))}
    </Container>
  );
};

export default RatingDistribution;
