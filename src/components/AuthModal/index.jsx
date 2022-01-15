import { useRef } from 'react';
import { useClickOutside } from '../../hooks';
import { ModalContainer } from '../../shared';
import { Content, Wrapper } from './AuthModal.styles';
import { MdClose } from 'react-icons/md';
import { actions, useAuthContext } from '../../context/AuthContext';
import Authentication from '../Authentication';

const AuthModal = ({ open }) => {
  const { dispatch } = useAuthContext();
  const contentRef = useRef();
  const modalRef = useRef();

  const onClose = () => {
    dispatch({
      type: actions.TOGGLE_MODE,
      payload: 'linkedin',
    });
    dispatch({
      type: actions.TOGGLE_MODAL,
      payload: false,
    });
    dispatch({
      type: actions.TOGGLE_TYPE,
      payload: 'login',
    });
  };

  useClickOutside(
    contentRef,
    () => {
      onClose();
    },
    modalRef
  );

  return (
    <ModalContainer ref={modalRef} open={open}>
      <Wrapper>
        <Content open={open} ref={contentRef}>
          <MdClose className='close-icon' onClick={onClose} />
          <Authentication />
        </Content>
      </Wrapper>
    </ModalContainer>
  );
};

export default AuthModal;
