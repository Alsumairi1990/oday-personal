"use server"
import prisma from "../../../utils/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { stripe } from "@/app/admin/common/utils/Stripe";
import CheckoutForm from "../_components/CheckoutForm";

// Create Payment Session 
export  async function payAmount(serviceId:number){
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error('User not authenticated');
        }
        const user = session.user;
        if(!user) {throw new Error('You should be Logged in to make payment')}
        console.log("before------------- return")

        const service = await prisma.service.findUnique({
            where : {
                id : serviceId
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
        if(user && service){
        const sessionIn = await stripe.paymentIntents.create({
            currency : 'usd',
            amount : price * 100,
            metadata : {
                serviceId : service.id
            }

        })
        if(sessionIn.client_secret == null) throw new Error ('something gone wronge, not payment intent created');
        console.log("before return")
        return <CheckoutForm  service = {service.id} clientSecret={sessionIn.client_secret} />
    }
        
    } catch (error) {
        console.log('[payAmount]'+error);
        throw error;
    }
}