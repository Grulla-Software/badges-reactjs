[![npm](https://badgen.net/npm/v/btn-badge-reactjs)](https://www.npmjs.com/package/btn-badge-reactjs) 
[![Price](https://img.shields.io/badge/price-FREE-purple.svg)](https://github.com/Grulla-Software/btn-badge-reactjs/blob/main/LICENSE.md) 
[![License: ISC](https://img.shields.io/badge/license-ISC-yellow.svg)](https://github.com/Grulla-Software/btn-badge-reactjs/blob/main/LICENSE.md) 
[![GitHub package version](https://img.shields.io/badge/version-1.0.2-green.svg)](https://github.com/Grulla-Software/btn-badge-reactjs)

[![Video text](https://github.com/Grulla-Software/btn-badge-reactjs/blob/main/img/imgHeading.png)](https://drive.google.com/file/d/1gMG9pYt41gY909DnMhaJsiCXFjA-ZzWu/view?usp=sharing)

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
              badgeWidth={1}
              badgeOffsetY={0.2}
              badgeOffsetX={-1}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
              btnFontSize={1.2}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Bottom Button'} 
              badgeText ={'2+'}
              callBack={(event)=>{ console.log(event)}}
              badgeOffsetY={1.5}
              badgeWidth={1}
              badgeBackground={'red'}
              btnBackground={'#8ac21c'}
              btnFontSize={1.2}
              btnHoverBackground={'red'}
              btnColor={'black'}
              btnHoverColor={'white'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={<i className="bi bi-bell" style={{fontSize: '1.5rem', color: "yellow"}}></i>} 
              badgeText ={'2+'}
              callBack={(event)=>{ console.log(event)}}
              badgeOffsetY={1.5}
              badgeWidth={1}
              btnFontSize={1.2}
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
              badgeBorderRadius={50}
              badgeWidth={0.5}
              badgeOffsetY={0.1}
              badgeOffsetX={0.2}
              badgeBackground={'#c715e0'}
              btnBackground={'#1e15e0'}
              btnFontSize={1.2}
              btnHoverBackground={'#c715e0'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Center Button'} 
              badgeText ={'4'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius={50} 
              badgeWidth={0.5}
              badgeOffsetY={0.5}
              badgeOffsetX={0.2}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
              btnFontSize={1.2}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={'Badge Bottom Button'} 
              badgeText ={'8'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius="50" 
              badgeWidth={0.5}
              badgeOffsetY={1}
              badgeOffsetX={0.2}
              badgeBackground={'red'}
              btnBackground={'#8ac21c'}
              btnFontSize={1.2}
              btnHoverBackground={'red'}
              btnColor={'black'}
              btnHoverColor={'white'}
            />
            <br/>
            <BtnBadgesReactjs 
              btnText={<i className="bi bi-envelope" style={{fontSize: '1.5rem', color: "yellow"}}></i>} 
              badgeText ={'3'}
              callBack={(event)=>{ console.log(event)}}
              badgeBorderRadius={50}
              badgeWidth={0.7}
              badgeOffsetY={0.5}
              badgeOffsetX={0.1}
              badgeBackground={'#0d6efd'}
              btnBackground={'#3d15e0'}
              btnFontSize={1.2}
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
  <img src="https://github.com/Grulla-Software/btn-badge-reactjs/blob/main/img/video.gif" width ='100%'>
</p>

### Props of styles 📦

Props for component styles are displayed as a table with Name, Type, Default, and Description as headings.

**Required props are marked with `*`.**

| Name                | Type   | Default  | Description                                               |
| --------------------| ------ | -------- | --------------------------------------------------------- |
| `badgeBackground`   |`string`| `#0d6efd`| Indicates the background color of the badge.              |
| `badgeColor`        |`string`| `#fff`   | Indicates the badge text color.                           |
| `badgeBorderRadius` |`number`| `10`     | Indicates the radius border of badge.                     |
| `badgeOffsetY`      |`number`| `1`      | Indicates the movement offset on the Y axis of the badge. |
| `badgeOffsetX`      |`number`| `-0.5`   | Indicates the movement offset on the X axis of the badge. |
| `badgeWidth`        |`number`| `1`      | Indicates the width of the badge.                         |
| `btnColor`          |`string`| `#fff`   | Indicates the text color of the button.                   |
| `btnBackground`     |`string`| `198754` | Indicates the background color of the button.             |
| `btnHoverColor`     |`string`| `#ffff`  | Indicates the text color of the button when hovering over the component.      |
| `btnHoverBackground`|`string`| `#0d6efd`| Indicates the background color of the button when hovering over the component.|
| `btnFontSize`       |`number`| `1`      | Indicates the text size of the button.                     |
| `btnBorderRadius`   |`number`| `3`      | Indicates the border radius of button.                     |

### Additional usage information 📋

Additional information about using the component pros.

- **badgeBackground**: Use this prop for indicate the background color of badge component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of color ("red").
- **badgeColor**: Use this prop for indicate the text color of badge component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of the color ("white").
- **badgeBorderRadius**: Use this prop for indicate the border radius of badge component. This value is indicated as a `number int or decimal`  for example:  1 or 0.5.
- **badgeOffsetY**: Use this prop indicates the Y-axis offset for badge component. This must be indicated as a `number int or decimal ` for example: 1 or 0.5.
- **badgeOffsetX**: Use this prop indicates the X-axis offset for badge component. This must be indicated as a `number int or decimal ` for example: 1 or 0.5.
- **badgeWidth**: Use this prop to indicate the width of the badge component. This value is indicated as an `whole number or decimal` for example: 1 or 0.5. The height of the component badge is assigned dynamically, based on the assigned width.

- **btnColor**: Use this prop for indicate the text color of button component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of the color ("white").
- **btnBackground**: Use this prop for indicate the background color of button component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of color ("red").
- **btnHoverColor**: Use this prop to indicate the text color of the button when hovering over the component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% )") or the name of color ("red")..
- **btnHoverBackground**: Use this prop to indicate the background color of the button when hovering over the component. Specify this value as a `string`, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of color ("red")
- **btnFontSize**: Use this prop to indicate the text size of the button. This must be indicated as a `number int or decimal ` for example: 1 or 0.5.
- **badgeBorderRadius**: Use this prop for indicate the border radius of the button component. This value is indicated as a `number int or decimal`  for example:  1 or 0.5.

### Props for functionality 📦

Props for component functionality are displayed as a table with Name, Type, Default, and Description as headers.

**Required props are marked with `*`.**

| Name         | Type         | Default | Description                                                  |
| ------------ | -------      | ------- | ------------------------------------------------------------ |
| `badgeText`\*| `JSX.Element`| ` `     | Indicates the content that the badge component will display. |
| `btnText`\*  | `JSX.Element`| ` `     | Indicates the content that the button component will display. |
| `callBack`\* | `function`   | ` `     | Indicates the callback function that will receive the click event of the button element.           |


### Additional usage information 📋

Additional information about using the component pros.

- **badgeText**: Use this prop to indicate the content that the badge component will display. This must be indicated as a `string` or as an `html element`.
- **btnText**: Use this prop to indicate the content that the button component will display. This must be indicated as a `string` or as an `html element`.
- **callBack**: Use this prop to indicate the callback function for the click event of the button component. This must be indicated as a `function` and must receive a parameter.

## Authors ✒️

People who helped build the project from its inception

* **Marvin Calvo Acuña** - *Software Development* - [marvinjesus](https://github.com/MarvinJesus)
* **Marvin Calvo Acuña** - *Documentation* - [marvinjesus](https://github.com/MarvinJesus)

## License 📄

This project is licensed under the ISC License - see the file [LICENSE.md](LICENSE.md) for details.
