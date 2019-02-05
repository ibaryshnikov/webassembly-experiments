use std::os::raw::c_char;
use std::ffi::CString;

#[no_mangle]
pub extern "C" fn add(a: u32, b: u32) -> u32 {
    a + b
}

static TEXT: &'static str = "Hello from Rust!";

#[no_mangle]
pub extern "C" fn get_text() -> *mut c_char {
    CString::new(TEXT)
       .unwrap()
       .into_raw()
}

#[no_mangle]
pub extern "C" fn get_text_len() -> usize {
    TEXT.len()
}
