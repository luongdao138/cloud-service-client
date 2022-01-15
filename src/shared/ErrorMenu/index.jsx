import { Container } from './ErrorMenu.styles';
import { BsExclamationTriangle } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
// import { useToggle } from '../../hooks';

const ErrorMenu = ({ open, errors, setForceCloseError, title }) => {
  return open ? (
    <Container>
      <div className='errors-header'>
        <div className='left'>
          <BsExclamationTriangle />
          <span>{title}</span>
        </div>
        <MdClose onClick={() => setForceCloseError(true)} />
      </div>
      <div className='errors-main'>
        <ul>
          {errors?.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
      </div>
    </Container>
  ) : null;
};

export default ErrorMenu;
