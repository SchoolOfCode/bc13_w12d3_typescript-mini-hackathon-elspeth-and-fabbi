import "./Button.css";

interface Props {
  onClick: () => void
}

function Button(props: Props) {

  const { onClick } = props;

  return (
    <div className="Button">
      <button onClick={onClick}>New Cat Image and Fact</button>
    </div>
  );
}

export default Button;