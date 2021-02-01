# Babel Increase Console

Plugin for increasing console log

## Installation

Install the plugin with:

```bash
npm i babel-increase-console -D
```

Then add the plugin to babel config:

```js
{
  "plugins": ["babel-increase-console"]
}
```

## Usages

```js
console.log(a) // output: console.log("a=", a);

console.log(this.some) // output: console.log("this.some=", this.some);

console.log(obj.some) // output: console.log("obj.some=", obj.some);
```

### it does not convert literal parameters

```js
console.log(false) // output: console.log(false);

console.log(1) // output: console.log(1);

console.log({ foo: "bar" }) // output: console.log({ foo: 'bar' });
```
