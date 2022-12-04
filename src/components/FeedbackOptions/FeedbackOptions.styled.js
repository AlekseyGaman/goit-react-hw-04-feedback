import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const FeedbackButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
  border: none;
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 9px 5px rgba(0, 0, 0, 0);
  &:hover {
    transform: scale(1.2);
    background-color: ${prop => {
      switch (prop.name) {
        case 'good':
          return '#82fa4d';
        case 'neutral':
          return '#4d7cfa';
        case 'bad':
          return '#fa4d4d ';
      }
    }};
  }
`;
