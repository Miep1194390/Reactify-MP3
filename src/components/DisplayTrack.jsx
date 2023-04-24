import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} />
      <div>
        <div className="audio-image">
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div>
              <span>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div>
          <p>{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;