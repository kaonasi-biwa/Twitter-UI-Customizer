use sourcemap_js::NRSourceMap;

fn main() {
    println!(
        "{:?}",
        NRSourceMap::new(&String::from_utf8(include_bytes!("../srcmap.js.map").to_vec()).unwrap())
            .lookup(1, 710)
    )
}
