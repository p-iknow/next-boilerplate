
import { UrlQueryParams, useQueryParam } from '@/hooks';
import { usePathParam } from '@/hooks/usePathParm';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import tw from 'twin.macro';

interface Props {
  queryKey: string | null;
}

export const UseQueryParamPage:React.FC<Props> = () => {

  const id = usePathParam('id');
  const queryKey2  = useQueryParam('queryKey2') ?? 'default_queryKey2_value'

	return <div tw='flex justify-center items-center h-screen' >
    <div css={tw`text-center m-auto`}>id: {id}<br />queryKey2: {queryKey2}</div>
  </div>
}

/** ServerSide Case */
export const getServerSideProps: GetServerSideProps<Props, UrlQueryParams> = async (
  {params} : GetServerSidePropsContext<UrlQueryParams>
) => {

  //use null, because JSON string don't have undefined type and It make error
   const queryKey = params?.queryKey ?? null


  return {
    props: {
      queryKey,
      // Populate your component props here
    },
  };
};

export default UseQueryParamPage;
