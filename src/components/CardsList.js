import Card from "./Card"
import placeholderImage from "../assets/placeholder-1-1.webp";
import { useState } from "react";

export function CardsList({ numsCard, imageInfo, setImageInfo }) {
    const [showModal, setShowModal] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');

    const onEdit = (index) => {
        const newImages = [...imageInfo];
        fetch("https://picsum.photos/v2/list")
            .then((res) => res.json())
            .then((data) => {
                newImages[index] = data[Math.floor(Math.random() * 21 + 6)];
                setImageInfo(newImages);
            });
    };
    const handleDownload = (downloadUrl) => {
        setModalImageSrc(downloadUrl);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const onRemove = (index) => {
        const newImages = [...imageInfo];
        newImages[index] = { download_url: placeholderImage, author: "Seu Autor" };
        setImageInfo(newImages);
    };
    return (
        <div className="row bloco">
            {imageInfo.slice(0, numsCard).map((image, index) => {
                return (
                    <Card
                        key={index}
                        image={image}
                        onEdit={() => onEdit(index)}
                        onRemove={() => onRemove(index)}
                        onDownload={() => handleDownload(image.download_url)}
                    />
                );
            })}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog position-absolute top-50 start-50 translate-middle">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img src={modalImageSrc} alt="Imagem" style={{ width: '100%' }} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleCloseModal}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}