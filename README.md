[![npm](https://badgen.net/npm/v/tooltips-reactjs)](https://www.npmjs.com/package/tooltips-reactjs) 
[![Price](https://img.shields.io/badge/price-FREE-purple.svg)](https://github.com/Grulla-Software/tooltips-reactjs/blob/main/LICENSE.md) 
[![License: ISC](https://img.shields.io/badge/license-ISC-yellow.svg)](https://github.com/Grulla-Software/tooltips-reactjs/blob/main/LICENSE.md) 
[![GitHub package version](https://img.shields.io/badge/version-1.0.5-green.svg)](https://github.com/Grulla-Software/tooltips-reactjs)

[![Video text](https://github.com/Grulla-Software/tooltips-reactjs/blob/main/img/imgHeading.png)](https://drive.google.com/file/d/1gMG9pYt41gY909DnMhaJsiCXFjA-ZzWu/view?usp=sharing)

# tooltips-reactjs 🚀
Btn-badge-reactjs is an ideal button component to display additional information such as a message or notification counter or the number of products added to a shopping cart.
This component has been developed so that it is totally modifiable and can be adapted to the needs of the developer, allowing it to meet the requested requirements.
It is a lightweight component, very easy to use and elegant.
>This shows a button with a badge.

## Installing 🔧
To install the component use the Node Package Manager (npm).
You must open the command console at the root of your project and execute the command:
```
 npm install btn-badge-reactjs --save 
```

## Demo 💻

[Click me to go to the demo on codeSandbox!](https://codesandbox.io/embed/tooltips-reactjs-j3ymmk?fontsize=14&hidenavigation=1&theme=dark)


## Usage 🛠️

Here is an example of how to implement the component:

```jsx
import logo from './logo.svg';
import './App.css';
import BtnBadgesReactjs  from 'btn-badge-reactjs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Button Badge Component</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>btn-badge-reactjs</h2>
        <div className='container'>
          <div className='badge-containe'>
            <h4>Square badge outside button. </h4>
            <BtnBadgesReactjs 
              btnText={'Badge Default Button'} 
              badgeText ={'7'}
              callBack={(event)=>{ console.log(event)}}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Center Button'} 
              badgeText ={'4'}
              callBack={(event)=>{ console.log(event)}} 
              badgeWidth={'1'}
              badgeHeight={'1.2'}
              badgeOffsetY={'0.2'}
              badgeOffsetX={'-1'}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
              btnFontSize={'1.2'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Bottom Button'} 
              badgeText ={'2+'}
              callBack={(event)=>{ console.log(event)}}
              badgeOffsetY={'1.5'}
              badgeWidth={'1'}
              badgeBackground={'red'}
              btnBackground={'#8ac21c'}
              btnFontSize={'1.2'}
              btnHoverBackground={'red'}
              btnColor={'black'}
              btnHoverColor={'white'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={<i className="bi bi-bell" style={{fontSize: '1.5rem', color: "yellow"}}></i>} 
              badgeText ={'2+'}
              callBack={(event)=>{ console.log(event)}}
              badgeOffsetY={'1.5'}
              badgeWidth={'1'}
              btnFontSize={'1.2'}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
            />
            <br/>
          </div> 
          <div className='badge-containe'>
            <h4>Circle badge into button. </h4>
            <BtnBadgesReactjs 
              btnText={'Badge Top Button'} 
              badgeText ={'7'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius="50" 
              badgeWidth={'0.5'}
              badgeOffsetY={'0.1'}
              badgeOffsetX={'0.2'}
              badgeBackground={'#c715e0'}
              btnBackground={'#1e15e0'}
              btnFontSize={'1.2'}
              btnHoverBackground={'#c715e0'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Center Button'} 
              badgeText ={'4'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius="50" 
              badgeWidth={'0.5'}
              badgeOffsetY={'0.5'}
              badgeOffsetX={'0.2'}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
              btnFontSize={'1.2'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Bottom Button'} 
              badgeText ={'8'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius="50" 
              badgeWidth={'0.5'}
              badgeOffsetY={'1'}
              badgeOffsetX={'0.2'}
              badgeBackground={'red'}
              btnBackground={'#8ac21c'}
              btnFontSize={'1.2'}
              btnHoverBackground={'red'}
              btnColor={'black'}
              btnHoverColor={'white'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={<i className="bi bi-envelope" style={{fontSize: '1.5rem', color: "yellow"}}></i>} 
              badgeText ={'3'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius="50" 
              badgeWidth={'0.7'}
              badgeOffsetY={'0.5'}
              badgeOffsetX={'0.1'}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
              btnFontSize={'1.2'}
            />
            <br/>
          </div>
        </div>

      </header>
    </div>
  );
}
export default App;

```
<p align="center">
  <img src="https://github.com/Grulla-Software/tooltips-reactjs/blob/main/img/Video.gif" width ='100%'>
</p>

### Props of styles 📦

Props for component styles are displayed as a table with Name, Type, Default, and Description as headings.

**Required props are marked with `*`.**

| Name          | Type   | Default    | Description                                        |
| ------------- | ------ | ---------- | -------------------------------------------------- |
| `width`       |`string`| `150px`    | Indicates the width of tooltip component.          |
| `height`      |`string`| `30px`     | Indicates the height of tooltip component.         |
| `background`  |`string`| `#0000005b`| Indicates the background of tooltip component.     |
| `fontSize`    |`string`| `1rem`     | Indicates the text size of tooltip component.      |
| `color`       |`string`| `#fff`     | Indicates the text color of tooltip component.     |
| `borderRadius`|`string`| `3px`      | Indicates the border radius of tooltip component.   |

### Additional usage information 📋

Additional information about using the component pros.

- **width**: Use this prop to indicate the width of tooltip component. Specify this as a `string` and in pixel format ("30px") or percentage format ("10%").
- **height**: Use this prop to indicate the heightof tooltip component. Specify this as a `string` and in pixel format ("30px") or percentage format ("10%").
- **background**: Use this prop for indicate the background color of tooltip component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of color ("red").
- **fontSize**: Use this prop to indicate the size of text for tooltip component. Specify this as a `string` and in pixel format ("20px") or REM format ("1rem") or EM format ("1em") or the name of size("smaller", "medium", "large", " larger", "x-large", "xx-large").
- **color**: Use this prop for indicate the text color of tooltip component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of the color ("white").
- **borderRadius**: Use this prop for indicate the border radius of tooltip component. This value is indicated as a `string` and percentage format for example: "10%" or "50%".

### Props for functionality 📦

Props for component functionality are displayed as a table with Name, Type, Default, and Description as headers.

**Required props are marked with `*`.**

| Name      | Type         | Default | Description                                                   |
| --------- | -------      | ------- | ------------------------------------------------------------- |
| `text`\*  | `JSX.Element`| ` `     | Indicates the content that the tooltip component will display.|
| `type`    | `string`     | `top`   | Indicates the type of tooltip component.                      |
| `offsetY` | `number`     | `80`    | Indicates the Y-axis offset for tooltip component.        |
| `offsetX` | `number`     | `110`   | Indicates the X-axis offset for tooltip component.        |


### Additional usage information 📋

Additional information about using the component pros.

- **text**: Use this prop to indicate the content that the tooltip component will display. This must be indicated as a `string` or as an `html element`.
- **type**: Use this prop to indicate the type of the tooltip component. This must be given as a `string` and the supported values are `top` or `bottom` or `left` or `right`.
- **offsetY**: Use this prop indicates the Y-axis offset for tooltip component. This must be indicated as a `number` for example: 10 or 20 or 30.
- **offsetX**: Use this prop indicates the X-axis offset for tooltip component. This must be indicated as a `number` for example: 10 or 20 or 30.

## Authors ✒️

People who helped build the project from its inception

* **Marvin Calvo Acuña** - *Software Development* - [marvinjesus](https://github.com/MarvinJesus)
* **Marvin Calvo Acuña** - *Documentation* - [marvinjesus](https://github.com/MarvinJesus)

## License 📄

This project is licensed under the ISC License - see the file [LICENSE.md](LICENSE.md) for details.
