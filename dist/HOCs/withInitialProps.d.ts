import React from 'react';
declare type GetStaticProps<P = any> = () => Promise<P>;
export declare function withInitialProps<P>(Comp: React.ComponentType<P>, getStaticProps: GetStaticProps<P>): React.LazyExoticComponent<React.ComponentType<any>>;
export {};
//# sourceMappingURL=withInitialProps.d.ts.map