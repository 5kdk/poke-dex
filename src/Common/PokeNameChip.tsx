import styled from '@emotion/styled';

interface PokeCardProps {
  name: string;
  id: number;
  color: string;
}

const PokeNameChip = (props: PokeCardProps) => {
  const renderNumber = (id: number) => {
    const digit = 3;
    return id.toString().padStart(digit, '0');
  };

  return (
    <Chip>
      <NumberChip color={props.color}>
        <Number>{renderNumber(props.id)}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`;

const NumberChip = styled.div<{ color: string }>`
  padding: 4px 6px;
  background-color: ${props => props.color};
  border-radius: 16px;
  opacity: 0.8;
`;

const Number = styled.label`
  opacity: 1;
`;

const Text = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;
