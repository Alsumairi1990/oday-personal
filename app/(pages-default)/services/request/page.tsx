
import ContactForm from "@/app/_components/ContactForm";
const ServiceApp = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const imagePath1 = 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/contact.jpg';
    const imagePath2 = '/images/service2.png';
    const imagePath3 = "https://nextbigtechnology.com/wp-content/uploads/2021/07/contact-bottom.png"
    
   return (
      <div className="w-full p-0" >
         <div className=" h-full pb-4 sm:pb-0 left-0 bg-[#000000a6] flex px-4  fixed top-0 w-full bg-no-repeat bg-blend-multiply bg-center bg-cover z-[60]" style={{backgroundImage: `url(${imagePath1})`}}>
            <div className="w-full absolute  top-24  mx-auto z-[70]  -mt-10">
                <div className=" mx-auto w-11/12">
                <ContactForm />
                </div>
                
            </div>
         </div>
         </div>

   )
 };
 export default ServiceApp;