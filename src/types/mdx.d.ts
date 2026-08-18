declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types'
  import type { JSX } from 'react'

  const MDXComponent: (props: MDXProps) => JSX.Element
  export default MDXComponent
}
