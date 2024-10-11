import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Providers } from '../providers';
import WhatsAppLive from '../_components/WhatsAppLive';
import CallOptionPanel from '../_components/CallOptionPanel';
import NextTopLoader from 'nextjs-toploader';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
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
      </Providers>
    </NextIntlClientProvider>
  );
}
