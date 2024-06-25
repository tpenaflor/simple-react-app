interface Props {
  children: string;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children} is Selected
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
