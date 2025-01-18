
import { AbstractIntlMessages } from 'next-intl';
import { Explore} from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import ExploreElemCard from './ExploreElemCard';

interface Props {
    explores : Explore[],
    locale : string,
    messages : AbstractIntlMessages

}
function ExplorePanel({explores,locale,messages}:Props) {
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
 

  return (
    <div className='grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3'>
     {explores && explores.length > 0 &&
                      explores.map((explore) => (
                        <ExploreElemCard explore={explore} locale={locale} messages={messages} />
                      ))
                   }
     </div>
  )
}

export default ExplorePanel