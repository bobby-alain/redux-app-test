import { strTest } from '../helper/firstTest';

test('should return string', () => {
  const str = 'hello ';
  const result = strTest(str);

  expect(result).toBe(str + 'woof!');
});

test.todo('should not allow some stuff to be passed ');
