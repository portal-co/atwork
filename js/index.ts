import { slh_dsa_shake_256s } from "@noble/post-quantum/slh-dsa.js";
export interface WorkProvider {}
export type AtWorkCtx = { window?: any; atwork?: Uint8Array[] };
export function* crawl(
  keys: Uint8Array[],
  {
    window = globalThis,
    atwork = window.atwork ?? [],
  }: AtWorkCtx = {}
): Generator<WorkProvider, void, void> {
  for (const w of atwork) {
    const msg = w.subarray(slh_dsa_shake_256s.lengths.signature);
    const sig = w.subarray(0, slh_dsa_shake_256s.lengths.signature);
    a: for (const k of keys) {
      if (slh_dsa_shake_256s.verify(sig, msg, k)) {
        const decoded = new TextDecoder().decode(msg);
        if (decoded in window) yield window[decoded];
        break a;
      }
    }
  }
}
export function inject(
  payload: Uint8Array,
  provider: WorkProvider,
  {
    window = globalThis,
    atwork = (window.atwork ??= []),
    defineProperty = Object.defineProperty,
  }: AtWorkCtx & {
    defineProperty?: typeof Object.defineProperty;
  } = {}
) {
  const msg = payload.subarray(slh_dsa_shake_256s.lengths.signature);
  atwork.push(payload);
  const decoded = new TextDecoder().decode(msg);
  defineProperty(window, decoded, {
    value: provider,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}
