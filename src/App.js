import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #F5F7FA;
`;

const App = () => {
  const features = [
    { icon: '⏱️', title: 'Real-time Updates', description: 'Track food donations and pickups in real-time through our live dashboard.', highlight: true },
    { icon: '🏅', title: 'Gamification', description: 'Earn badges and points for your contributions to the community.', highlight: false },
    { icon: '📊', title: 'Impact Tracking', description: 'See your direct impact with detailed analytics and statistics.', highlight: false },
    { icon: '❤️', title: 'Community Driven', description: 'Join a network of caring individuals and organizations making a difference.', highlight: false },
  ];

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} highlight={feature.highlight} />
        ))}
      </FeaturesContainer>
      <Footer />
    </Container>
  );
};

export default App;