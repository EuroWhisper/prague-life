import styled from 'styled-components';
import Image from 'next/image';

type HeaderImageWrapperProps = {
  height?: string;
};

const HeaderImageWrapper = styled.div<HeaderImageWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: ${(props) => props.height || '100vh'};
`;

type HeaderImageProps = {
  backgroundImage: StaticImageData;
  children?: React.ReactNode;
  height?: string;
};

export default function HeaderImage(props: HeaderImageProps) {
  return (
    <HeaderImageWrapper height={props.height}>
      {props.children}
      <Image
        objectFit="cover"
        layout="fill"
        src={props.backgroundImage}
        alt="Prague buildings"
        quality={80}
      />
    </HeaderImageWrapper>
  );
}
