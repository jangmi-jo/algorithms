class Jukebox {
  constructor() {
    this.store = new Map();
    this.current = null;
  }

  addMusicToStore(title, music) {
    if (this.store.get(title)) {
      throw 'same title music already exists';
    } else {
      this.store.set(title, music);
    }
  }

  playRandomMusic() {
    // time: O(n)
    let rIdx = Math.random() * this.store.size;
    this.current = Array.from(this.store.keys())[rIdx];
  }

  playSelectedMusic(title) {
    this.current = this.store[title];
  }

  stopPlay() {
    this.current = null;
  }

  deleteMusicFromStore(title) {
    this.store.delete(title);
  }
}
