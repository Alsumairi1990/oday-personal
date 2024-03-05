import { ServiceInt1 } from "./ServiceInt";

export interface ServiceCategoryInt {
  
        id: string;
        name: string;
        desc: string;
        image: string;
        icon? : string;
        services?: ServiceInt1[];
    
 
}