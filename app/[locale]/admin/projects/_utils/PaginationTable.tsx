import React from 'react'


import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { ChevronLeft, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

function PaginationTable({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalPosts: any;
  postsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
       <div className="py-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious  onClick={() => handlePrevPage()} >
              </PaginationPrevious>
          </PaginationItem>
          {pages.map((page, idx) => (
            <PaginationItem
              key={idx}
              className={
                currentPage === page ? "bg-neutral-100 rounded-md" : ""
              }
            >
              
              <PaginationLink  
               className={`h-8 w-8 cursor-pointer hover:bg-indigo-600 ${
                currentPage === page ? 'bg-indigo-500  text-white' : 'text-gray-700 bg-gray-200'
              }`}
              // className={`bog-indigo-500 text-white h-8 w-8 ${ isActive ?'bg-gray-400':'bg'}`}  
               onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext onClick={() => handleNextPage()} >
            <ChevronRightIcon className="w-5 h-5" />
              </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>

    </>
  )
}

export default PaginationTable