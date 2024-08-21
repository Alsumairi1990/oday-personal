"use server"
import prisma from "../../../../utils/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import { stripe } from "../utils/Stripe";
import Stripe from "stripe";
import { redirect } from "next/navigation";

// Create Payment Session 
export  async function payAmount(serviceId:number){
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
          throw new Error('User not authenticated');
        }
        const user = session.user;
        if(!user) {throw new Error('You should be Logged in to make payment')}

        const service = await prisma.service.findUnique({
            where : {
                id : serviceId
            },
            select : {
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
        const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = ([
            {
                price_data: {
                    currency : 'usd',
                    product_data : {
                        name : service?.name,
                        // images :  [service.image ?? 'default_image_url']
                    },
                    unit_amount:price * 100,
                },
                quantity : 1
            }
        ]
            
        )
        const sessionPay = await  stripe.checkout.sessions.create({
            mode : 'payment',
            line_items : lineItems,
            success_url : 'http://localhost:3000/payments/success',
            cancel_url : 'http://localhost:3000/payments/cancel'
        })
        return redirect(sessionPay.url as string)
    }
        
    } catch (error) {
        console.log('[payAmount]'+error);
        throw error;
    }
}