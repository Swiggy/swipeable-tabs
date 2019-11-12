[![Build Status][build-shield]]()
[![MIT License][license-shield]][license-url]
[![Contributors][contributors-shield]]()
<img src="https://img.badgesize.io/shreya0712/swipeable-tabs/master/dist/index.js?style=for-the-badge&compression=gzip&label=gzip+size&max=8000&softmax=4000">
[![LinkedIn][linkedin-shield]][linkedin-url]

  <p align="center"><h2 align="center">Swipeable Tabs</h2></p>
  <hr/>

## Introduction

Easy to incorporate Tabs Component for React, where tabs can be switched by swiping across the screen, as well as the conventional clicking on tab names.

## Getting Started

### Prerequisites

Following Peer Dependencies are required for using this library:

- react: ^16.8.0
- @emotion/core: ^10.0.17,
- @emotion/styled: ^10.0.17,

### Installation

```
npm install @tarragon/swipeable-tabs --save
```

or

```
yarn add @tarragon/swipeable-tabs
```

## Usage

### Checkout the demo <a href="https://codesandbox.io/s/swipable-tabs-demo-0wpzm">here</a>.

Make sure to have a state variable to determine the current selected Tab

```javascript
const [selectedTab, setSelectedTab] = React.useState(0);
```

Import the Tabs component and pass the current selected tab value to it, along with onChange callback.
A number of Tab component can be passed as children of the Tabs component, to represent each of the Tab.

```javascript
<Tabs
  value={selectedTab}
  onChange={(value: string) => {
    setSelectedTab(parseInt(value));
  }}
  size="medium"
>
  <Tab label="Tab 1" key={0}>
    <div>Tab 1 Content</div>
  </Tab>
  <Tab label="Tab 2" key={1}>
    <div style={{ height: "300px" }}>Tab 2 content</div>
  </Tab>
  <Tab label="Tab 3" key={2}>
    <div>Tab 3 content</div>
  </Tab>
  <Tab label="Tab 4" key={3}>
    <div>Tab 4 content</div>
  </Tab>
</Tabs>
```

Design customizations and corresponding documentation coming soon.

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)

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
