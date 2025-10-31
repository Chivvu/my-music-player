import { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import Socials from '../components/Socials';
import Playlist from '../components/Playlist';
import Player from '../components/Player';

export default function Home({ theme, toggleTheme }) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch('/songs.json')
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.songs);
        if (data.songs && data.songs.length > 0) {
          setCurrentSong(data.songs[0]);
        }
      })
      .catch((err) => console.error('Error loading songs:', err));
  }, []);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
    if (currentIndex < songs.length - 1) {
      setCurrentSong(songs[currentIndex + 1]);
    } else {
      setCurrentSong(songs[0]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong?.id);
    if (currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
    } else {
      setCurrentSong(songs[songs.length - 1]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          🎥 My Music Player
        </h1>
        <div className="flex items-center gap-4">
          <Socials />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row gap-6 p-6">
        <div className="md:w-1/3">
          <Playlist
            songs={songs}
            currentSong={currentSong}
            onSongSelect={handleSongSelect}
          />
        </div>

        <div className="flex-1 flex items-center justify-center">
          {currentSong ? (
            <Player
              currentSong={currentSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              Select a song to play
            </div>
          )}
        </div>
      </main>
    </div>
  );
}