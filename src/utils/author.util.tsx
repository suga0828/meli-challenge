import { Author } from '../definitions/author.types';

export const getAuthor = (): Author => {
  return {
    name: sessionStorage.getItem('name') || '',
    lastname: sessionStorage.getItem('lastname') || '',
  };
};
