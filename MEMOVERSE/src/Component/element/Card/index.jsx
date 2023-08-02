import classNames from "classnames";
import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <div
      className={classNames("bg-gradientCard bg-origin-border border-transparent rounded-lg backdrop-blur-3xl", className)}
      style={{ backgroundClip: "padding-box, border-box" }}
    >
      <div className="bg-gradientLight rounded-md">{children}</div>
    </div>
  );
};

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

export default Card;