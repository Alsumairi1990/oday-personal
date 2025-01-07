'use client';

import React, { useState } from 'react';
import { AbstractIntlMessages } from 'next-intl';
import { Service } from '@prisma/client';

interface Props {
  locale: string;
  messages: AbstractIntlMessages;
  selectData: (newValue: Service[]) => Promise<void>; // Server callback
}

function SelectServiceCategory({ locale, messages, selectData }: Props) {
  const [loading, setLoading] = useState(false);

  const changeCategory = async (category: string) => {
    console.log(`Fetching services for category: ${category}`);
    setLoading(true);

    try {
      // Simulate API call to fetch services
    //   const response: Service[] = await new Promise((resolve) =>
    //     setTimeout(() => resolve([{ id: '1', name: 'Sample Service', category }] as Service[]), 1000)
    //   );

      // Send data to the server
    //   await selectData(response);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2.5 py-2.5 flex gap-4 items-center justify-center rounded-2xl bg-white border border-gray-300">
      {loading && <span>Loading...</span>}
      {!loading && (
        <>
          <button
            type="button"
            className="px-2 rounded-md py-1 bg-blue-600 text-white"
            onClick={() => changeCategory('front-end')}
          >
            Front End
          </button>
          <button
            type="button"
            className="px-2 rounded-md py-1"
            onClick={() => changeCategory('back-end')}
          >
            Back End
          </button>
        </>
      )}
    </div>
  );
}

export default SelectServiceCategory;
