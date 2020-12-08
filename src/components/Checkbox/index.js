import React from "react";
import PropTypes from "prop-types";

function Check({ label, checked, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      {label}
    </div>
  );
}
Check.propTypes = {
  checked: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Check;
