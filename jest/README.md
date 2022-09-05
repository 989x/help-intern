## Using Matchers
Jest uses "matchers" to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the expect API doc.

### Common Matchers

The simplest way to test a value is with exact equality.

```ts
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

In this code, expect(2 + 2) returns an "expectation" object. You typically won't do much with these expectation objects except call matchers on them. In this code, .toBe(4) is the matcher. When Jest runs, it tracks all the failing matchers so that it can print out nice error messages for you.

toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual instead:

```ts
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

toEqual recursively checks every field of an object or array.
