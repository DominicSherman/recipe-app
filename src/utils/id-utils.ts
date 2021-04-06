import { useRouter } from 'next/router';

const getIdFromQuery = (id?: string | string[]): string => {
  if (!id || Array.isArray(id)) {
    return '';
  }

  return id;
};

export const useRouterId = (): [string, boolean] => {
  const router = useRouter();
  const id = getIdFromQuery(router.query.id);
  const idIsInvalid = !id.length || Array.isArray(id);

  return [id, idIsInvalid];
};
