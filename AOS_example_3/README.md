## Library used and taken from?
[![AOS - Animate on scroll library](https://s32.postimg.org/ktvt59hol/aos_header.png)](http://michalsnik.github.io/aos/)

## What the library does? 

- Small library to animate elements on your page as you scroll. 
- It is a CSS3 driven scroll animation library.
- AOS allows to animate elements on the website as you scroll down, and up.
- If you scroll back to top, elements will animate to it's previous state and are ready to animate again if you scroll down.

---

### Animations included in the library

There are several predefined animations you can use already:

  * Fade animations:
    * fade
    * fade-up
    * fade-down
    * fade-left
    * fade-right
    * fade-up-right
    * fade-up-left
    * fade-down-right
    * fade-down-left

  * Flip animations:
    * flip-up
    * flip-down
    * flip-left
    * flip-right

  * Slide animations:
    * slide-up
    * slide-down
    * slide-left
    * slide-right

  * Zoom animations:
    * zoom-in
    * zoom-in-up
    * zoom-in-down
    * zoom-in-left
    * zoom-in-right
    * zoom-out
    * zoom-out-up
    * zoom-out-down
    * zoom-out-left
    * zoom-out-right

### Anchor placement:

  * top-bottom
  * top-center
  * top-top
  * center-bottom
  * center-center
  * center-top
  * bottom-bottom
  * bottom-center
  * bottom-top


### Easing functions:

You can choose one of these timing function to animate elements nicely:

  * linear
  * ease
  * ease-in
  * ease-out
  * ease-in-out
  * ease-in-back
  * ease-out-back
  * ease-in-out-back
  * ease-in-sine
  * ease-out-sine
  * ease-in-out-sine
  * ease-in-quad
  * ease-out-quad
  * ease-in-out-quad
  * ease-in-cubic
  * ease-out-cubic
  * ease-in-out-cubic
  * ease-in-quart
  * ease-out-quart
  * ease-in-out-quart


---

## Why the library is useful? 

- This library is useful as it allows websites to incorporate scrolling animations. For instance, having an interactive recipe that displays steps in a more fun and animated way instead of the usual boring, static, text based recipes that somehow gets people lost all the time while reading. Animations in general contribute to making websites more lively and less dull. 

---

## What is the example 3 exploring?

- Example 3 uses the demo of the original AOS library http://michalsnik.github.io/aos/ as well as custom animations from this CodePen example that explores the same library https://codepen.io/michalsnik/pen/WxvNvE
- It explores how content can pop up while a static background is visible and how the animated content popping up using different animations can enhance engagement and interest from viewers.
- Taking the original demo with simply styled divs with text animating in on scroll, I incorporated graphics and more diverse animations to make the website come to life. Also tested how this function can be used in a real-life scenario useful for people, such as an interactive recipe. 

---

## Future improvements?

- If this is to ever be used professionally or for a purpose, perhaps adding modals to the items (ingredients) showing up and animating those with the same library as well. The modals would include text that narrates the steps for cooking for thoroughly than the graphics if the users would ever need them. 

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

- For example 3 Kornelia Papp was responsible.