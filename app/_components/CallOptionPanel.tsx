'use client'
import React, { useState } from 'react'
import WhatsAppLive from './WhatsAppLive'
import MobilCall from './MobilCall'
import { LuPhoneCall } from 'react-icons/lu';
import { AbstractIntlMessages } from 'next-intl';
interface Props {
  locale : string,
  messages : AbstractIntlMessages,
}
function CallOptionPanel({locale,messages}:Props) {
  const [whatsappFlag, setWhatsappFlag] = useState(false);
  const [mobileContactFlag, setMobileContactFlag] = useState(false);
  const closePanel = (flag:boolean) => {
    setMobileContactFlag(flag);
  }

  return (
    <div className='flex flex-col  rounded-l-md items-center gap-y-2 '>
        <div className="border w-10 h-10 flex justify-center items-center rounded-md border-gray-300 bg-gray-100">
        <WhatsAppLive />
        </div>
        <div className="border w-10 h-10 justify-center flex rounded-md items-center border-gray-300 bg-gray-100">
          <button onClick={() => setMobileContactFlag(true)}>
            <span className="">
            <LuPhoneCall className='text-gray-700 text-2xl' />
            </span>
          </button>
            {mobileContactFlag && <MobilCall locale={locale} messages={messages} closePanle={closePanel}  /> }
        </div>
    </div>
  )
}

export default CallOptionPanel