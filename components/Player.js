import { useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi';

export default function Player({ currentSong, isPlaying, setIsPlaying, onNext, onPrevious }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((e) => console.error('Playback error:', e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.url;
      if (isPlaying) {
        audioRef.current.play().catch((e) => console.error('Playback error:', e));
      }
    }
  }, [currentSong]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2lg p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {currentSong.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {currentSong.artist}
        </p>
      </div>

      <audio
        ref={audioRef}
        onEnded={onNext}
        className="w-full mb-6"
        controls
      />

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={onPrevious}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Previous song"
        >
          <FiSkipBack className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-4 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <FiPause className="w-8 h-8 text-white" />
          ) : (
            <FiPlay className="w-8 h-8 text-white" />
          )}
        </button>

        <button
          onClick={onNext}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Next song"
        >
          <FiSkipForward className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
}