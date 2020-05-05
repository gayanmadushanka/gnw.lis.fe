import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useForm, Controller } from "react-hook-form";
import { createYupSchema } from "./yupSchemaCreator";
import { Button, Icon, TextField, Container, Box } from "@material-ui/core";
import * as Yup from "yup";
import "./yup-phone";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const FormGenerator = (props) => {
  const { register, control, handleSubmit, errors } = useForm({
    validationSchema: Yup.object().shape(
      props.fields.reduce(createYupSchema, {})
    ),
  });
  const [selectedDate, handleDateChange] = React.useState();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      {props.fields.map((field, index) => {
        switch (field.type) {
          case "text":
            return (
              <Box width="100%">
                <TextField
                  id={index}
                  name={field.id}
                  label={field.label}
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
              </Box>
            );
          case "date":
            return (
              <Box width="100%">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Controller
                    as={
                      <KeyboardDatePicker
                        id={index}
                        label={field.label + " (dd/MM/yyyy)"}
                        autoOk
                        disableFuture
                        openTo="year"
                        views={["year", "month", "date"]}
                        inputVariant="outlined"
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    }
                    name={field.id}
                    control={control}
                    defaultValue={selectedDate}
                  />
                </MuiPickersUtilsProvider>
              </Box>
            );
          default:
            return <></>;
        }
      })}

      <Box width="100%" my={3}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<Icon>send</Icon>}
          size="large"
          fullWidth
        >
          SUBMIT
        </Button>
      </Box>
      <div style={{ color: "red" }}>
        <pre>
          {Object.keys(errors).length > 0 && (
            <label>Errors: {JSON.stringify(errors, null, 2)}</label>
          )}
        </pre>
      </div>
    </form>
  );
};

FormGenerator.propTypes = {
  fields: PropTypes.array,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormGenerator);
