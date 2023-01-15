// refer: https://github.com/ben-rogerson/twin.examples/blob/master/next-emotion-typescript/pages/_document.tsx

import type { AppProps } from 'next/app'
import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from '@/styles/global-styles'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}
const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default App
