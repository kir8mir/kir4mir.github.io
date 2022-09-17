export const Navigation = (props) => {

  const {setModal} = props;

  return (
    <button
    className='button is-link is-large'
    onClick={() => setModal(true)}
  >
    CLICK
  </button>
  );
}