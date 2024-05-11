import { useState, useRef } from "react";

const mimeType = 'video/webm; codecs="opus,vp8"';

const VideoRecorder = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const liveVideoFeed = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [recordedVideo, setRecordedVideo] = useState(null);
    const [videoChunks, setVideoChunks] = useState([]);

    const getCameraPermission = async () => {
        setRecordedVideo(null);

        if ("MediaRecorder" in window) {
            try {
                const videoConstraints = {
                    audio: false,
                    video: true,
                };
                const audioConstraints = { audio: true };

                const audioStream = await navigator.mediaDevices.getUserMedia(
                    audioConstraints
                );
                const videoStream = await navigator.mediaDevices.getUserMedia(
                    videoConstraints
                );

                setPermission(true);

                const combinedStream = new MediaStream([
                    ...videoStream.getVideoTracks(),
                    ...audioStream.getAudioTracks(),
                ]);

                setStream(combinedStream);

                liveVideoFeed.current.srcObject = videoStream;
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setRecordingStatus("recording");

        const media = new MediaRecorder(stream, { mimeType });

        mediaRecorder.current = media;

        mediaRecorder.current.start();

        let localVideoChunks = [];

        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localVideoChunks.push(event.data);
        };

        setVideoChunks(localVideoChunks);
    };

    const stopRecording = async () => {
        setPermission(false);
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();

        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }

        if (liveVideoFeed.current) {
            liveVideoFeed.current.srcObject = null;
        }

        mediaRecorder.current.onstop = async () => {
            const videoBlob = new Blob(videoChunks, { type: mimeType });
            const videoUrl = URL.createObjectURL(videoBlob);
            const formData = new FormData();
            formData.append('video', videoBlob, 'recorded_video.webm');

            try {
                const response = await fetch('http://localhost:5200/api/v1/output/video', {
                    method: 'POST',
                    body: formData,
                });

            } catch (error) {
                console.error('Error sending video data to backend:', error);
            }

            setRecordedVideo(videoUrl);
            setVideoChunks([]);
        };
    };

    return (
        <div>
            <h2>Video Recorder</h2>
            <main>
                <div className="video-controls">
                    {!permission ? (
                        <button onClick={getCameraPermission} type="button">
                            Get Camera
                        </button>
                    ) : null}
                    {permission && recordingStatus === "inactive" ? (
                        <button onClick={startRecording} type="button">
                            Start Recording
                        </button>
                    ) : null}
                    {recordingStatus === "recording" ? (
                        <button onClick={stopRecording} type="button">
                            Stop Recording
                        </button>
                    ) : null}
                </div>
            </main>

            <div className="video-player">
                {!recordedVideo ? (
                    <video ref={liveVideoFeed} autoPlay className="live-player"></video>
                ) : null}
                {recordedVideo ? (
                    <div className="recorded-player">
                        <video className="recorded" src={recordedVideo} controls></video>
                        <a download href={recordedVideo} className="download-link">
                            Download Recording
                        </a>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default VideoRecorder;