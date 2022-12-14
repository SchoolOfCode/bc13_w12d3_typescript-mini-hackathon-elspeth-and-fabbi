
interface Props {
  url: string
}

function Image(props: Props) {

  const { url } = props;

  return (
    <div className="App">
      <img src={url} alt="cat image"></img>
    </div>
  );
}

export default Image;