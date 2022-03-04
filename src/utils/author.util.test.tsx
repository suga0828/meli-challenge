import { Author } from '../definitions/author.types';

import { getAuthor } from './author.util';

describe('getAuthor', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  test('should get author from session storage', () => {
    sessionStorage.setItem('name', 'John');
    sessionStorage.setItem('lastname', 'Doe');

    const author: Author = getAuthor();

    expect(author.name).toBe('John');
    expect(author.lastname).toBe('Doe');
  });
});
