import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ ref, targetTime, remainingTime, onResetTime }) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stoped timer in <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" className="result-modal" onSubmit={onResetTime}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
