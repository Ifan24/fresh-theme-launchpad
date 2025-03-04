
import { ReactNode } from "react";
import styled from "styled-components";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  opacity: 1;
  animation: fadeUp 0.5s ease-out forwards;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
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

const NumberBadge = styled.div`
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ContentWrapper = styled.div`
  margin-top: 1rem;
`;

const IconContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: white;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  line-height: 1.6;
`;

const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <CardContainer>
      <NumberBadge>{number}</NumberBadge>
      <ContentWrapper>
        <IconContainer>{icon}</IconContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </CardContainer>
  );
};

export default StepCard;
