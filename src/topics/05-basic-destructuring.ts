interface AudioPlayer {
    audioVolume: number;
    songduration: number;
    song: string;
    details: Details;
};
interface Details {
    author: string;
    year: number;
};

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songduration: 36,
    song: "Mess",
    details: {
        author: 'ed sheeran',
        year: 2015
    }
}

const { song: theSong, songduration: duration, details } = audioPlayer;
const { author } = details;
console.log(theSong, duration, author);

export {};