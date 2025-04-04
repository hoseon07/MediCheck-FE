import React from 'react';
import styled from 'styled-components';
import { Clock, ChevronRight } from 'lucide-react';

export const MyPage = () => {
  const consultHistory = [
    {
      date: '2024-03-15',
      symptoms: '두통, 어지러움',
      diagnosis: '편두통 의심',
    },
    {
      date: '2024-03-10',
      symptoms: '발열, 인후통',
      diagnosis: '감기 증상',
    }
  ];

  return (
    <Container>
      <Header>
        <ProfileContainer>
          <ProfileImage
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100"
            alt="Profile"
          />
          <ProfileInfo>
            <h2>김민수님</h2>
            <p>마지막 상담: 2024년 3월 15일</p>
          </ProfileInfo>
        </ProfileContainer>
      </Header>

      <Content>
        <Section>
          <SectionHeader>
            <Clock size={20} />
            <h3>상담 기록</h3>
          </SectionHeader>
          
          {consultHistory.map((consult, index) => (
            <ConsultItem key={index}>
              <ConsultDate>
                <span>{consult.date}</span>
                <ChevronRight size={16} color="#9CA3AF" />
              </ConsultDate>
              <ConsultText>
                <span>증상:</span>
                {consult.symptoms}
              </ConsultText>
              <DiagnosisText>
                <span>진단:</span>
                {consult.diagnosis}
              </DiagnosisText>
            </ConsultItem>
          ))}
        </Section>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  background-color: #f9fafb;
`;

const Header = styled.div`
  background-color: #2563eb;
  padding: 1.5rem;
  color: white;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  border: 2px solid white;
`;

const ProfileInfo = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    font-size: 0.875rem;
    color: #bfdbfe;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Section = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const SectionHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #2563eb;
  }

  h3 {
    font-weight: 500;
    color: #1f2937;
  }
`;

const ConsultItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ConsultDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const ConsultText = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  color: #1f2937;

  span {
    color: #6b7280;
    margin-right: 0.25rem;
  }
`;

const DiagnosisText = styled(ConsultText)`
  color: #2563eb;
  font-weight: 500;
`;