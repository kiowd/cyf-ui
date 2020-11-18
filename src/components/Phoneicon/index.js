import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);
export const PhoneEmoji = styled(FontAwesomeIcon)`
  color: gray;
  font-size: 24px;
  ${({ variant }) =>
    variant === "secondary" &&
    css`
      color: blue;
    `}
`;
export const CallEmoji = ({ variant }) => (
  <PhoneEmoji icon={faPhone} variant={variant} />
);
CallEmoji.propTypes = {
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.string,
};
