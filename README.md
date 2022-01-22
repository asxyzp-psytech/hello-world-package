# mutter-test-package

This is a test react package created by `@asxyzp`  which is to be primarily used for demostrating the process of development and publishing of react packages.

![Package ouptut](https://i.ibb.co/HY0dq20/mutter-test-package.png "Testing package's output")

## Available React Components
### 1. `<Badge/>`

**Utility:** Creating a badge component which consists of an icon such as mailbox or archive with the content or badge describing the number of items in it.<br/>
#### Import statement:
`import {Badge} from 'hello-world-package';`
#### Props:
**id (STRING)** Id of the badge component<br>
**icon (STRING)** Bootstrap icon class value for the badge icon<br>
**content (NUMBER)** Badge content which shows numerical associate with the badge component<br/>
**iconClass (STRING)** Class value for icon element of the badge component<br>
**badgeClass (STRING)** Class value for the badge content<br>
**containerClass (STRING)** Class value for the container containing both icon & content of badge component<br>
**iconStyle (OBJECT)** Styles for the badge icon<br>
**badgeStyle (OBJECT)** Styles for the badge content<br>
**containerStyle (OBJECT)** Styles for the container containing both icon & content of badge component<br>

#### Example
`<Badge
      icon="bi bi-archive-fill"
      content={1}
      containerClass="m-3 d-inline-flex align-items-start"
      iconClass='bg-dark text-light h4 p-1 rounded'
      badgeClass='p-1 bg-danger text-light rounded small d-flex justify-content-center align-items-center'
      containerStyle={{ height: "fit-content", width: "fit-content" }}
      iconStyle={{ height: "fit-content", width: "fit-content" }}
      badgeStyle={{ height: "1.5em", width: "1.5em", marginLeft: "-10px", marginTop: "-10px" }} />`
### 2. `<Button/>`

**Utility:** Creating a button component to display buttons.<br/>
#### Import statement:
`import {Button} from 'hello-world-package';`
#### Props:
**id (STRING)** Id of the button component<br>
**classVal (STRING)** Class value for button component<br>
**style (OBJECT)** Styles for the button component<br>
**text (STRING)** Text inside the button<br>

#### Example
`<Button classVal="m-3 p-1 ps-5 pe-5 fw-bold rounded bg-dark text-light lead shadow" style={{border: "0px", outline: "0px"}} text="Hello"/>`
## Available Scripts
### `npm start`
To test the package's output, you can run `npm start` which runs the app in the development mode and shows the two components (e.g. Badge & Button) on the screen. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.