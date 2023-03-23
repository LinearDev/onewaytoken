import { create } from "./generate";
import { use, checkKey } from "./tokenStore";

export default {
    use: use,
    check: checkKey,
    create: create
}