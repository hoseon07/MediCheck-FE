import React from 'react';
import styled from 'styled-components';
import { AlertCircle } from 'lucide-react';

export const FirstAid = () => {
  const firstAidGuides = [
    {
      condition: "심폐소생술 (CPR)",
      steps: [
        "의식과 호흡 확인",
        "119 신고",
        "가슴압박 30회 시행",
        "인공호흡 2회 시행",
        "위 과정을 반복"
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&h=300",
      emergency: true
    },
    {
      condition: "화상",
      steps: [
        "차가운 물에 20분간 담그기",
        "물집을 터트리지 않기",
        "깨끗한 거즈로 덮기",
        "전문의 진료받기"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&h=300",
      emergency: false
    }
  ];

  return (
    <Container>
      <Header>
        <h2>응급처치 가이드</h2>
      </Header>
      
      <Content>
        {firstAidGuides.map((guide, index) => (
          <Card key={index}>
            <CardHeader>
              <h3>{guide.condition}</h3>
              {guide.emergency && (
                <Emergency>
                  <AlertCircle />
                  <span>응급상황</span>
                </Emergency>
              )}
            </CardHeader>
            
            <Image
              src={guide.image}
              alt={guide.condition}
            />
            
            <Steps>
              {guide.steps.map((step, stepIndex) => (
                <Step key={stepIndex}>
                  <StepNumber>{stepIndex + 1}</StepNumber>
                  {step}
                </Step>
              ))}
            </Steps>
          </Card>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 30vw;
  height: 100%;
  background-color: #f9fafb;
`;

const Header = styled.div`
  background-color: #2563eb;
  padding: 1rem;

  h2 {
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 500;
  }
`;

const Emergency = styled.div`
  display: flex;
  align-items: center;
  color: #dc2626;
  font-size: 0.875rem;

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const Steps = styled.ol`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Step = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4b5563;
`;

const StepNumber = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: #dbeafe;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;
