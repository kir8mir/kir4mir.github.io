import classNames from 'classnames';

export const Modal = (props) => {
  const { words, setModal, isModal } = props;

  return (
    <div
      className={classNames(
        'modal',
        { 'is-active': isModal })}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <div>
          <ul className='modal-words'>
            {words.map(word => (
              <li key={word.id}>{word.eng} - {word.rus}</li>
            ))}
          </ul>
        </div>

      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setModal(false)}
      ></button>
    </div>
  )
}