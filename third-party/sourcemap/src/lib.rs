use sourcemap::SourceMap;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct NRSourceMap {
    instance: SourceMap,
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct NRToken {
    source: String,
    pub line: u32,
    pub col: u32,
}

#[wasm_bindgen]
impl NRSourceMap {
    #[wasm_bindgen(constructor)]
    pub fn new(sourcemap: &str) -> Self {
        //sprintln!("{}", sourcemap);
        Self {
            instance: SourceMap::from_reader(sourcemap.as_bytes()).unwrap(),
        }
    }

    /// the line staring with 1, and the col starting with 0
    /// If you find a source that not exist in original source, this returns source name as "none"
    pub fn lookup(&self, line: u32, col: u32) -> NRToken {
        let token = self.instance.lookup_token(line - 1, col);
        match token {
            Some(token) => NRToken {
                source: token.get_source().unwrap().to_string(),
                line: token.get_src_line() + 1,
                col: token.get_src_col(),
            },
            None => NRToken {
                source: "none".to_string(),
                line,
                col,
            },
        }
    }
}

#[wasm_bindgen]
impl NRToken {
    #[wasm_bindgen(getter)]
    pub fn source(&self) -> String {
        self.source.clone()
    }
}
