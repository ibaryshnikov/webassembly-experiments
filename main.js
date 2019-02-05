async function main() {
    const module = await WebAssembly.instantiateStreaming(
        fetch('lib.wasm')
    );
    const { add } = module.instance.exports;
    console.log('add(2, 3) is', add(2, 3));

    const { memory, get_text, get_text_len } = module.instance.exports;

    const offset = get_text();
    const length = get_text_len();
    const stringBuffer = new Uint8Array(memory.buffer, offset, length);
    const text = new TextDecoder('utf-8').decode(stringBuffer);
    console.log(text);
}

window.addEventListener('load', () => {
    main()
        .then(console.log('wasm loaded'))
        .catch(e => console.log(e));
});
