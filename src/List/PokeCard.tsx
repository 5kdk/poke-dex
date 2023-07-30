import styled from '@emotion/styled';
import PokeNameChip from '../Common/PokeNameChip';
import PokeMarkChip from '../Common/PokeMarkChip';

const tempUrl =
  'https://upload.wikimedia.org/wikipedia/ko/a/a6/Pok%C3%A9mon_Pikachu_art.png';

const PokeCard = () => {
  return (
    <Item>
      <Header>
        <PokeNameChip />
      </Header>
      <Body>
        <Image src={tempUrl} alt="이상해씨 이미지" />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 250px;
  height: 300px;
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;

const Header = styled.section`
  display: flex;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  align-items: center;
  margin: 8px;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  margin: 8px 0;
`;

export default PokeCard;