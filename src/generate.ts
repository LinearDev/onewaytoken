import { SHA256 } from "crypto-js";
import * as store from "./tokenStore";

class Token {
    create(): string {
        const phrase = String(Math.random() * Math.random() * 2 ** Math.random());
        const token: string = SHA256(phrase).toString();
        store.set(token);
        return token;
    }
}

const token = new Token();

export const create = (): string => {return token.create()}