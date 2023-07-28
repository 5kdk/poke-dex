import styled from '@emotion/styled';
import PokeCard from './PokeCard';

const PokeCardList = () => {
  return (
    <List>
      {Array.from({ length: 10 }, (_, index) => (
        <PokeCard />
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export default PokeCardList;
