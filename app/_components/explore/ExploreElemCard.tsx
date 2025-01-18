
import { AbstractIntlMessages } from 'next-intl';
import { Explore} from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    explore : Explore,
    locale : string,
    messages : AbstractIntlMessages

}
function ExploreElemCard({explore,locale,messages}:Props) {
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
  return (
    <>
    <div className="flex  bg-white dark:bg-[#111] border-b py-1   border-gray-200 dark:border-gray-700 shasdow-md rounnded-md">
      <div className="flex-20 ">
         {explore.image && <Image className=' w-9 rounded-md '
                        src={explore.image}
                        height={200}
                        width={200}
                        alt={explore.name!}
                    />}
        </div>
      {locale === 'en' ?
       <Link href={explore.url} className="mb-0 flex-80 text-gray-700 dark:text-gray-200 text-sm flex items-center">
                {explore.name}
        </Link>
        : 
            <Link  href={explore.url} className="mb-0 flex-80 text-gray-700 dark:text-gray-200 text-sm flex items-center">
                {explore.nameAr}
        
            </Link>
      }      
      </div>
     </>
  )
}
export default ExploreElemCard