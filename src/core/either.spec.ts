import { Either, left, right } from './either';

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10);
  } else {
    return left('error');
  }
}

test('success result', () => {
  const result = doSomething(true);

  if (result.isRight()) {
    console.log(result.value);
  }

  expect(result.isRight()).toEqual(true);
  expect(result.isLeft()).toEqual(false);
});

test('error result', () => {
  const result = left('error');

  expect(result.isLeft()).toEqual(true);
  expect(result.isRight()).toEqual(false);
});
