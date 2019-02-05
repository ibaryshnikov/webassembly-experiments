### Some experiments with webassembly js api and rust
The goal is to test different use cases, like passing strings,
numbers, objects, arrays from rust to js and vice versa.

### Requirements
- rust with **wasm32-unknown-unknown** target
- http server, I use the one from [crates.io](https://crates.io/crates/https), can be installed with `cargo install https`

### Build
```
rustc --crate-type=cdylib --target=wasm32-unknown-unknown lib.rs
```

Then run http server to see the results with the following command
```
http
```
