import {slh_dsa_shake_256s as $8gxuQ$slh_dsa_shake_256s} from "@noble/post-quantum/slh-dsa.js";


function* $d15f9f2b8d65930e$export$5ea962b8994ea59e(keys, { window: window = globalThis, atwork: atwork = window.atwork ?? [] } = {}) {
    for (const w of atwork){
        const msg = w.subarray((0, $8gxuQ$slh_dsa_shake_256s).lengths.signature);
        const sig = w.subarray(0, (0, $8gxuQ$slh_dsa_shake_256s).lengths.signature);
        a: for (const k of keys)if ((0, $8gxuQ$slh_dsa_shake_256s).verify(sig, msg, k)) {
            const decoded = new TextDecoder().decode(msg);
            if (decoded in window) yield window[decoded];
            break a;
        }
    }
}
function $d15f9f2b8d65930e$export$a976684a0efeb93f(payload, provider, { window: window = globalThis, atwork: atwork = window.atwork ??= [], defineProperty: defineProperty = Object.defineProperty } = {}) {
    const msg = payload.subarray((0, $8gxuQ$slh_dsa_shake_256s).lengths.signature);
    atwork.push(payload);
    const decoded = new TextDecoder().decode(msg);
    defineProperty(window, decoded, {
        value: provider,
        writable: false,
        enumerable: false,
        configurable: false
    });
}


export {$d15f9f2b8d65930e$export$5ea962b8994ea59e as crawl, $d15f9f2b8d65930e$export$a976684a0efeb93f as inject};
//# sourceMappingURL=index.js.map
