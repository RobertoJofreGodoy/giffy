import './Gif.css'
import { Link } from 'wouter';

export default function Gif( { id, title, url }) {
  return (
    <Link key={id} className="gif" to={`/gif/${id}`}>
      <h4>{title}</h4>
      <img src={url} alt={title} className="gif__image" loading='lazy'/>
    </Link>
  );
}
