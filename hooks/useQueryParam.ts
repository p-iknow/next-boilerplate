import { useRouter } from 'next/router';

export type UrlQueryParams = {
  'queryKey'?: string;
	'queryKey2'?: string | string[];
};

export const useQueryParam = <T extends keyof UrlQueryParams>(queryKey: T) => {
  const { query } = useRouter();
  return (query as UrlQueryParams)[queryKey];
};
