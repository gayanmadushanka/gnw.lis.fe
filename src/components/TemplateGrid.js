import React from "react";

import Template from "./Template";

const TemplateGrid = ({ templates }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
    {templates.map((template) => (
      <Template key={template.id} template={template} />
    ))}
  </div>
);

export default TemplateGrid;
