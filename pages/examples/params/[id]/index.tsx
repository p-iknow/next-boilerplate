
import { UrlQueryParams, useQueryParam } from '@/hooks';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface Props {
  queryKey: string | null;
}

export const UseQueryParamPage:React.FC<Props> = () => {
  const queryKey2  = useQueryParam('queryKey2') ?? 'default_queryKey2_value'
	return <div>queryKey2: {queryKey2}</div>
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
