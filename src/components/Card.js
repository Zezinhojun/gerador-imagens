import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ image, onEdit, onRemove, onDownload, placeholderImage }) {

    const isPlaceholderImage = image.download_url.includes('placeholder');
    return (
        <div className="col-3 text-center mt-5">
            <div className="card">
                <div className="position-absolute top-0 start-0">
                    <button className="btn editar" onClick={onEdit}>
                        <FontAwesomeIcon icon={faPen} style={{ color: "#3249cc" }} size="xl" />
                    </button>
                </div>
                <div className="position-absolute top-0 end-0">
                    <button className="btn remover" onClick={onRemove}>
                        <FontAwesomeIcon icon={faTrashCan} size="xl" style={{ color: "#3249cc" }} />
                    </button>
                </div>
                <img src={image.download_url} className="card-img-top img-thumbnail d img-fluid w-100 h-100"
                    alt="" />
                <p className="h3 author">{image.author}</p>
                <button className="btn btn-primary btn-sm" onClick={onDownload} disabled={isPlaceholderImage}>Download</button>
            </div>
        </div>
    )
}