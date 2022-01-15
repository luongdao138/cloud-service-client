import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f7;
  padding: 2rem 0;

  .search {
    position: relative;
    margin-bottom: 2rem;
    input {
      border: 1px solid #c3c3ca;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      width: 100%;
      padding: 0.5rem 1rem 0.5rem 2.25rem;
      :focus {
        box-shadow: 0 0 4px #21b1ff;
        border-color: #21b1ff;
      }
    }
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0.5rem;
      font-size: 24px;
      color: #ccc;
    }
  }

  .sort-container {
    margin-bottom: 2rem;
    .label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .right {
      position: relative;
    }

    @media (min-width: 780px) {
      .label {
        margin-bottom: 0;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const SortMenu = styled.ul`
  transition: all 0.25s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
  top: 55px;
  border-radius: 8px;
  box-shadow: 0 0 4px #21b1ff;
  padding: 0.5rem 0;
  transform: ${(props) => (props.open ? 'translateY (0px)' : 'translateY(50px)')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`;

export const SortItem = styled.li`
  padding: 0.75rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.25s ease-in-out;
  background-color: ${(props) => props.active && 'rgba(0, 0, 0, 0.05)'};
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  padding: 0.75rem;
  border-radius: 4px;
  box-shadow: ${(props) => (props.open ? '0 0 4px #21b1ff' : '0 0 4px rgba(0,0,0,0.1)')};
  font-size: 1rem;
  svg {
    transform: ${(props) => (props.open ? 'translateY(2px) rotate(180deg)' : 'translateY(2px)')};
    transition: all 0.25s ease-in-out;
  }

  @media (min-width: 780px) {
    min-width: 350px;
  }
`;
