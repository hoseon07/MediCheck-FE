import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MessageSquare, Heart, Pill } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <h1>AI 의료 도우미</h1>
        <p>당신의 건강한 삶을 위한 스마트한 선택</p>
      </Header>

      <ServicesGrid>
        <ServiceCard onClick={() => navigate('/medications')}>
          <Pill />
          <h3>약품 정보</h3>
          <p>의약품 정보 검색</p>
        </ServiceCard>
        <ServiceCard onClick={() => navigate('/firstAid')}>
          <Heart />
          <h3>응급 처치</h3>
          <p>응급상황 대처법</p>
        </ServiceCard>
      </ServicesGrid>

      <ConsultButton onClick={() => navigate('/chat')}>
        <MessageSquare />
        <span>AI 상담 시작하기</span>
      </ConsultButton>
    </Container>
  );
}

const Container = styled.div`
  width: 30vw;
  height: 100%;
  padding: 2rem 1rem;
  background-color: #f9fafb;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: #2563eb;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.75rem;
    color: #6b7280;
    text-align: center;
  }
`;

const ConsultButton = styled.button`
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 1rem;
  border-radius: 0.75rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;