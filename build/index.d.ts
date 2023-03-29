import { useType } from "./tokenStore";
type exp = {
    use: (key: string) => useType;
    check: (key: string) => boolean;
    create: () => string;
};
declare const oneWayToken: exp;
export default oneWayToken;
export declare const check: (key: string) => boolean;
export declare const use: (key: string) => useType;
export declare const create: () => string;
//# sourceMappingURL=index.d.ts.map