async function main() {
    const response = await fetch('main.wasm')
    const bytes = await response.arrayBuffer()

    const module
        = await WebAssembly.compile(bytes)
    const instance
        = await WebAssembly.instantiate(module)

    const linearMemory = instance.exports.memory

    const { add, multiply, get_text,
        get_text_len } = instance.exports
    console.log('add 2 3', add(2, 3))
    console.log('multiply 2 3', multiply(2, 3))

    const offset = get_text()
    const len = get_text_len()
    const stringBuffer
        = new Uint8Array(linearMemory.buffer, offset, len)

    const line = []
    for (let i = 0; i < stringBuffer.length; i++) {
        line[i] = String.fromCharCode(stringBuffer[i])
    }

    console.log('text is', line.join(''))

}
main()
    .then(() => console.log('wasm ex finished'))
    .catch(e => console.log(e))
