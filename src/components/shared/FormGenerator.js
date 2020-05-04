import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { createYupSchema } from "./yupSchemaCreator";
import { Grid, Button, Icon, TextField, Container } from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { buildYup } from "json-schema-to-yup";

const yepSchema = yup.object().shape({
  firstName: yup.string().required(),
  // age: yup.number().required().positive().integer(),
  // website: yup.string().url(),
});

const FormGenerator = (props) => {
  // const yepSchema = props.fields.reduce(createYupSchema, {});
  // console.log(yepSchema);
  const { register, control, handleSubmit, errors } = useForm({
    validationSchema: yepSchema,
  });
  const onSubmit = (data) => console.log(data);

  const [selectedDate, handleDateChange] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  // const yepSchema = yup.object().shape({
  //   firstName: yup.string().required(),
  //   // age: yup.number().required().positive().integer(),
  //   // website: yup.string().url(),
  // });

  // const config = {
  //   // for error messages...
  //   errMessages: {
  //     age: {
  //       required: "A person must have an age",
  //     },
  //     email: {
  //       required: "You must enter an email address",
  //       format: "Not a valid email address",
  //     },
  //   },
  // };

  // const yupSchemaf = buildYup(json, config);
  // // console.dir(schema)
  // yupSchemaf
  //   .isValid({
  //     age: 24,
  //   })
  //   .then((valid) => console.log(valid));

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Container>
        {props.fields.map((field, index) => {
          switch (field.type) {
            case "text":
              return (
                <Grid container>
                  <TextField
                    id={index}
                    name={field.id}
                    label={field.label}
                    inputRef={register}
                    variant="outlined"
                    margin="normal"
                  />
                </Grid>
              );
            case "date":
              return (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container>
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
                  </Grid>
                </MuiPickersUtilsProvider>
              );
            default:
              return <></>;
          }
        })}

        <div style={{ color: "red" }}>
          <pre>
            {Object.keys(errors).length > 0 && (
              <label>Errors: {JSON.stringify(errors, null, 2)}</label>
            )}
          </pre>
        </div>
        <Grid container>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<Icon>send</Icon>}
          >
            SUBMIT
          </Button>
        </Grid>
      </Container>
    </form>
  );
};

FormGenerator.propTypes = {
  fields: PropTypes.array,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormGenerator);
