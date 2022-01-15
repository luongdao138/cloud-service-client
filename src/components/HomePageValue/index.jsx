import { Container } from './HomePageValue.styles';
import { Content } from '../../shared';
import value1 from '../../assets/values/value-1.svg';
import value2 from '../../assets/values/value-2.svg';
import value3 from '../../assets/values/value-3.svg';

const values = [
  {
    id: 1,
    image: value1,
    title: 'Truth At Scale',
    desc: 'We make it easy to get your customers on the record.',
  },
  {
    id: 2,
    image: value2,
    title: 'One easy Platform',
    desc: 'All the tools you need to tag, filter, and share your reviews.',
  },
  {
    id: 3,
    image: value3,
    title: 'Full Funnel Impact',
    desc: 'Use reviews to convert more buyers, close deals faster, and reduce churn.',
  },
];

const HomePageValue = () => {
  return (
    <Container>
      <Content className='content'>
        <div className='header'>
          <span>We also help tech vendors</span>
          <strong>Sell Authentically</strong>
        </div>
        <div className='main'>
          {values.map((value) => (
            <div className='item' key={value.id}>
              <img src={value.image} alt='' />
              <div className='info'>
                <h3 className='title'>{value.title}</h3>
                <p className='desc'>{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='bottom'>
          <p className='desc footer'>Buyers want to hear from peers they can trust</p>
          <button className='started-btn'>Get Started Today</button>
        </div>
      </Content>
    </Container>
  );
};

export default HomePageValue;
