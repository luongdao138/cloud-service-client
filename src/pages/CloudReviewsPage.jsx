import styled from 'styled-components';
import { CloudDetail, ReviewActions, ReviewList } from '../components';
import ReviewActionsProvider from '../context/ReviewActions';
import { Content } from '../shared';
import { Container } from './styles/CloudReviewsPage.styles';

const Main = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 25%);
  padding: 1rem;
  border-top: 3px solid #21b1ff;
  margin-top: 2rem;
`;

const CloudReviewsPage = () => {
  return (
    <ReviewActionsProvider>
      <Container>
        <Content>
          <CloudDetail />
          <Main>
            <ReviewActions />
            <ReviewList />
          </Main>
        </Content>
      </Container>
    </ReviewActionsProvider>
  );
};

export default CloudReviewsPage;
