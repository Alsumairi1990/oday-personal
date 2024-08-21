'use client'
import Decimal from 'decimal.js';
import React, { FormEvent, useEffect, useState } from 'react'
import Image from "next/image"



import {
    CardElement,
    Elements,
    LinkAuthenticationElement,
    PaymentElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js"
  import { loadStripe } from "@stripe/stripe-js"
import { getServiceById } from '@/app/admin/service/_serviceActions/ServiceActions';
import { Service } from '@prisma/client';
import { formatCurrency } from '@/lib/Formatter';
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API as string
  )

  
  interface CheckoutFormProps {
    service: number;
    clientSecret: string;
  }


  
function CheckoutForm({service,clientSecret}:CheckoutFormProps) {
    const [serviceData,setServiceData] = useState<Service | null>();
    const getService = async () =>{
        try {
            const serviceDat = await getServiceById(service);
            setServiceData(serviceDat);
            
        } catch (error) {
            
        }
    }

   
    useEffect(()=> {
        getService();

    },[])
  return (
    <> 
    <div className="p-2 w-full border-t bg-gray-50 mt-[4.5rem] pt-8">
        <div className="grid sm:grid-cols-2 w-11/12 mx-auto bg-white border border-gray-200 p-4">
            <div className="p2 pr-6">
                <h1 className="text-base flex-100 border-b pb-2 text-gray-800">
                    Service Payment Details 
                </h1>
                <div className="flex flex-wrap">
                <div className="p-2 flex-48">
                <div className="aspect-video flex-shrink-0 rounded-md relative">
                   {serviceData?.image &&  <Image
                        src={serviceData?.image}
                        
                        fill
                        alt={serviceData.name}
                        className="object-cover rounded"
                    /> }
                     </div>
                </div>
                <div className="flex-48">
                    <div className="p-2">
                    <p className="text-lg font-semibold mt-2 text-gray-700">
                        {serviceData?.name}
                    </p>
                    <p className="text-md text-gray-800">
                        <span className='mr-2 my-2 font-medium inline-flex'>Service Amount : </span>
                        <span className='font-semibold'>{formatCurrency(498)}</span>
                    </p>
                    <p className="text-md text-gray-500 line-clamp-3">
                        {serviceData?.description}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-4">
            <Elements options={{clientSecret}}  stripe={stripePromise}>
                <Form  />
            </Elements>
            </div>
        </div>

    </div>
    
    </>
   
  )
}

export default CheckoutForm

function Form(){
    const stripe = useStripe();
    const elements = useElements();
    const [loading,setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>()

    const handelSubmit = (e:FormEvent)=> {
         e.preventDefault();
         if (stripe == null || elements == null ) return
         setLoading(true);
         stripe
         .confirmPayment({
           elements,
           confirmParams: {
             return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/payments/success`,
           },
         })
         .then(({ error }) => {
           if (error.type === "card_error" || error.type === "validation_error") {
             setErrorMessage(error.message)
           } else {
             setErrorMessage("An unknown error occurred")
           }
         })
         .finally(() => setLoading(false))
        }
   

    
    return(
    <form onSubmit={handelSubmit} className='rounded border border-gray-200 shadow-md p-3 pt-2'>
        <div className="py-1 mb-5 border-b">
            <h1 className="text-lg text-gray-700 pb-1 font-medium">Payment Method</h1>
        </div>
        {errorMessage && (
            <div className="text-destructive text-red-700 text-md">
              {errorMessage}
            </div>
          )}
          <div className="">
          
          </div>
        <div className="">
        <PaymentElement />
        </div>
        <div className="mt-4">
            <LinkAuthenticationElement
            //   onChange={e => setEmail(e.value.email)}
            />
          </div>
        <div className=" mt-4">
            <button
            className='w-full rounded py-2 bg-indigo-600 text-white font-medium capitalize'
            disabled={stripe == null || elements == null || loading}
            >
             {loading ? 'purchasing ... ' : `Checkout | ${formatCurrency(987)}`}
            </button>
        </div>
        
    </form> 
    )
}