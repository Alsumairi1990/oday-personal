'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link'
import { usePageTitle } from './PageTitleContext';

interface FormEditProps {
    id : string;
  }
const Breadcrumb = ({ id}: FormEditProps) => {
    const { title, setTitle } = usePageTitle();
 
  return (
    <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
    <Link href="/admin/employees-manage">
    Employee
    </Link>
    <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
    Profile
    <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
    <span className="text-gray-600 text-md capitalize">{title.title}</span>
 </div>
  )
};


export default Breadcrumb;
