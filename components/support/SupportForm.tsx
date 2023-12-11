import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'tailwindcss/tailwind.css';
import { selectToken } from '../../redux/authSlice';

interface SupportType {
  id: number;
  type: string;
}

const SupportForm: React.FC = () => {
  const [requestTypeId, setRequestTypeId] = useState<number | null>(null);
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [requestTypes, setRequestTypes] = useState<SupportType[]>([]);
  const authToken = useSelector(selectToken);

  useEffect(() => {
    const fetchRequestTypes = async () => {
      try {
        const response = await fetch('/api/supportType');
        if (response.ok) {
          const data = await response.json();
          setRequestTypes(data);
        } else {
          console.error('Failed to fetch request types');
        }
      } catch (error) {
        console.error('Error fetching request types:', error);
      }
    };

    fetchRequestTypes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      console.log('Auth Token:', authToken);

      if (!authToken) {
        console.error("Authentication token not available");
        alert("Please login to submit a support request.");
        return;
      }

      const formData = {
        requestTypeId,
        subject,
        description,
      };

      console.log('Request Payload:', formData);

      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(formData),
      });

      console.log('Response:', response);

      if (response.ok) {
        console.log('Support request submitted successfully');
        // Optionally, reset the form fields or perform other actions
        setRequestTypeId(null);
        setSubject('');
        setDescription('');
      } else {
        console.error('Failed to submit support request');
      }
    } catch (error) {
      console.error('Error submitting support request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl w-3/4 mx-auto mt-8 p-6 ">
      <div className="mb-4">
        <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2 ">
          Request Type:
        </label>
        <select
          id="type"
          onChange={(e) => setRequestTypeId(Number(e.target.value))}
          value={requestTypeId || ''}
          className="w-full p-2 rounded-md bg-gray-100"
        >
          <option value="" disabled>
            Select Request Type
          </option>
          {requestTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.type}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded-md bg-gray-100"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default SupportForm;
