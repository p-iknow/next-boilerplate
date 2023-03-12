import { useRouter } from 'next/router';

export type ParamKeys =
  | 'id'
	| 'id2'

/**
* @description In the case of pathParam, there is no chance of it being undefined,
* so we can cast it to a string type.
*
*/

export const usePathParam = (paramKey: ParamKeys) => {
  const { query } = useRouter();
  return query[paramKey] as string;
};
