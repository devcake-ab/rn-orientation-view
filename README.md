# RN Orientation View

A lightweight react native component to handle orientation change.

## Install

```bash
npm i rn-orientation-view
```

```js
import OrientationView from 'rn-orientation-view';
```

## Usage

```js
<OrientationView
    landscapeStyles={{ flexDirection: 'row' }}
>
    ...
</OrientationView>
```


## Properties

* `style` (optional): you can override the default styles.
* `landscapeStyles` (optional): override the default landscapeStyles.
* `portraitStyles` (optional): override the default portraitStyles.
* `isAnimated` (optional): a bool flag indicating if the view should use Animated.View instead.

## Authors

* **Georgios Apostolidis** - [devCake](https://github.com/AKL-devCake-AB)

## License

This project is licensed under the MIT License
