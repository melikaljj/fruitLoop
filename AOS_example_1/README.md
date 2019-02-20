## Library used and taken from?
[![AOS - Animate on scroll library](https://s32.postimg.org/ktvt59hol/aos_header.png)](http://michalsnik.github.io/aos/)

## What the project does? 

- Small library to animate elements on your page as you scroll. 
- It is a CSS3 driven scroll animation library.
- AOS allows to animate elements on the website as you scroll down, and up.
- If you scroll back to top, elements will animate to it's previous state and are ready to animate again if you scroll down.

---

## Why the project is useful? 

- This library is useful as it allows websites to incorporate animations on different websites such as portfolio, commercial , advertisement websites and etc.

---

## What is the example 1 exploring?

- Example 1 uses the following animation example from code pen: (http://michalsnik.github.io/aos/)
- It explores scroll speed and scroll duration when scrolling through the website. The speed code is from another code pen example: (https://codepen.io/JTParrett/pen/BkDie). The speed duration is from the AOS library.

---

# ⚙ Setup

### Install AOS

- Using `bower`

    ```bash
      bower install aos --save
    ```

- Using `npm`

    ```bash
      npm install aos --save
    ```

- Direct download -> [click here](https://github.com/michalsnik/aos/archive/master.zip)


### Link styles

```html
  <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
```

### Add scripts

```html
  <script src="bower_components/aos/dist/aos.js"></script>
```

AOS from version `1.2.0` is available as UMD module, so you can use it as AMD, Global, Node or ES6 module.

### Init AOS

```javascript
  <script>
    AOS.init();
  </script>
```

---

# How to use the code?

### Basic usage

  All you have to do is to add `data-aos` attribute to html element, like so:

```html
  <div data-aos="animation_name">
```

Script will trigger "animation_name" animation on this element, if you scroll to it.

---

## Who maintains and contributes to the project ?

- The contributions made to the overall project were Kornelia Papp, Therese Casio Persson, Josefine Lagerstedt and Melika Ljutovic.

---
## Who was responsible?

- For example 1 Josefine Lagerstedt was responsible.