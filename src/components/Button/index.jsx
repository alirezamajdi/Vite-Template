import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const HtmlTag = ({ href, children, ...other }) => {
  if (href)
    return (
      <Link to={href} {...other}>
        {children}
      </Link>
    );
  else
    return (
      <button type="button" {...other}>
        {children}
      </button>
    );
};

HtmlTag.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default function Button({
  children,
  href,
  className,
  onClick,
  disabled,
}) {
  return (
    <HtmlTag
      className={`rounded-xl bg-primary px-8 py-3 font-medium text-white shadow-box ${className}`}
      href={href}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </HtmlTag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
