
import { MdDownloadDone, MdSmsFailed } from "react-icons/md";
import { payAmount } from "./_actions/Actions";
import prisma from "../../../utils/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { stripe } from "@/app/[locale]/admin/common/utils/Stripe";
import CheckoutForm from "./_components/CheckoutForm";

const payments = async () => {
    
        const service = await prisma.service.findUnique({
            where : {
                id : 57
            },
            select : {
                id : true,
                name : true,
                image : true,
                prices:{
                    where : {
                        locationId : 2
                    },
                  select : {
                    startPrice : true
                  }
                }
            }
        })
        console.log('serviceWithPrice' + service?.name)
        let price:number = 0;
        service?.prices.map(elem=>
            price = Number(elem.startPrice)
        )
        let id:number = 0;
        if(service?.id) id=service.id;
        const sessionIn = await stripe.paymentIntents.create({
            currency : 'usd',
            
            amount : price * 100,
            metadata : {
                serviceId : id
            },
            automatic_payment_methods: {
                enabled: true,
            }

        })
        if(sessionIn.client_secret == null) throw new Error ('something gone wronge, not payment intent created');
       
    
    
  return (
     <div className="w-full flex " >
    {service?.id && <CheckoutForm  service = {service?.id} clientSecret={sessionIn.client_secret} /> }

     </div>
  )
};
export default payments;