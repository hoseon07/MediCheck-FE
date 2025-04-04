import React from 'react';
import styled from 'styled-components';
import { Search, Info } from 'lucide-react';

export const Medications = () => {
  const medications = [
    {
      name: "타이레놀",
      category: "해열/진통제",
      description: "두통, 치통, 발열에 사용되는 약물",
      usage: "1회 1-2정, 1일 3-4회 복용",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=200&h=200"
    },
    {
      name: "베타딘",
      category: "소독제",
      description: "상처 소독에 사용되는 외용제",
      usage: "상처부위 직접 도포",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=200&h=200"
    }
  ];

  return (
    <Container>
      <Header>
        <h2>약품 정보</h2>
      </Header>

      <Content>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="약품 검색..."
          />
          <SearchIcon />
        </SearchContainer>

        <MedicationList>
          {medications.map((medication, index) => (
            <MedicationCard key={index}>
              <MedicationContent>
                <MedicationImage
                  src={medication.image}
                  alt={medication.name}
                />
                <MedicationInfo>
                  <MedicationHeader>
                    <MedicationName>{medication.name}</MedicationName>
                    <Category>{medication.category}</Category>
                  </MedicationHeader>
                  <Description>{medication.description}</Description>
                  <Usage>
                    <Info />
                    <span>{medication.usage}</span>
                  </Usage>
                </MedicationInfo>
              </MedicationContent>
            </MedicationCard>
          ))}
        </MedicationList>
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
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 90%;
  background-color: white;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    ring: 2px;
    ring-color: #3b82f6;
  }
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 0.875rem;
  color: #9ca3af;
`;

const MedicationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MedicationCard = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const MedicationContent = styled.div`
  display: flex;
`;

const MedicationImage = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
`;

const MedicationInfo = styled.div`
  padding: 0.75rem;
  flex: 1;
`;

const MedicationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const MedicationName = styled.h3`
  font-weight: 500;
`;

const Category = styled.span`
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

const Description = styled.p`
  color: #4b5563;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Usage = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #6b7280;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.25rem;
  }
`;