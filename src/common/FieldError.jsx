const FieldError = ({ message }) => {
  return (
    message && <p className="text-left text-danger text-xs mt-2">{message}</p>
  );
};

export default FieldError;
