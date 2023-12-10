import React from 'react';
import SupportForm from '../components/support/SupportForm';
import 'tailwindcss/tailwind.css';
import { Footer } from '../components/footer/footer';
import Link from 'next/link';


const SupportPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="max-w-3xl w-full p-6 mb-6 mt-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Submit a Ticket</h1>
            <SupportForm />
            <div className="mt-6 text-center">
              <Link href="/faq">
                <div className="text-blue-500 underline">Go to FAQ</div>
              </Link>
            </div>
          </div>
          <div className="justify-center flex flex-col ">
            <Footer />
          </div>
        </div>
      );
    };
    

export default SupportPage;
