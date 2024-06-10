
import ServiceCreate from "@/app/_components/admin/service/ServiceCreate";
import Billing from "@/app/_components/user/Billing";


const BillingPage = () => {
   const imagePath2 = 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/mastercard.png';
   const imgBg = 'https://angular-material.fusetheme.com/images/pages/profile/cover.jpg';
   const postImag = 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/visa.png';
   const postImag1 = 'https://tixia.dexignzone.com/xhtml/images/profile/9.jpg';
   const postHight = 'https://tixia.dexignzone.com/xhtml/images/profile/1.jpg';
    return (
      <div className="p-2 w-11.8/12 mx-auto">
        <div className="px-3 py-2 bg-white border border-gray-200 mb-2 rounded-md">
           <p className="text-gray-600  mb-0 max-sm:hidden">Billing Page</p>
        </div>

        <div className="bg-white shadow-md text-gray-600 rounded-lg mb-4">
             {/* Current Plan */}
             <h5 className="p-4 border-b text-xl  font-semibold">Current Plan</h5>
             <div className="p-4">
                <div className="flex flex-wrap">
                   <div className="md:w-1/2 w-full mb-4">
                      <div className="mb-3">
                         <h6 className="mb-1 text-lg font-medium">Your Current Plan is Basic</h6>
                         <p className="text-gray-600">A simple start for everyone</p>
                      </div>
                      <div className="mb-3">
                         <h6 className="mb-1 text-lg font-medium">Active until Dec 09, 2021</h6>
                         <p className="text-gray-600">We will send you a notification upon Subscription expiration</p>
                      </div>
                      <div className="mb-3">
                         <h6 className="mb-1 text-lg font-medium"><span className="mr-2">$199 Per Month</span> <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Popular</span></h6>
                         <p className="text-gray-600">Standard plan for small to medium businesses</p>
                      </div>
                   </div>
                   <div className="md:w-1/2 w-full mb-4">
                      <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-3" role="alert">
                         <h5 className="text-lg font-medium mb-1">We need your attention!</h5>
                         <span>Your plan requires update</span>
                      </div>
                      <div className="plan-statistics">
                         <div className="flex justify-between">
                            <h6 className="mb-2 text-lg font-medium">Days</h6>
                            <h6 className="mb-2 text-lg font-medium">24 of 30 Days</h6>
                         </div>
                         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                            <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
                         </div>
                         <p className="mt-1 mb-0 text-gray-600">6 days remaining until your plan requires update</p>
                      </div>
                   </div>
                   <div className="w-full">
                      <button className="bg-[#7367f0] text-white font-medium py-2 px-4 rounded text-md mr-2 mt-2" data-bs-toggle="modal" data-bs-target="#pricingModal" style={{boxShadow: '0 0.125rem 0.25rem rgba(165,163,174,.3)'}} >Upgrade Plan</button>
                      <button className="bg-red-100 text-red-600 font-medium py-2 px-4 rounded text-md mt-2">Cancel Subscription</button>
                   </div>
                </div>
             </div>
             {/* /Current Plan */}
          </div>

            <div className="card my-8 bg-white p-4 shadow-md  rounded-xl">
                  <h5 className="py-2 mb-3 text-base font-medium text-gray-600">Payment Methods</h5>
                  <div className="card-body">
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/2 px-2">
                        <form id="creditCardForm" className="space-y-3"  >
                          <div className="w-full mb-2">
                            <div className="flex space-x-4 mb-3 text-md text-gray-600">
                              <div className="flex items-center">
                                <input name="" className="" type="radio" value="" id="collapsible-payment-cc" checked />
                                <label className="ml-2" htmlFor="">Credit/Debit/ATM Card</label>
                              </div>
                              <div className="flex items-center">
                                <input name="" className="" type="radio" value="" id="collapsible-payment-cash" />
                                <label className="ml-2" htmlFor="">Paypal account</label>
                              </div>
                            </div>
                          </div>
                          <div className="w-full">
                            <label className="w-full inline-flex text-sm text-gray-500 pl-1 mb-1" htmlFor="paymentCard">Card Number</label>
                            <div className="relative border border-gray-200 rounded-md ">
                              <input id="paymentCard" name="paymentCard" className=" outline-none px-2 h-10 bg-transparent  w-full " type="text" placeholder="1356 3215 6548 7898" />
                              <span className="absolute right-0 top-0 mt-2 mr-2">
                                <span className="card-type"></span>
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-x-3 items-center mt-2">
                              <div className="w-full md:w-1/2 ">
                                <label htmlFor="paymentName" className="text-sm text-gray-500">Name</label>
                                <input type="text" id="paymentName" className="border px-2 placeholder:text-sm border-gray-200 rounded-md h-10 w-full" placeholder="John Doe" />
                              </div>
                              <div className="w-1/2 md:w-1/4">
                                <label htmlFor="paymentExpiryDate" className="text-sm  text-gray-500">Exp. Date</label>
                                <input type="text" id="paymentExpiryDate" className="border placeholder:text-sm placeholder:upper px-2 border-gray-200 rounded-md h-10 w-full" placeholder="MM/YY" />
                              </div>
                              <div className="w-1/2 md:w-1/4">
                                <label htmlFor="paymentCvv" className="text-sm text-gray-500">CVV Code</label>
                                <div className="relative">
                                  <input type="text" id="paymentCvv" className="border px-2 border-gray-200 rounded-md h-10 w-full pr-12"  placeholder="654" />
                                  <span className="absolute right-0 top-0 mt-2 mr-2">
                                    <i className="ti ti-help text-gray-500" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Card Verification Value" data-bs-original-title="Card Verification Value"></i>
                                  </span>
                                </div>
                              </div>
                          </div>
                          <div className="w-full">
                            <label className="flex items-center">
                              <input type="checkbox" className="form-check-input" />
                              <span className="ml-2 text-md text-gray-500">Save card for future billing?</span>
                            </label>
                          </div>
                          <div className="w-full flex items-center !mt-6">
                            <button type="submit" className="bg-[#7367f0] text-white font-medium py-2 px-4 rounded text-md mr-2" style={{boxShadow: '0 0.125rem 0.25rem rgba(165,163,174,.3)'}}>Save Changes</button>
                            <button type="reset" className="ml-2 bg-gray-200 font-medium py-2 px-4 rounded  text-gray-500 ">Cancel</button>
                          </div>
                        </form>
                      </div>
                      <div className="w-full md:w-1/2 mt-5 md:mt-0 px-2">
                        <h6 className="mb-4 text-gray-500 font-medium">My Cards</h6>
                        <div className="space-y-3">
                          <div className="bg-[#f9f9fa] border border-gray-100 p-3 rounded-md">
                            <div className="flex justify-between flex-col sm:flex-row">
                              <div className="card-information">
                                <img className="mb-3 img-fluid" src={imagePath2} alt="Master Card" />
                                <div className="flex items-center mb-2 space-x-2">
                                  <p className="mb-0 text-base mr-3 text-gray-500">Tom McBride</p>
                                  <span className="bg-[#eae8fd] text-[#7367f0] py-0.5 px-2 rounded text-md">Primary</span>
                                </div>
                                <span className="text-gray-500">∗∗∗∗ ∗∗∗∗ 9856</span>
                              </div>
                              <div className="flex flex-col text-start text-lg-end">
                                <div className="flex mt-3 sm:mt-0 space-x-2">
                                  <button className="bg-[#eae8fd] text-[#7367f0] py-1.5 px-2.5 mr-3 rounded font-medium text-md" data-bs-toggle="modal" data-bs-target="#editCCModal">Edit</button>
                                  <button className="bg-[#eae8fd] text-gray-500 py-1.5 px-2.5 mr-3 rounded font-medium text-md">Delete</button>
                                </div>
                                <small className="mt-2 text-gray-600 sm:mt-auto">Card expires at 12/26</small>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#f9f9fa] border border-gray-100 p-3 rounded-md">
                            <div className="flex justify-between flex-col sm:flex-row">
                              <div className="card-information">
                                <img className="mb-3 img-fluid" src={postImag} alt="Master Card" />
                                <div className="flex items-center mb-2 space-x-2">
                                  <p className="mb-0 text-base mr-3 text-gray-500">Mildred Wagner</p>
                                </div>
                                <span className="text-gray-500">∗∗∗∗ ∗∗∗∗ 9856</span>
                              </div>
                              <div className="flex flex-col text-start text-lg-end">
                                <div className="flex mt-3 sm:mt-0 space-x-2">
                                  <button className="bg-[#eae8fd] text-[#7367f0] py-1.5 px-2.5 mr-3 rounded font-medium text-md" data-bs-toggle="modal" data-bs-target="#editCCModal">Edit</button>
                                  <button className="bg-[#eae8fd] text-gray-500 py-1.5 px-2.5 mr-3 rounded font-medium text-md">Delete</button>
                                </div>
                                <small className="mt-2 text-gray-600 sm:mt-auto">Card expires at 12/26</small>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        <div className="modal hidden fade" id="editCCModal"  aria-hidden="true">
                          <div className="modal-dialog modal-dialog-centered modal-simple modal-add-new-cc">
                            <div className="modal-content p-3 p-md-5">
                              <div className="modal-body">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center mb-4">
                                  <h3 className="mb-2">Edit Card</h3>
                                  <p className="text-muted">Edit your saved card details</p>
                                </div>
                                <form id="editCCForm" className="space-y-3"  >
                                  <div>
                                    <label className="w-full" htmlFor="modalEditCard">Card Number</label>
                                    <div className="relative">
                                      <input id="modalEditCard" name="modalEditCard" className="form-input w-full pr-12" type="text" placeholder="4356 3215 6548 7898" value="4356 3215 6548 7898" />
                                      <span className="absolute right-0 top-0 mt-2 mr-2">
                                        <span className="card-type-edit">
                                          <img src="../../assets/img/icons/payments/visa-cc.png" height="28" />
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="w-full md:w-1/2">
                                    <label htmlFor="modalEditName">Name</label>
                                    <input type="text" id="modalEditName" className="form-input w-full" placeholder="John Doe" value="John Doe" />
                                  </div>
                                  <div className="w-1/2 md:w-1/4">
                                    <label htmlFor="modalEditExpiryDate">Exp. Date</label>
                                    <input type="text" id="modalEditExpiryDate" className="form-input w-full" placeholder="MM/YY" value="08/28" />
                                  </div>
                                  <div className="w-1/2 md:w-1/4">
                                    <label htmlFor="modalEditCvv">CVV Code</label>
                                    <div className="relative">
                                      <input type="text" id="modalEditCvv" className="form-input w-full pr-12"  placeholder="654" value="XXX" />
                                      <span className="absolute right-0 top-0 mt-2 mr-2">
                                        <i className="ti ti-help text-gray-500"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="flex items-center">
                                      <input type="checkbox" className="form-check-input" />
                                      <span className="ml-2">Set as primary card</span>
                                    </label>
                                  </div>
                                  <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary me-1">Update</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>







                <div className="mb-4">

                    <Billing  />
                  </div>



           







   </div>   
)
};
export default BillingPage;