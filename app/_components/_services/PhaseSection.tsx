
import React from 'react';

import { Service } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';
import Link from 'next/link';
interface Props {
    id: number;
    locale : string,
    messages : AbstractIntlMessages,
  }
const PhaseSection = ({ id,locale,messages } : Props) => {
  const request = (messages as any).HomePage.requestService;
  const details = (messages as any).HomePage.details;
  return (
    <div className="flex-100 sm:flex-20 py-2">
   
    </div>
  );
};

export default PhaseSection;