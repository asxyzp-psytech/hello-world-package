//IMPORTING PACKAGES AND MODULES
import {Badge, Button} from 'mutter-test-package';

const App = () => {
  return (<>

    <h1 className="m-3 fw-bolder">hello-world-package test</h1>

    {/* TESTING BADGE COMPONENT */}
    <h2 className="ms-3 fw-bolder">Badges</h2>
    <Badge
      icon="bi bi-archive-fill"
      content={1}
      containerClass="m-3 d-inline-flex align-items-start"
      iconClass='bg-dark text-light h4 p-1 rounded'
      badgeClass='p-1 bg-danger text-light rounded small d-flex justify-content-center align-items-center'
      containerStyle={{ height: "fit-content", width: "fit-content" }}
      iconStyle={{ height: "fit-content", width: "fit-content" }}
      badgeStyle={{ height: "1.5em", width: "1.5em", marginLeft: "-10px", marginTop: "-10px" }} />

    <Badge
      icon="bi bi-inbox-fill"
      content={999}
      containerClass="m-3 d-inline-flex align-items-start"
      iconClass='bg-warning text-dark h4 p-1 rounded'
      badgeClass='p-1 bg-danger text-light rounded small d-flex justify-content-center align-items-center'
      containerStyle={{ height: "fit-content", width: "fit-content" }}
      iconStyle={{ height: "fit-content", width: "fit-content" }}
      badgeStyle={{ marginLeft: "-10px", marginTop: "-10px" }} />

    <Badge
      icon="bi bi-bag-fill"
      content={3}
      containerClass="m-3 d-inline-flex align-items-start"
      iconClass='bg-secondary text-light h4 p-1 rounded'
      badgeClass='p-1 bg-danger text-light rounded small d-flex justify-content-center align-items-center'
      containerStyle={{ height: "fit-content", width: "fit-content" }}
      iconStyle={{ height: "fit-content", width: "fit-content" }}
      badgeStyle={{ height: "1.5em", width: "1.5em", marginLeft: "-10px", marginTop: "-10px" }} />

    {/* TESTING BUTTON COMPONENT */}
    <h2 className="ms-3 fw-bolder">Buttons</h2>
    <Button classVal="m-3 p-1 ps-5 pe-5 fw-bold rounded bg-dark text-light lead shadow" style={{border: "0px", outline: "0px"}} text="Hello"/>
    <Button classVal="m-3 p-1 ps-5 pe-5 fw-bold rounded bg-warning text-dark lead shadow" style={{border: "0px", outline: "0px"}} text="World"/>
    <Button classVal="m-3 p-1 ps-5 pe-5 fw-bold rounded bg-primary text-light lead shadow" style={{border: "0px", outline: "0px"}} text="Package"/>
  </>);
};

export default App;
