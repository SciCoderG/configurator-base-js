import "./YoutubeVideo.css";

export default function YoutubeVideo({ src, title, alt }) {
  return (
    <iframe
      origin={window.location.origin}
      src={src}
      title={title}
      alt={alt}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
