import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCAPTCHAWithRef = React.forwardRef<ReCAPTCHA, React.ComponentProps<typeof ReCAPTCHA>>(
  (props, ref) => {
    return <ReCAPTCHA ref={ref} {...props} />;
  },
);

ReCAPTCHAWithRef.displayName = 'ReCAPTCHAWithRef';

export default ReCAPTCHAWithRef;
