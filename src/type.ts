export interface Collection {
    order: number;
}

export type Form = {
    sections: Sections;
};

export interface Section extends Collection {
    id: string | number;
    columns: number;
    fields: Field[];
    readonly: false;
}

export type Sections = Section[];

export interface Field extends Collection {
    id: number | string;
    name: string;
    label: string;
    type: "text" | "textarea" | "datetime" | "select";
    value: string;
    placeholder: string;
    readonly: boolean;
    validations?: Validations;
    columns?: number | "auto";
    options?: Options;
}

export type Fields = Field[];

export type Validation = {
    name: "required" | "minLength" | "maxLength";
    message: string;
    value: string | number;
};

export type Validations = readonly Validation[];

export type Option = {
    value: string | number;
    label: string;
};

export type Options = readonly Option[];
