'use server'
import React from 'react';
import { Service } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import SelectServiceCategory from './SelectServiceCategory';

interface ServiceProps {
  services: Service[];
  locale: string;
  messages: AbstractIntlMessages;
}

const ServicePanel = ({ services, locale, messages }: ServiceProps) => {
  const request = (messages as any).HomePage.requestService;
  const details = (messages as any).HomePage.details;

  // Function to handle selected data sent from SelectServiceCategory
  const handleSelectData = async (data: Service[]) => {
    // Call an API route or directly process data on the server
    console.log('Services received from client:', data);
  };

  return (
    <div className="flex-100 sm:flex-20 py-2">
      <div className="py-3 text-center rounded-md shadow-xl border border-gray-200">
        {locale === 'en' ? (
          <div className="mt-1.5">English Content</div>
        ) : (
          <div className="mt-1.5 font-arabic">Arabic Content</div>
        )}
      </div>

      {/* Pass the server callback to the client component */}
      <SelectServiceCategory locale={locale} messages={messages} selectData={handleSelectData} />
    </div>
  );
};

export default ServicePanel;
