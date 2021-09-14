import React, { lazy } from 'react'

type GetStaticProps<P = any> = () => Promise<P>

export function withInitialProps<P>(
  Comp: React.ComponentType<P>,
  getStaticProps: GetStaticProps<P>,
) {
  return lazy(
    () =>
      new Promise(async (resolve: any) => {
        const props = await getStaticProps()

        const WrapedComponent: React.FC = ({ children }) => (
          <Comp {...(props as P)}>{children}</Comp>
        )

        resolve({
          default: WrapedComponent,
        })
      }),
  )
}
