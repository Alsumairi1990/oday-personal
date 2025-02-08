
import LeftNav from '@/app/_components/user/nav/LeftNav';
import UserTopNav from '../_components/UserTopNav';
import { MenuWithAllModels } from '../../admin/setting/left-nav/_utils/MenuWithAllModels';
import UserSidNav from '../_components/UserSidNav';
import { getLocale, getMessages } from 'next-intl/server';

interface Props {
  params: {
      slug: string;
  };
}

export default async function SignupLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & Props) {
  const { slug } = params;

    const elements = await fetch(`${process.env.NEXTAUTH_URL}/api/front/users/menu/left-nav`, {
      method: 'GET',
      next: { revalidate: 3600 }, // 
    });
    const locale = await getLocale();
    const messages = await getMessages({ locale });
  const menuElements:Record<number, MenuWithAllModels[]> = await elements.json();
  
    return (
            <div className="h-fit bg-gray-100">
                     <UserTopNav />
                <div className="flex h-fit">
                  {menuElements && (<div id="leftAdmin" className="p-1 m  sm:min-w-[240px] left-admin">
                     <UserSidNav slug={slug} menusData={menuElements} locale={locale}  messages={messages}  />
                  </div> )
                }
                <div className="w-full  h-full">
                {children}
                </div>
            </div>


            </div>


    )
  }
