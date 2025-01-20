import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Providers } from '../providers';
import CallOptionPanel from '../_components/CallOptionPanel';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service`, {
  //   method: 'GET',
  //   next: { revalidate: 1800 },
  // });
  
  // const Categories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/categories/home`, {
  //   method: 'GET',
  //   next: { revalidate: 1800 }, 
  // });
  // const servicesR:Service[] = await res.json();
  // const categoriesResult:Category[] = await Categories.json();
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers>
      {/* <NextTopLoader /> */}
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>

        {children}
        </div>
        <div className="parent z-[9999999999] ">
         <CallOptionPanel locale={locale} messages={messages} />
         {/* <div className="child">Child (Fixed)</div> */}
</div>
        {/* <div className="fixed top-1/2 right-2 transform -translate-y-1/2 z-[9999999999]  animate-rotate-back">

        <CallOptionPanel  />
             </div> */}
          {/* <div className='w-full bg-[#111]' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <Footerk services={servicesR} categories={categoriesResult} locale={locale} messages={messages} />
          </div> */}
      </Providers>
    </NextIntlClientProvider>
  );
}
