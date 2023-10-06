export {}

declare global {
    interface window {
        // eslint-disable-next-line @typescript-eslint/ban-types
        __REDUX_DEVTOOLS_EXTENSION__: Function
    }
}