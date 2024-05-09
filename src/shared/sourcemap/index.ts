import init, {NRSourceMap} from "@third-party/sourcemap/dist/sourcemap_js";

//TODO: ChromeでWASMが動作するようする
/**
 * @experimental Does not work on Chrome
 */
export async function getSourceMap(sourcemapUrl: string, line:number, col:number) : Promise<string>{
  const _inst = await init();
  const nrSourceMap = new NRSourceMap(await (await fetch(sourcemapUrl)).text());
  const token = nrSourceMap.lookup(line,col);
  const source = token.source;
  const src_line = token.line;
  const src_col = token.col;
  token.free();
  nrSourceMap.free();
  return `${source}:${src_line}:${src_col}`;
}

export interface NRStack {
    funcName: string,
    sourcemapUrl: string,
    line: number,
    col: number
}

export async function parseErrorStringFF(stack:string): Promise<NRStack> {
    const [funcName, urlLineCol] = stack.split("@",2);

    const [moz_ext,url, line,col] = urlLineCol.split(":");

    return {
        funcName,
        sourcemapUrl: moz_ext + ":" + url + ".map",
        line: Number(line),
        col: Number(col),
    };

    //throwTestError@moz-extension://59481b91-5073-4ff5-9606-24dfcf0e60ea/index.js:3783:9
}


/**
 * @experimental getSourceMap does not work on Chrome
 */
export async function parseErrorStringCH(stack: string): Promise<NRStack> {
    //    at throwTestError (chrome-extension://cecnhkopjammcfjllglmcgdpacjnfeed/index.js:4032:9)
    const ch_ext_index = stack.indexOf("chrome-extension://");
    const funcName = stack.slice(0,ch_ext_index).replace(" at ","").trim();
    const urlLineCol = stack.slice(ch_ext_index, stack.length-2);

    const [ch_ext,url, line,col] = urlLineCol.split(":");

    return {
        funcName,
        sourcemapUrl: ch_ext + ":" + url + ".map",
        line: Number(line),
        col: Number(col),
    };
    // Uncaught (in promise) CompileError: WebAssembly.instantiateStreaming():
    //     at __wbg_load (index.js:3573:34)
    //     at __wbg_init (index.js:3618:38)
    //     at async getSourceMap (index.js:3622:3)
    //     at async index.js:3873:5


}