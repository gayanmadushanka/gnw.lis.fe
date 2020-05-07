import * as Yup from "yup";
import * as googlePhoneNumber from "google-libphonenumber";

const phoneUtil = googlePhoneNumber.PhoneNumberUtil.getInstance();
const YUP_PHONE_METHOD = "phone";

Yup.addMethod(Yup.string, YUP_PHONE_METHOD, function (countryCode) {
  const { path } = this;
  return this.test(YUP_PHONE_METHOD, path, function (value) {
    const { createError } = this;
    try {
      if (!value) {
        return false;
      }
      const phoneNumber = phoneUtil.parseAndKeepRawInput(value, countryCode);
      if (!phoneUtil.isPossibleNumber(phoneNumber)) {
        return false;
      }
      return phoneUtil.isValidNumberForRegion(phoneNumber, countryCode);
    } catch (err) {
      return createError({ path, message: err.message });
    }
  });
});
