[![Build Status][build-shield]]()
[![MIT License][license-shield]][license-url]
[![Contributors][contributors-shield]]()
<img src="https://img.badgesize.io/shreya0712/swipeable-tabs/master/dist/index.js?style=for-the-badge&compression=gzip&label=gzip+size&max=8000&softmax=4000">
[![LinkedIn][linkedin-shield]][linkedin-url]

  <p align="center"><h2 align="center">Swipeable Tabs</h2></p>

Easy to incorporate and highly customizable Tabs Component for React, where tabs can be switched by swiping across the screen, as well as the conventional clicking on tab names way. Supports all types of devices.

<div align="center">
<img src="https://media.giphy.com/media/fAatVk286W3DlYt1yq/giphy.gif" height="100px" width="100px">
</div>

## Getting Started

### Prerequisites

Following Peer Dependencies are required for using this library:

- <b>react</b>: ^16.8.0
- <b>@emotion/core</b>: ^10.0.17,
- <b>@emotion/styled</b>: ^10.0.17,

### Installation

```
npm install @tarragon/swipeable-tabs --save
```

or

```
yarn add @tarragon/swipeable-tabs
```

## Usage

### Examples

Checkout the basic usage <a href="https://codesandbox.io/s/swipeable-tabs-default-t6fim">here</a>.<br/>
Various customisations can also be added to the component like <a href="https://codesandbox.io/s/swipable-tabs-demo-0wpzm">this</a>.

### Quick Usage

Make sure to have a state variable to determine the current selected Tab

```typescript
const [selectedTab, setSelectedTab] = React.useState(0);
const changeTab: (selectedTab: {
  label: string;
  key: string | number;
}) => void = updatedTab => {
  setSelectedTab(updatedTab.label);
};
```

Import the <em>Tabs</em> component and pass the current selected tab value to it, along with onChange callback.
A number of <em>Tab</em> components can be passed as children of the <em>Tabs</em> component, to represent each of the tabs.

```tsx
<Tabs value={selectedTab} onChange={changeTab}>
  <Tab label="Tab 1" key={0}>
    <div>Tab 1 Content</div>
  </Tab>
  <Tab label="Tab 2" key={1}>
    <div>Tab 2 content</div>
  </Tab>
  <Tab label="Tab 3" key={2}>
    <div>Tab 3 content</div>
  </Tab>
  <Tab label="Tab 4" key={3}>
    <div>Tab 4 content</div>
  </Tab>
</Tabs>
```

## APIs

### `<Tabs />`

#### Import

```
import { Tabs } from "@tarragon/swipeable-tabs";
```

#### Props

<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Default</td>
<td>Description</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>-</td>
<td>Label of the current selected tab.</td>
</tr>
<tr>
<td>onChange</td>
<td>function</td>
<td>-</td>
<td>Tab change handler, return type: void, that receives the changed tab details, <code>{ label: string; key: string | number }</code> </td>
</tr>

<tr>
<td>styleProps</td>
<td><code>
{
  fontFamily?: string; </br>
  barColor?: string; </br>
  headerTextColor?: string; </br>
  selectedHeaderTextColor?: string; </br>
  alignHeader?: "left" | "center" | "right"; </br>
  showInkBar?: boolean; </br>
  inkBarColor?: string; </br>
  activeInkBarColor?: string; </br>
  size?: "large" | "medium" | "small"; </br>
  tabPosition?: "top" | "bottom"; </br>
  justifyTabs?: "start" | "space-evenly"; </br>
}</code></td>
<td><code>{
  fontFamily: "sans-serif", </br>
  barColor: "#8c7ae6", </br>
  headerTextColor: "#fff", </br>
  selectedHeaderTextColor: "#e6d5ec", </br>
  alignHeader: "center", </br>
  showInkBar: true, </br>
  inkBarColor: "white", </br>
  activeInkBarColor: "#82589F", </br>
  size: "medium", </br>
  tabPosition: "top", </br>
  justifyTabs: "space-evenly"
}</code></td>
<td>Design customisations</td>
</tr>
<tr>
<td>tabBarCSS</td>
<td>string</td>
<td>""</td>
<td>Stringified CSS to further customise the tab bar. example, <code>tabBarCSS = `border-color: red 1px solid; color: black` </code></td>
</tr>
<tr>
<td>tabItemCSS</td>
<td>string</td>
<td>""</td>
<td>Stringified CSS to further customise individual tab item in the tab bar. example, <code>tabItemCSS = `text-align: left` </code></td>
</tr>
<tr>
<td>blacklistedElement</td>
<td><code>{
    identifierType: "className" | "id" | "nodeName";<br/>
    identifierName: string;
  }</code></td>
<td>undefined</td>
<td>Enables blacklisting certain nodes where swipe action would be disabled. Can be used if a tab content has a horizontal scrolling element. </td>
</tr>
</table>

### `<Tab />`

To be passed as child of Tabs component, where each `<Tab/>` represents single tab, with its innerHTML as content of the tab

#### Import

```
import { Tab } from "@tarragon/swipeable-tabs";
```

#### Props

<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Default</td>
<td>Description</td>
</tr>
<tr>
<td>label</td>
<td>string</td>
<td>-</td>
<td>Label of individual tab item.</td>
</tr>
</table>

<br/>

### `<SwipeableViews />`

A Swipeable views component, that receives an array of elements as views, and enables horizontal swiping between them.

#### Import

```
import { SwipeableViews } from "./@tarragon/swipeable-tabs";
```

#### Props

<table>
<tr>
<td>Name</td>
<td>Type</td>
<td>Default</td>
<td>Description</td>
</tr>
<tr>
<td>views</td>
<td>JSX.Element[]</td>
<td>-</td>
<td>An array of elements, to be treated as views.</td>
</tr>
<tr>
<td>selectedView</td>
<td>number</td>
<td>0</td>
<td>Index of the view visible by default</td>
</tr>
<tr>
<td>onSwipe</td>
<td><code>(selectedTab: number) => void</code></td>
<td>-</td>
<td>Callback function to be invoked on swipe between tabs. <i>selectedTab</i> is index of the view currently visible. Should update the <i>selectedView</i> prop.</td>
</tr>
<tr>
<td>inkBarRef</td>
<td><code>React.RefObject< HTMLHRElement></code></td>
<td>-</td>
<td>Ref to an HR eleemnt, that can be used as an inkBar to denote position of current visible view</td>
</tr>
<tr>
<td>blacklistedElement</td>
<td><code>{
    identifierType: "className" | "id" | "nodeName";<br/>
    identifierName: string;
  }</code></td>
<td>undefined</td>
<td>Enables blacklisting certain nodes where swipe action would be disabled. Can be used if a tab content has a horizontal scrolling element. </td>
</tr>
</table>

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- ❤️

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->

[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=for-the-badge
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=for-the-badge
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077B5
[linkedin-url]: https://www.linkedin.com/in/shreya-tiwari/
[product-screenshot]: https://user-images.githubusercontent.com/4329912/59576904-0d7e5280-90df-11e9-868d-dec257ed1626.png
