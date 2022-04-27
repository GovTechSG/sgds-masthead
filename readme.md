# SGDS Masthead web component

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Quick start
### For Vanilla JS
Add the following code to your page.

```
<head>
    ...
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css">
    <script 
        type="module" 
        src="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.js">
    </script>
    ...
</head>

<body>
    ...
    <sgds-masthead></sgds-masthead>
    ...
</body>
```

### For ReactJS

Install the ```sgds-masthead-react``` package
```
npm i @govtechsg/sgds-masthead-react
```

in your App.tsx
```
import '@govtechsg/sgds-masthead/dist/sgds-masthead/sgds-masthead.css';
import { SgdsMasthead } from '@govtechsg/sgds-masthead-react';
```

In your render function
```
render(){
 return(
  <SgdsMasthead></SgdsMasthead>
  .
  .
  .
```

## Properties

| Property  | Attribute  | Description                                    | Type      | Default            |
| --------- | ---------- | ---------------------------------------------- | --------- | ------------------ |
| `chevron` | `chevron`  |                                                | `string`  | `"chevron-up.svg"` |
| `fluid`   | `fluid`    | for full width masthead, add attribute `fluid` | `boolean` | `undefined`        |
| `sgCrest` | `sg-crest` |                                                | `string`  | `"sg-crest.svg"`   |

## CSS Custom Properties

| Name                               | Description                                                        |
| ---------------------------------- | ------------------------------------------------------------------ |
| `--sgds-masthead-font-family`      | Primary font family. Default to system fonts.                      |
| `--sgds-masthead-link-color`       | Link color. Default to #4372d6.                                    |
| `--sgds-masthead-link-hover-color` | Link hover color. Default to #3a79ff.                              |
| `--sgds-masthead-tablet-font-size` | Font size for tablet view 1024px. Default to 0.75rem.              |
| `--sgds-masthead-tablet-padding-x` | Left and right padding for tablet view 1024px. Default to 1.25rem. |
