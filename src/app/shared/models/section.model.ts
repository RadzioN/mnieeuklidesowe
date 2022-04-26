import { Subsection } from "./subsection.model";

export interface Section {
    section: string;
    image: string;
    subsections: Subsection[];
}