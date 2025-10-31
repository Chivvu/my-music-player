import { FiPlay } from 'react-icons/fi';

export default function Playlist({ songs, currentSong, onSongSelect }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Playlist
      </h2>
      <div className="space-y-2 overflow-y-auto max-h-[60vh]">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSongSelect(song)}
            className={
              'cursor-pointer p-3 rounded-lg flex items-center gap-3 transition-all ' +
              (currentSong?.id === song.id
                ? 'bg-indigo-100 dark:bg-indigo-900 border-l-4 border-indigo-600'
                : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600')
            }
          >
            <div className="w-10 h-10 rounded flex items-center justify-center bg-indigo-200 dark:bg-indigo-800">
              {currentSong?.id === song.id ? (
                <FiPlay className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              ) : (
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                  {songs.indexOf(song) + 1}
                </span>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {song.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {song.artist}
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {song.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}