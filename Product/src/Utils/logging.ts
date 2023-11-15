const DEFAULT_NAMESPACE = "product server";

const info = (message: any, namespace?: string) => {
    if (typeof message === "string") {
        console.log(`[${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`);
    } else {
        console.log(`[${namespace || DEFAULT_NAMESPACE}] [INFO]`, message);
    }
};

const warn = (message: any, namespace?: string) => {
    if (typeof message === "string") {
        console.log(`[${namespace || DEFAULT_NAMESPACE}] [WARN] ${message}`);
    } else {
        console.log(`[${namespace || DEFAULT_NAMESPACE}] [WARN]`, message);
    }
};

const error = (message: any, namespace?: string) => {
    if (typeof message === "string") {
        console.log(`[${namespace || DEFAULT_NAMESPACE}] [ERROR] ${message}`);
    } else {
        console.log(`[${namespace || DEFAULT_NAMESPACE}] [ERROR]`, message);
    }
};

const logging = { info, warn, error };

export default logging;