import { getItem, getItems } from './product.service';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({}),
  });
}) as any;

describe('product service', () => {
  test('should fetch item', async () => {
    const id = 'MLA123';
    const response = await getItem(id);
    expect(response).toBeDefined();
  });

  test('should fetch items', async () => {
    const query = 'query';
    const response = await getItems(query);
    expect(response).toBeDefined();
  });
});
