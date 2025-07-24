import styled from 'styled-components';
import ColorChip from './ColorChip';

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 720px;
  margin: 47px auto;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export default function ColorChipList({ chipData = [], selectedId, onSelect }) {
  return (
    <ListWrapper>
      {chipData.map((chip) => (
        <ColorChip
          key={chip.id}
          backgroundType={chip.backgroundType}
          value={chip.color}
          isSelected={chip.id === selectedId}
          onClick={() => onSelect(chip.id)}
        />
      ))}
    </ListWrapper>
  );
}
