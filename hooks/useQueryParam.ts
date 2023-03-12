import { useRouter } from 'next/router';

export type UrlQueryParams = {
	'queryKey'?: string[];
};

export const useQueryParam = <T extends keyof UrlQueryParams>(queryKey: T) => {
  const { query } = useRouter();
  return (query as UrlQueryParams)[queryKey];
};
