import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm, FormSection } from "redux-form";

const FormGenerator = ({ sections }) => (
  <div>
    {sections.map((s) => (
      <div key={`section_${s.name}`}>
        <FormSection name={s.name} component="div">
          {/* {s.fields.map((f) => (
            <Field key={s.id} name={f.name} component="input" label={f.label} />
          ))} */}
        </FormSection>
      </div>
    ))}
  </div>
);

FormGenerator.propTypes = {
  sections: PropTypes.array,
};

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "contact",
  })(FormGenerator)
);
