

'use client'

import { useEffect, useState } from "react";

const marketsPage = async () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const themeSwitcher = document.querySelector('.theme-switcher');
        const htmlElement = document.documentElement;
        
        // Create an intersection observer
        const observer = new IntersectionObserver(
          ([entry]) => {
            const isVisible = entry.isIntersecting; // Check if the hero section is in view
    
            if (!isVisible) {
              // If the hero section is not visible
              themeSwitcher?.classList.add('bg-gray-800', 'border-gray-400');
              themeSwitcher?.classList.remove('bg-[#00000059]', 'border-gray-600');
            } else {
              // If the hero section is visible
              themeSwitcher?.classList.remove('bg-gray-800', 'border-gray-400');
              themeSwitcher?.classList.add('bg-[#00000059]', 'border-gray-600');
            }
          },
          {
            threshold: 0, // Trigger when the hero section starts to exit the viewport
          }
        );
    
        const heroSection = document.querySelector('.hero-section'); // Select the hero section
        if (heroSection) {
          observer.observe(heroSection); // Start observing the hero section
        }
    
        return () => {
          if (heroSection) {
            observer.unobserve(heroSection); // Cleanup observer on unmount
          }
        };
      }, []);


  return (
   <>
   <div className="w-full hero-section">
    
         <p className={``}>
         Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.


Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!
         </p>

     </div>
     <div className="mt-14">
        <p className="theme-switcher border-t-green-600">

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

Let me know the results from the debugging logs or if you discover anything strange during these steps!Additional Debugging:
If the issue persists even after checking the remounting and scroll position, another common issue could be something else in the app (such as a layout or navigation component) triggering an unwanted re-render or scroll reset.

        </p>
     </div>
     </>
  )
};
export default marketsPage;