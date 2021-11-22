export function log(...data: any): void {
    // @ts-ignore
    console.log.apply(console, arguments);
}
