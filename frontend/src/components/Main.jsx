import React from 'react';
import Section from './MainSectionComponents/Section';
import MainContent from './MainSectionComponents/MainContent';


function Main() {
  return (
    <main className="flex-1">
      <Section
        title="Connecting Creators and Businesses"
        description="Creatorships is a platform that helps businesses and creators form equity-based partnerships. Submit your details to get started."
        buttons={[
          { text: 'Join as a Business', primary: true, onClick:() => window.location.href = '/submit-business'},
          { text: 'Join as a Creator', primary: false, onClick:() => window.location.href = '/submit-creator' },
        ]}
      />
      <MainContent />
      <Section
        title="Boutique Outreach"
        description="Creatorships is initially focused on personalized outreach to businesses and creators to facilitate partnerships. We operate as a boutique service to make the best matches."
        buttons={[
          { text: 'Learn More', primary: false },
        ]}
      />
    </main>
  );
}

export default Main;
