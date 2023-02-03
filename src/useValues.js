/* eslint-disable */
import { isEmpty } from "ramda";
import React from "react";

export const useValues = (name, props) => {
  React.useEffect(() => {
    props?.setFieldValue(name, { ...props.values }, false);
  }, [name, props.values]);
};
