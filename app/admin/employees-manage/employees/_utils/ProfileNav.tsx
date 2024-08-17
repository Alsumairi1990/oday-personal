'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname hook
import { LuUsers } from 'react-icons/lu';
import { GiTeamIdea } from 'react-icons/gi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

interface FormEditProps {
  id: string;
}

const ProfileHeader = ({ id }: FormEditProps) => {
  const pathname = usePathname(); // Get the current pathname

  // Helper function to check if a link is active
  const isActive = (linkPath: string) => pathname === linkPath;

  return (
    <div className="">
      <div className="py-2 px-2 flex  border border-gray-300 bg-white mx-auto rounded gap-x-2 items-center">
        <Link
          href={`/admin/employees-manage/employees/show/${id}/details`}
          className={`px-2 py-1 flex items-center gap-x-1 rounded text-gray-600  ${
            isActive(`/admin/employees-manage/employees/show/${id}/details`)
              ? 'bg-indigo-600 text-white' // Apply background color if the link is active
              : ''
          }`}
        >
          <span className="">
            <LuUsers className="text-xl capitalize" />
          </span>
          <span className="text-md capitalize">Details</span>
        </Link>

        <Link
          href={`/admin/employees-manage/employees/show/${id}/account`}
          className={`px-2 py-1 flex items-center gap-x-1 rounded text-gray-600 ${
            isActive(`/admin/employees-manage/employees/show/${id}/account`)
              ? 'bg-indigo-600 text-white' // Apply background color if the link is active
              : ''
          }`}
        >
          <span className="">
            <MdOutlineAccountBalanceWallet className="text-2xl capitalize" />
          </span>
          <span className="text-md capitalize">Account</span>
        </Link>

        <Link
          href={`/admin/employees-manage/employees/show/${id}/team`}
          className={`px-2 py-1 flex items-center gap-x-1 rounded text-gray-600  ${
            isActive(`/admin/employees-manage/employees/show/${id}/team`)
              ? 'bg-indigo-600 text-white' // Apply background color if the link is active
              : ''
          }`}
        >
          <span className="">
            <GiTeamIdea className="text-xl capitalize" />
          </span>
          <span className="text-md capitalize">Team</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileHeader;
