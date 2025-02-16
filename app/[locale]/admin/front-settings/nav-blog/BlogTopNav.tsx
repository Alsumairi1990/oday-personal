// app/admin/setting/left-nav/display/page.tsx
'use client'
import React from 'react';
import { getMenusElementse2 } from '@/app/[locale]/admin/setting/left-nav/_actions/Action';
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
// import TopNav from './TopNav';
import TopNav from '@/app/[locale]/admin/front-settings/nav-blog/TopNav';

import { AbstractIntlMessages } from 'next-intl';

interface Props {
  menusData: Record<number, MenuWithAllModels[]>;
  locale : string,
  messages : AbstractIntlMessages,
}
const BlogTopNav = ({menusData,locale,messages}:Props) => {
  // const menusData: Record<number, MenuWithAllModels[]> = await getMenusElementse2();
return <TopNav menusData={menusData} locale={locale} messages={messages} />;
};

export default BlogTopNav;
