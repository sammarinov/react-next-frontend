declare namespace NodeJS {
  interface ProcessEnv {
    PROXY_MODE: string;
    STATIC_PATH: string;
    API_URL: string;
  }
}

declare namespace jest {
  interface Options {
    media?: string;
    modifier?: string;
    supports?: string;
  }

  interface Matchers<R> {
    toHaveStyleRule(property: string, value?: Value, options?: Options): R;
  }
}

declare module '*.gif' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}
