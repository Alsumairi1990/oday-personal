
import LeftNav from '@/app/_components/user/nav/LeftNav';
import UserTopNav from '../_components/UserTopNav';
import { MenuWithAllModels } from '../../admin/setting/left-nav/_utils/MenuWithAllModels';
import UserSidNav from '../_components/UserSidNav';
import { getLocale, getMessages } from 'next-intl/server';

export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const elements = await fetch(`${process.env.NEXTAUTH_URL}/api/front/users/menu/left-nav`, {
      method: 'GET',
      next: { revalidate: 3600 }, // 
    });
   
    const locale = await getLocale();
    const messages = await getMessages({ locale });
  const menuElements:Record<number, MenuWithAllModels[]> = await elements.json();
  
    return (
            <div className="h-fit bg-gray-100">
                     <UserTopNav  locale={locale} messages={messages} />
                <div className="flex h-fit">
                  {menuElements && (<div id="leftAdmin" className="sm:p-1 sm:min-w-[240px] left-admin">
                     <UserSidNav slug="dd" menusData={menuElements} locale={locale}  messages={messages}  />
                  </div> )
                }
                <div className="w-full  h-full">
                {children}
                </div>
            </div>


            </div>


    )
  }
