import { Content } from '../../shared';
import { Container } from './HomePageDetail.styles';
import detail from '../../assets/detail.svg';
import { data } from './HomeDetailData';
import { Link } from 'react-router-dom';

const HomePageDetail = () => {
  return (
    <Container>
      <Content className='content'>
        <div className='top'>
          <img src={detail} alt='' />
          <h3 className='title'>We connect buyers and vendors with the most trusted content.</h3>
          <p className='desc'>
            We believe truth should drive every business decision. Our reviews empower buyers to
            make informed decisions, but they are also a goldmine for vendors who want to
            authentically engage prospects on TrustRadius and beyond. That is why we built our
            business on quality and trust, not selling leads or trading on brands. Whether you're a
            buyer or a vendor, you know we have your back
          </p>
        </div>
        <div className='bottom'>
          <h3 className='title'>Popular Categories</h3>
          <ul>
            {data.map((c, index) => {
              return (
                <li key={index}>
                  <Link to={c.link}>{c.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default HomePageDetail;
