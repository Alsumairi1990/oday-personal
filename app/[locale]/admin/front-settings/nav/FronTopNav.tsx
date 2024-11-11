// app/admin/setting/left-nav/display/page.tsx
'use client'
import React from 'react';
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
import TopNav from './TopNav';
import { AbstractIntlMessages } from 'next-intl';

interface Props {
  menusData: Record<number, MenuWithAllModels[]>;
  locale : string,
  messages : AbstractIntlMessages,

}
const FrontTopNav =  ({menusData,locale,messages}:Props) => {
return <TopNav menusData={menusData} locale={locale} messages={messages} />;
};

export default FrontTopNav;
