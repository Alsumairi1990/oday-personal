import { stripe } from "@/app/[locale]/admin/common/utils/Stripe";
import { MdDownloadDone } from "react-icons/md";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string }
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  )
    const isSuccess = paymentIntent.status === "succeeded"
  return (
     <div className="w-full flex items-center mt-[4.6rem] border-t bg-gray-50 justify-center" >
          <div className="w-4/12 bg-white my-16 pt-3  flex flex-col border mt-20 shadow-md rounded  items-center">
          <h1 className="text-4xl font-bold">
        {isSuccess ? "Success!" : "Error!"}
      </h1>
          <span className=" py-3">
                <MdDownloadDone  className='text-[3rem] bg-green-600  text-white  border border-green-500 rounded-md'  />
                </span>
          <p className="text-3xl font-medium text-gray-900 dark:text-orange-500">
            Success Payments
          </p>
          <p className="text-md text-gray-600 py-3 px-3 leading-6">
            The Service Payement has been doine for corrsepondant Service , has been doine for corrsepondant Service , will be notify to your email ,will be notify to your email
          </p>
          <button
          className="px-2 py-1.5 text-md my-3 hover:bg-indigo-700 rounded bg-indigo-600 text-white font-medium capitalize"
          >
            Go to Services
          </button>
          </div>
     </div>
  )
};
