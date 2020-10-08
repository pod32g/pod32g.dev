import { FunctionComponent } from "react";

export interface IRoute {
    path: string
    name: String
    visible: boolean
    protected?: boolean
    scrollable?: boolean
    component?: FunctionComponent
}