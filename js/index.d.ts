export interface WorkProvider {
}
export type AtWorkCtx = {
    window?: any;
    atwork?: Uint8Array[];
};
export function crawl(keys: Uint8Array[], { window, atwork, }?: AtWorkCtx): Generator<WorkProvider, void, void>;
export function inject(payload: Uint8Array, provider: WorkProvider, { window, atwork, defineProperty, }?: AtWorkCtx & {
    defineProperty?: typeof Object.defineProperty;
}): void;

//# sourceMappingURL=index.d.ts.map
