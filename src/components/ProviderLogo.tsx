
import { useState } from "react";
import styled from "styled-components";

interface ProviderLogoProps {
  name: string;
  delay: number;
}

const Container = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeUp 0.5s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LogoCircle = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Initial = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
`;

const LogoName = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
`;

const ProviderLogo = ({ name, delay }: ProviderLogoProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container delay={delay}>
      <LogoCircle>
        <Initial>{name.charAt(0)}</Initial>
      </LogoCircle>
      <LogoName>{name}</LogoName>
    </Container>
  );
};

export default ProviderLogo;
