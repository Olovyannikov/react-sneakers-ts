/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;

    export { ReactComponent };
    export default content;
}

declare module "*.png" {
    const content: any;
    export default content;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}