import * as Yup from "yup";
import * as googlePhoneNumber from "google-libphonenumber";

const phoneUtil = googlePhoneNumber.PhoneNumberUtil.getInstance();

const YUP_PHONE_METHOD = "phone";

const isValidCountryCode = (countryCode) =>
  countryCode === "string" && countryCode.length === 2;

Yup.addMethod(Yup.string, YUP_PHONE_METHOD, function yupPhone(countryCode) {
  const errMsg = isValidCountryCode(countryCode)
    ? `${this.path} must be a valid phone number for region ${countryCode}`
    : `${this.path} must be a valid phone number.`;

  return this.test(YUP_PHONE_METHOD, errMsg, (value) => {
    const phoneNumber = phoneUtil.parseAndKeepRawInput(value, countryCode);
    if (!phoneUtil.isPossibleNumber(phoneNumber)) {
      return false;
    }
    return phoneUtil.isValidNumberForRegion(phoneNumber, countryCode);
  });
});
