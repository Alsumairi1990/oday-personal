import { Element } from "./Element";

export interface NavsElement {
    id: string;
    title: string;
    icon: string;
    nav? : Element[];
}