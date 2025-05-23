# Immutable

## API

### `filter(target, predicate)`

```tsx
filter([1, 2, 3, 4], (n) => n % 2 === 0);

// => [2, 4]
```

### `map(target, callback)`

```tsx
map([1, 2, 3], (n) => n * 2);

// => [2, 4, 6]
```

### `mapEntries(target, callback)`

TODO: Document this function

### `merge(target, value)`

```tsx
merge({ a: 1, b: 2 }, { a: 42 });

// => { a: 42, b: 2 }
```

### `push(target, value)`

```tsx
push([1, 2], 3);

// => [1, 2, 3]
```

### `set(target, key, value)`

```tsx
set({ value: 42 }, 'value', 84);

// => { value: 84 }
```

### `setIn(target, ...keys, value)`

```tsx
setIn({ nested: { value: 42 } }, 'nested', 'value', 84);

// => { nested: { value: 84 } }
```

### `splice()`

TODO: Document this function

### `updateIn(target, ...keys, updater)`

```tsx
updateIn({ nested: { value: 42 } }, 'nested', 'value', (value) => value * 2);

// => { nested: { value: 84 } }
```

### `union(target, value)`

```tsx
union([1, 2, 3], [2, 4]);

// => [1, 2, 3, 4]
```
