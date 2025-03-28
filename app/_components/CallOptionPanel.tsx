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
        <div className="border w-10 h-10 flex justify-center items-center rounded-md border-white bg-[#46b500]">
        <WhatsAppLive />
        </div>
        <div className="border w-10 h-10 justify-center flex rounded-md items-center border-white bg-[#0d72a3]">
          <button aria-label="click to call" onClick={() => setMobileContactFlag(true)}>
            <span className="">
            <LuPhoneCall className='text-white text-2xl' />
            </span>
          </button>
            {mobileContactFlag && <MobilCall locale={locale} messages={messages} closePanle={closePanel}  /> }
        </div>
    </div>
  )
}

export default CallOptionPanel