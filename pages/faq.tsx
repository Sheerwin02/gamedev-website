import React from 'react';
import FAQItem from '../components/faq/faq';
import { Footer } from '../components/footer/footer';
import { NavBar } from '../components/header/Header';

import Link from 'next/link';
import SupportPage from '../components/support/SupportPage';

const FAQPage: React.FC = () => {
  const faqData = [
    { question: 'What is Hana Studio about?', answer: ' Hana Studio is a creative and innovative game development studio dedicated to crafting immersive and entertaining gaming experiences. We specialize in developing high-quality games that captivate players and push the boundaries of storytelling, graphics, and gameplay.' },
    { question: "How can I stay updated on Hana Studio's latest projects?", answer: 'Stay connected with us! Follow our official social media channels, including X, Facebook, and Instagram, for the latest updates, announcements, and sneak peeks at our upcoming games. Additionally, visit our website and subscribe to our newsletter for exclusive content and early access information.' },
    { question: "What types of games does Hana Studio create?", answer: 'Hana Studio is committed to diversity in game development. We create a wide range of games, including action-adventure, role-playing, simulation, and casual games. Our goal is to cater to a diverse audience and provide unique gaming experiences for players of all preferences.' },
    { question: "Are there opportunities to join Hana Studio as a developer?", answer: 'Yes Sir! We are always on the lookout for talented and passionate individuals to join our team. Check our Recruitment page on the website for the latest opportunities to be a part of Hana Studio. We value creativity, teamwork, and a love for gaming.' },
    { question: "How can I submit game ideas or collaborate with Hana Studio?", answer: 'We appreciate your enthusiasm! While we may not be able to accept unsolicited game ideas, we encourage collaboration and partnerships. If you represent a studio, publisher, or have a specific proposal, please reach out to our business development team through the Contact Us section on our website.' },
    { question: "When can we expect Hana Studio's next game to be released?", answer: 'Release dates can vary based on the complexity and scope of each project. Stay tuned to our announcements and social media for updates on upcoming game releases. We are committed to delivering polished and exceptional games, and we appreciate your patience and support.' },
  ];

  return (  
      <div className="flex flex-col h-screen">
        {/* <NavBar /> */}
        <div className="flex-grow max-w-2xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h1>
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <SupportPage/>
        <div className="justify-center flex flex-col">
          <Footer />
        </div>
      </div>
    );
  };
export default FAQPage;
