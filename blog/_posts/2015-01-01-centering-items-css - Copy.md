---
layout: post
title: Centering Items in CSS
tags: css3
category: [Front-End, Design]
---
In this tutorial I will demonstrate two useful techniques to center any item in any orientation. After this tutorial you will be able to center any item :

* horizontally (center_h)
* vertically ( center_v)
* dead center ( center-center)

**Problem**: Say you have a div element called box. The box has fixed height and width like so:

```css
.box {
height: 100px;
width: 100px;
background: red;
}
```

You want to position the box right at the center of the page. Is there a native css attribute that ican use to achieve this. Unfortunately there isn't an native attribute, like text alighn, that can be tweeked that works across older browsers. Flexible boxes are a good candidate but they are a recent inovation, see [caniuse](http://caniuse.com/felxiblebox). So what are your options?

![CenteredImage](public/img.jpg)
The red circle is centered relative to flexbox-center(blue). The 3 red squares are centered relative to body. Note that the square in the center (center-center) may look purple because its covered by the flexbox

## Using Margin auto
###Center horizontally:

First off  centring horizontally is pretty straight forward  we set
```css
margin : 0 auto;
```

Which lets the browser auto update left and right margin values like so:
>*margin-left = margin-right = (containterWidth - boxWidth)/2*

```css
.center-h {
margin: 0 auto;
}
```
##Center vertically
Unfortunatly you can't set **margin-top = margin-bottom = auto** to center vertically. This doesnt work.

It turns out that this is imposible due to the fact that the auto property will always use the width not the height of the element.

##Using Margin Offsets and absolute positioning

Using margin offsets is tried and tested technique and it works well.
You set positioning to absolute and set left/top to 50%. The trick is to offset the margin by half of the boxes dimensions. eg. you wanted to center the box vertically you would set *margin-top: -50px*.

###Center horizontally:

```css
.center-h {
/* we want the use % reletive to width of screen, not container */
 position:absolute;
 margin:0 0 0 -50px; /* offset by half the width of box  */
 left: 50%;
}
```

###Center vertically:

```css
.center-v {
 position: absolute;
 margin: -50px 0 0 0;
 top: 50%;
}
```

###Center both axis:

```css
.center-center {
position:absolute;
margin:-50px 0 0 -50px;
left: 50%;
top: 50%;
}
```

##Using Flexible boxes

Flexible boxes are a more recent addition to CSS3. It is intended for creating responsive layouts that behave in a predictable way across varying screen sizes. Flexible box is a layout mode, to use it on any element you just set *display: flex;*

###Horizontal flexbox center

To center horizontally only  Any child of this flex container will be horizontally centered

```css
.flexbox-center-h {
 display: flex;
 flex-direction: column;
 align-items: center;
}
```
###Vertical flexbox center

For vertical centering  Similarly any child of this flex container will be vertically centered

```css
.flexbox-center-v {

 display: flex;
 flex-direction: row;
 align-items: center;
}
```

###Center both axis using flexbox:

```css
/*
 * items will be centered vertically/horizontally
 * depending on flex-direction
 */
 .flexbox-center {
   display: flex;
   flex-direction: column;
   align-items: center;
}
```
To put the item dead center we’ll need to include the following code in the child element:

```
/* this centers flex items in the middle*/
.flex-item-center {
  margin: auto;
}
```