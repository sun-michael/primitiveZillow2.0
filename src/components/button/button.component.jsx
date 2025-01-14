import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {isLoading ? (
        // <div className="spinner-container" />
        <div class="spinner-border" role="status">
          <span class="sr-only">{/* Loading... */}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
