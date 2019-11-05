# @tarragon/swipeable-tabs

## Introduction

Easy to incorporate Tabs Component for React, where tabs can be switched by swiping across the screen, as well as the conventional clicking on tab names.

## Installation

```
npm install @tarragon/swipeable-tabs --save
```

or

```
yarn add @tarragon/swipeable-tabs
```

## Usage Example

Find Demo at https://codesandbox.io/s/swipable-tabs-demo-0wpzm

```javascript
const [selectedTab, setSelectedTab] = React.useState(0);
```

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

Design customizations coming soon.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
