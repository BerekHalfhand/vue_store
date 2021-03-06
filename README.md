# Vue Store

Demo: http://vue-store.com.s3-website.us-east-2.amazonaws.com/

> Mock online store built on Vue

![screenshot](https://screenshotscdn.firefoxusercontent.com/images/b66cd570-b321-47f9-8b87-5f52c6dd2d8c.png)

**Current stack:**
* NuxtJS
  * VueJS
  * NodeJS
* Webpack
* Bootstrap 4
* Unit testing
  * Jest
* Sass

## Images notice

As the mock data is generated by `faker`, there is a side effect that happens on page reload - all the images change randomly, despite their URLs being the same.
If two object had identical images initially, they still will be identical - just different.

## Useful commands

To reset the store and the cart, in the browser console type:

`localStorage.clear();`

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
