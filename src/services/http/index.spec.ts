import { Http } from '.';

describe('Http request tests', () => {
  test('200 test', async () => {
    const result = await Http.Request<{ success: boolean }>('GET', '/200');
    expect(result.success).toEqual(true);
  });

  test('200 test with params', async () => {
    const result = await Http.Request<{
      name: string;
      age: number;
    }>('GET', '/person', {
      isKeyWorker: true,
    });
    expect(result).toEqual({
      name: 'John',
      age: 35,
    });
  });

  test('404 test', async () => {
    try {
      await Http.Request('GET', '/404');
    } catch (error) {
      expect(error.status).toEqual(404);
    }
  });

  test('Catch test', async () => {
    try {
      await Http.Request('GET', '');
    } catch (error) {
      expect(error.code).toBeUndefined();
    }
  });
});
