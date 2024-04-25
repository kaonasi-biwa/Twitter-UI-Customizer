/* tslint:disable */
/* eslint-disable */
/**
*/
export class NRSourceMap {
  free(): void;
/**
* @param {string} sourcemap
*/
  constructor(sourcemap: string);
/**
* the line staring with 1, and the col starting with 0
* If you find a source that not exist in original source, this returns source name as "none"
* @param {number} line
* @param {number} col
* @returns {NRToken}
*/
  lookup(line: number, col: number): NRToken;
}
/**
*/
export class NRToken {
  free(): void;
/**
*/
  col: number;
/**
*/
  line: number;
/**
*/
  readonly source: string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_nrsourcemap_free: (a: number) => void;
  readonly __wbg_nrtoken_free: (a: number) => void;
  readonly __wbg_get_nrtoken_line: (a: number) => number;
  readonly __wbg_set_nrtoken_line: (a: number, b: number) => void;
  readonly __wbg_get_nrtoken_col: (a: number) => number;
  readonly __wbg_set_nrtoken_col: (a: number, b: number) => void;
  readonly nrsourcemap_new: (a: number, b: number) => number;
  readonly nrsourcemap_lookup: (a: number, b: number, c: number) => number;
  readonly nrtoken_source: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
