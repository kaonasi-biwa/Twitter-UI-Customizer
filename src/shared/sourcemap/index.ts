import init, { NRSourceMap } from "@third-party/sourcemap/dist/sourcemap_js";

export async function getSourceMap(sourcemapUrl: string, line: number, col: number): Promise<string> {
    const _inst = await init();
    const nrSourceMap = new NRSourceMap(await (await fetch(sourcemapUrl)).text());
    const token = nrSourceMap.lookup(line, col);
    const source = token.source;
    const src_line = token.line;
    const src_col = token.col;
    token.free();
    nrSourceMap.free();
    return `${source}:${src_line}:${src_col}`;
}

export interface NRStack {
    //funcName: string;
    sourcemapUrl: string;
    line: number;
    col: number;
}

interface FirefoxError extends Error {
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
}

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/stack
export async function parseErrorStringFF(e: FirefoxError): Promise<NRStack> {
    //const [funcName] = e.stack.split("@", 1);

    return {
        //funcName,
        sourcemapUrl: `${e.fileName}.map`,
        line: e.lineNumber,
        col: e.columnNumber,
    };

    //throwTestError@moz-extension://59481b91-5073-4ff5-9606-24dfcf0e60ea/index.js:3783:9
}

export async function parseErrorStringCH({ stack }: Error): Promise<NRStack> {
    //    at throwTestError (chrome-extension://cecnhkopjammcfjllglmcgdpacjnfeed/index.js:4032:9)

    //Error
    //    at TUICObserver.callback (chrome-extension://cddgdkhokflaphfccdiljnapfogpdiic/index.js:7282:13)
    //    at chrome-extension://cddgdkhokflaphfccdiljnapfogpdiic/index.js:7290:38

    const firstStack = stack.split("\n")[1];
    const ch_ext_index = firstStack.indexOf("chrome-extension://");
    //const funcName = firstStack.slice(0, ch_ext_index).replace("    at ", "").replace(" (", "");
    const endParensIndex = firstStack.indexOf(")", ch_ext_index);
    const urlLineCol = firstStack.slice(ch_ext_index, endParensIndex !== -1 ? endParensIndex : firstStack.length);

    const [ch_ext, url, line, col] = urlLineCol.split(":");

    return {
        //funcName,
        sourcemapUrl: `${ch_ext}:${url}.map`,
        line: Number(line),
        col: Number(col),
    };
}
