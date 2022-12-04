import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const FeedbackItem = styled.li``;

export const FeedbackButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 9px 5px rgba(0, 0, 0, 0);

  :hover {
    transform: scale(1.2);
    color: #ffffff;
    background-color: ${prop => {
      if (prop.children === 'Good') {
        return '#04bb00';
      } else if (prop.children === 'Neutral') {
        return '#4d7cfa';
      } else if (prop.children === 'Bad') {
        return '#fa4d4d';
      }
    }};
  }
`;
