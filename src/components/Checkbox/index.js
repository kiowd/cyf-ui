import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Check({ label, checked, onChange }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </StyledCheckbox>
  );
}
const StyledCheckbox = styled.div`
  color: "yellow";
  background: "blue";
  font-size: 18px;
`;
Check.propTypes = {
  checked: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Check;
