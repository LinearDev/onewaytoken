import { create as createKey } from "./generate";
import { use as useKey, checkKey, useType } from "./tokenStore";

type exp = {
    use: (key: string) => useType,
    check: (key: string) => boolean,
    create: () => string
}

const oneWayToken: exp = {
    use: (key: string) => {return useKey(key)},
    check: checkKey,
    create: () => {return createKey()}
}

export default oneWayToken;
export const check = oneWayToken.check
export const use = oneWayToken.use
export const create = oneWayToken.create