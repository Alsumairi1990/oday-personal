
import React from 'react';

import { ServiceInt1 } from '@/app/models/ServiceInt'


interface ServiceProps {
    service: ServiceInt1;
  }
const NavElement = ({ service } : ServiceProps) => {
    const publicURL = 'http://localhost:3000';
    const iconPath = `${publicURL}/images/svg/${service.icon}`;

  return (
    <div className="flex items-center  p-2">
        <img src={iconPath} className="w-6 mr-2 flex" />
        <span className="text-sm text-gray-600 font-medium capitalize ">{service.name}</span>
    </div>
  );
};

export default NavElement;