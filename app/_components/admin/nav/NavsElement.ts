import { Element } from "./Element";

export interface NavElement {
    id: string;
    title: string;
    icon: string;
    nav? : Element[];
}