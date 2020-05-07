import * as React from "react";
import styled from "styled-components";

/** Theme */
import { Myolor } from "./theme";
const Mycolor = {
  aqua: "#33cccc",
  grey: "#666",
  lightGrey: "#ccc",
  red: "#cc0000"
};


type ErrorMessageProps = {
  errorMessage: string | null;
};

const ErrorMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  color: ${Mycolor.red};
`;

const ErrorMessageContainer =(ErrorMessageProps)=> ({
  errorMessage
}) => {
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};

export default ErrorMessageContainer;