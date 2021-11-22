import { log } from "./logger";

rpc.exports = {
    main: main
}

Interceptor.attach(Module.getExportByName(null, "open"), {
    onEnter(args) {
        const path = args[0].readUtf8String();
        log(`open() path="${path}"`);
    }
});

function main() {
    log("Frida.version:", Frida.version)
}

setImmediate(main);