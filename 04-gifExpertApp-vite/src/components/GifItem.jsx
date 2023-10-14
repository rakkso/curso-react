import PropTypes from 'prop-types';

export default function GifItem( {title, url, id}) {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        GitItem</div>
  )
}

GifItem.protoTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

