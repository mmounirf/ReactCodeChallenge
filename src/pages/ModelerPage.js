import React, { useEffect, useState } from "react";

import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "./ModelerPage.scss";
import EmptyDiagram from "../static/diagram.bpmn";
// export a modeler page component
// use the Modeler to instantiate a modeler instance

const InitModeler = () => {
  const viewer = new BpmnJS({
    container: "#container"
  });
  viewer.importXML(EmptyDiagram, err => {
    if (err) {
      console.log("error rendering", err);
    } else {
      console.log("rendered");
    }
  });
};

const ModelerPage = () => {
  const [bpmnCanvas, setBpmnCanvas] = useState(null);
  useEffect(() => {
    InitModeler();
  }, [bpmnCanvas]);

  return (
    <div className="modeler">
      <h1 className="modeler__title">Modeler</h1>
      <div className="modeler__container" id="container" />
    </div>
  );
};

export default React.memo(ModelerPage);
