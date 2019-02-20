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

## Why the project is useful? 

- This library is useful as it allows websites to incorporate animations. For instance, displaying a menu of a restaurant and adding animated elements as you scroll through the menu, an interactive recipe, or some sort of "story-telling" website. The animations make the website appear less static and more engaging. 

---

## What is the example 5 exploring?

- Example 5 uses the demo of the original AOS library http://michalsnik.github.io/aos/ 
- It explores how content can pop up while a static background is visible and how the animated content popping up using different animations can enhance engagement and interest from viewers.
- Taking the original demo with simply styled divs with text animating in on scroll, I incorporated graphics and more diverse animations to make the website come to life. This example is different from the other one I created (interactive banana recipe) as it plays with an on-click event listener. However, the library does not respond to clicks, only scrolls, so I managed to cheat the system to make it appear like the animations are triggered by click by adding an event listener that scrolls down 800px on every click that shows the next row of graphics. 

---

## Future improvements?

- This isn't ever going to be a functional website, just something I thought would be fun to do. It's a Fruit bowl, nothing else. It's fun, and cute. Maybe the on-click event listener could be useful if someone else wants to animate objects on click instead of on scroll. 

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

- For example 5 Kornelia Papp was responsible.