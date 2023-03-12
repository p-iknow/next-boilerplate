import { UrlQueryParams } from '@/hooks'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { isArray, isString } from 'remeda'
import tw from 'twin.macro'

interface Props {
  queryKey: string[] | null
}

export const UseQueryParamPage: React.FC<Props> = () => {
  const router = useRouter()
  const id = router.query.id
  const queryValue = router.query.queryKey

  if (!isString(id) || !isArray(queryValue)) {
    return null
  }

  return (
    <div tw="flex justify-center items-center h-screen">
      <div css={tw`text-center m-auto`}>
        id: {id}
        <br />
        queryKey2: {queryValue}
      </div>
    </div>
  )
}

/** ServerSide Case */
export const getServerSideProps: GetServerSideProps<Props, UrlQueryParams> = async ({
  params,
}: GetServerSidePropsContext<UrlQueryParams>) => {
  //use null, because JSON string don't have undefined type and It make error
  const queryKey = params?.queryKey ?? null

  return {
    props: {
      queryKey,
      // Populate your component props here
    },
  }
}

export default UseQueryParamPage
