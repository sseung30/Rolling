import styled from 'styled-components';

export const ChipWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  background: ${({ $backgroundType, $imageSrc, $color }) =>
    $backgroundType === 'image' ? `url(${$imageSrc}) center/cover` : $color};
  cursor: pointer;
`;
