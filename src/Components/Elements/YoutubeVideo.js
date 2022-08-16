import "./YoutubeVideo.css";

export default function YoutubeVideo({ src, title, alt }) {
  return (
    <div className="video-container">
      <iframe
        className="video"
        origin={window.location.origin}
        src={src}
        title={title}
        alt={alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
