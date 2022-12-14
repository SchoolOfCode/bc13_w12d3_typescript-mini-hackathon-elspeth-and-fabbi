
interface Props {
  onClick: () => void
}

function Button(props: Props) {

  const { onClick } = props;

  return (
    <div className="Button">
      <button onClick={onClick}>New Cat Image</button>
    </div>
  );
}

export default Button;