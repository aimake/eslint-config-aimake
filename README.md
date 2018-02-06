# eslint-config-aimake

ESlint rules for aimake with `[ 'ES5', 'ES.NEXT', 'React' ]` support.

> Based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## Install

`tnpm i eslint-config-aimake@latest -D`

## Usage

### ES5

```json
{
  "extends": "aimake",
  "env": {
    "browser": true
  }
}
```

### ES.NEXT

```json
{
  "extends": "aimake/es6",
  "env": {
    "browser": true
  }
}
```

### React

```json
{
  "extends": "aimake/react",
  "env": {
    "browser": true
  }
}
```

## Tips

 - If you use some experimental features with Babel, you may need [babel-eslint](https://github.com/babel/babel-eslint)

## Development

Edit rules in `rules` to override rules of Airbnb.

## Test

`npm test`
