import { FunctionComponent } from "react";

export interface IRoute {
    path: string
    name: String
    visible: boolean
    component?: FunctionComponent
}