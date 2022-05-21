# `html-webpack-plugin` issue demo

This repository aims to demonstrate an issue within `html-webpack-plugin` 5.5.0.

## TL;DR

Run

    npm start

Then see the incorrect document title of the opened page.

## The problem

When `output.publicPath` is specified in webpack configuration and running webpack dev server, the `html-webpack-plugin` won't replace template parameter placeholders in the template file.

## To reproduce

- Have a HTML template with this `<%= foo %>` placeholder in `<title>` tag
- Configure `html-webpack-plugin` configured to use this template and provide `templateParameter` values
- Specify `output.publicPath` option of webpack config
- Run `webpack serve` and inspect the output html in browser devtools
