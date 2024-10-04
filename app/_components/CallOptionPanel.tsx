import React from 'react'
import WhatsAppLive from './WhatsAppLive'
import MobilCall from './MobilCall'

function CallOptionPanel() {
  return (
    <div>
        <div className="">
        <WhatsAppLive />
        </div>
        <div className="">
            <MobilCall  />
        </div>
    </div>
  )
}

export default CallOptionPanel