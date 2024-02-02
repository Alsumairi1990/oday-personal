import { PhaseStepInt } from "./PhaseStepInt";

export interface PhaseInt {

    id: string;
    name: string;
    desc: string;
    image: string;
    steps?: PhaseStepInt[];


}