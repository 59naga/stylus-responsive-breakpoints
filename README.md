`stylus-responsive-breakpoints`
---

<p align="right">
  <a href="https://npmjs.org/package/stylus-responsive-breakpoints">
    <img src="https://img.shields.io/npm/v/stylus-responsive-breakpoints.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/stylus-responsive-breakpoints">
    <img src="http://img.shields.io/travis/59naga/stylus-responsive-breakpoints.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/stylus-responsive-breakpoints">
    <img src="https://img.shields.io/gemnasium/59naga/stylus-responsive-breakpoints.svg?style=flat-square">
  </a>
</p>

a media queries of [stylus block mixins](http://stylus-lang.com/docs/mixins.html#block-mixins)

Installation
---

```bash
npm install stylus-responsive-breakpoints --save
```

Quoted articles
---
  * [Angular Material - Layout > Layout Containers](https://material.angularjs.org/latest/layout/container)
  * [Detect iPhone/iPad purely by css](http://stackoverflow.com/questions/3839809/detect-iphone-ipad-purely-by-css)

Usage
---

### Via CLI

```stylus
// index.styl
@import 'stylus-responsive-breakpoints'

+srb-portrait()
  body
    color white
```

```
stylus --use stylus-responsive-breakpoints index.styl
# @media (orientation: portrait) {
#   body {
#     color: #fff;
#   }
# }
```

### Via API

```js
import stylus from 'stylus';
import stylusResponsiveBreakpoints from 'stylus-responsive-breakpoints';

stylus(`
  +srb-portrait()
    body
      color white
`)
.use(stylusResponsiveBreakpoints())
.import('stylus-responsive-breakpoints')
.render((err, css) => {
  if (err) {
    throw err;
  }
  console.log(css);
  // @media (orientation: portrait) {
  //   body {
  //     color: #fff;
  //   }
  // }
});
```

Mixins
---

## `srb-portrait()`

```stylus
+srb-portrait()
  body
    color white
```

```css
@media (orientation: portrait) {
  body {
    color: #fff;
  }
}
```

## `srb-landscape()`

```stylus
+srb-landscape()
  body
    color white
```

```css
@media (orientation: landscape) {
  body {
    color: #fff;
  }
}
```

## `srb-xs()`

```stylus
+srb-xs()
  body
    color white
```

```css
@media (max-width: 599px) {
  body {
    color: #fff;
  }
}
```

## `srb-sm()`

```stylus
+srb-sm()
  body
    color white
```

```css
@media (min-width: 600px) and (max-width: 959px) {
  body {
    color: #fff;
  }
}
```

## `srb-md()`

```stylus
+srb-md()
  body
    color white
```

```css
@media (min-width: 960px) and (max-width: 1279px) {
  body {
    color: #fff;
  }
}
```

## `srb-lg()`

```stylus
+srb-lg()
  body
    color white
```

```css
@media (min-width: 1280px) and (max-width: 1919px) {
  body {
    color: #fff;
  }
}
```

## `srb-xl()`

```stylus
+srb-xl()
  body
    color white
```

```css
@media (min-width: 1920px) {
  body {
    color: #fff;
  }
}
```

## `srb-gt-xs()`

```stylus
+srb-gt-xs()
  body
    color white
```

```css
@media (min-width: 600px) {
  body {
    color: #fff;
  }
}
```

## `srb-gt-sm()`

```stylus
+srb-gt-sm()
  body
    color white
```

```css
@media (min-width: 960px) {
  body {
    color: #fff;
  }
}
```

## `srb-gt-md()`

```stylus
+srb-gt-md()
  body
    color white
```

```css
@media (min-width: 1280px) {
  body {
    color: #fff;
  }
}
```

## `srb-gt-lg()`

```stylus
+srb-gt-lg()
  body
    color white
```

```css
@media (min-width: 1920px) {
  body {
    color: #fff;
  }
}
```

## `srb-device-sm()`

```stylus
+srb-device-sm()
  body
    color white
```

```css
@media (max-device-width: 480px) {
  body {
    color: #fff;
  }
}
```

## `srb-device-md()`

```stylus
+srb-device-md()
  body
    color white
```

```css
@media (min-device-width: 481px) and (max-device-width: 1024px) {
  body {
    color: #fff;
  }
}
```

## `srb-device-lg()`

```stylus
+srb-device-lg()
  body
    color white
```

```css
@media (min-device-width: 1025px) {
  body {
    color: #fff;
  }
}
```

## `srb-gt-device-sm()`

```stylus
+srb-gt-device-sm()
  body
    color white
```

```css
@media (min-device-width: 481px) {
  body {
    color: #fff;
  }
}
```

## `srb-gt-device-md()`

```stylus
+srb-gt-device-md()
  body
    color white
```

```css
@media (min-device-width: 1025px) {
  body {
    color: #fff;
  }
}
```

Development
---
Requirement global
* NodeJS v5.11.0
* Npm v3.8.6

```bash
git clone https://github.com/59naga/stylus-responsive-breakpoints
cd stylus-responsive-breakpoints
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
