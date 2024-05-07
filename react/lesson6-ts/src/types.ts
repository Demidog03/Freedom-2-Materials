import { Action } from "redux";

export interface ActionWithPayload extends Action {
    payload?: any
}

export interface Product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string
}