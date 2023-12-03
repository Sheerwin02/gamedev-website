import React from 'react';
import SupportForm from '../components/support/SupportForm';
import 'tailwindcss/tailwind.css';
import { Footer } from '../components/footer/Footer';
    

const SupportPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-8">Submit a Ticket</h1>
        <SupportForm />
        {/* <div className="flex justify-center">
            <Footer />
        </div> */}
        
      </div>
    );
};

export default SupportPage;
