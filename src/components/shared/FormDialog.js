import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";

import { closeForm } from "../../actions";
import FormGenerator from "./FormGenerator";

export default () => {
  const loadForm = useSelector((state) => state.loadForm);
  const dispatch = useDispatch();
  return (
    <Dialog open={loadForm} onClose={() => dispatch(closeForm())}>
      <FormGenerator />
    </Dialog>
  );
};
