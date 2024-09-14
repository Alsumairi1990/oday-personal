import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Ghost, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
  
function DropDown1() {
  return (
    <>
    <DropdownMenu>
  <DropdownMenuTrigger>
    <Button
     variant="ghost"
     className='p-0 h-7 w-7 rounded-full'
    >
            <MoreVertical className='text-sm size-4 text-gray-600' />

    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
    {/* <DropdownMenuSeparator /> */}
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</>
  )
}

export default DropDown1