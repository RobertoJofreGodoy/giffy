import './Gif.css'

export default function Gif( { id, title, url }) {
  return (
    <a key={id} className="gif" href={`#${id}`}>
      <h4>{title}</h4>
      <img src={url} alt={title} className="gif__image" />
    </a>
  );
}
