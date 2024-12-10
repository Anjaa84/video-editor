// import React, { useState } from "react";
// import ReactPlayer from "react-player";
// import { createFFmpeg } from "@ffmpeg/ffmpeg";

// // TypeScript: Define types for the trim parameters
// interface TrimParams {
//   start: number;
//   end: number;
// }

// const ffmpeg = createFFmpeg({ log: true });

// const VideoEditor: React.FC = () => {
//   const [videoSrc, setVideoSrc] = useState<string | null>(null);
//   const [videoFile, setVideoFile] = useState<File | null>(null);
//   const [trimmedVideo, setTrimmedVideo] = useState<string | null>(null);
//   const [isTrimming, setIsTrimming] = useState<boolean>(false);
//   const [trimParams, setTrimParams] = useState<TrimParams>({
//     start: 0,
//     end: 10,
//   });

//   // Load ffmpeg when the component is mounted
//   const loadFFmpeg = async (): Promise<void> => {
//     if (!ffmpeg.isLoaded()) {
//       await ffmpeg.load();
//     }
//   };

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setVideoFile(file);
//       const fileURL = URL.createObjectURL(file);
//       setVideoSrc(fileURL);
//     }
//   };

//   const handleTrim = async (): Promise<void> => {
//     if (!videoFile) return;
//     setIsTrimming(true);

//     await loadFFmpeg();

//     // Load the video file into ffmpeg
//     ffmpeg.FS("writeFile", "input.mp4", await fetchFile(videoFile));

//     // Run ffmpeg command to trim the video
//     await ffmpeg.run(
//       "-i",
//       "input.mp4",
//       "-ss",
//       `${trimParams.start}`,
//       "-to",
//       `${trimParams.end}`,
//       "-c",
//       "copy",
//       "output.mp4"
//     );

//     // Retrieve the trimmed video
//     const data = ffmpeg.FS("readFile", "output.mp4");
//     const trimmedBlob = new Blob([data.buffer], { type: "video/mp4" });
//     const trimmedURL = URL.createObjectURL(trimmedBlob);

//     setTrimmedVideo(trimmedURL);
//     setIsTrimming(false);
//   };

//   return (
//     <div>
//       <h1>Video Editor</h1>
//       <input type="file" accept="video/*" onChange={handleFileChange} />
//       {videoSrc && (
//         <div>
//           <h3>Original Video</h3>
//           <ReactPlayer url={videoSrc} controls={true} />
//         </div>
//       )}

//       {videoFile && (
//         <div>
//           <h3>Trim Video</h3>
//           <label>
//             Start Time:
//             <input
//               type="number"
//               value={trimParams.start}
//               onChange={(e) =>
//                 setTrimParams({ ...trimParams, start: Number(e.target.value) })
//               }
//             />
//           </label>
//           <label>
//             End Time:
//             <input
//               type="number"
//               value={trimParams.end}
//               onChange={(e) =>
//                 setTrimParams({ ...trimParams, end: Number(e.target.value) })
//               }
//             />
//           </label>
//           <button onClick={handleTrim} disabled={isTrimming}>
//             {isTrimming ? "Trimming..." : "Trim Video"}
//           </button>
//         </div>
//       )}

//       {trimmedVideo && (
//         <div>
//           <h3>Trimmed Video</h3>
//           <ReactPlayer url={trimmedVideo} controls={true} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoEditor;
