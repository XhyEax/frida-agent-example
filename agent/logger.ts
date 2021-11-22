export function log(...data: any[]) {
    // @ts-ignore
    console.log.apply(console, arguments);
}

export function logw(...data: any[]) {
    // @ts-ignore
    console.warn.apply(console, arguments);
}

export function loge(...data: any[]) {
    // @ts-ignore
    console.error.apply(console, arguments);
}
