import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import { FaRegPlayCircle } from 'react-icons/fa';

export default function ModalVideo(props) {
    const [modal, setmodal] = useState(false)
    let movie = props.movie
    function ModalVideo(props) {
        return (
            <Modal
                size="lg"
                {...props}
                aria-labelledby="video-modal"
                centered
                className="video-modal text-center"
            >

                <iframe
                    style={{ padding: 0, margin: 0, width: "100%", height: "400px" }}
                    src={movie.trailer}

                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen

                />

            </Modal>
        );

    }
    return (
        <div>
            <a onClick={() => {
                setmodal(true)
            }} className="playButton"><FaRegPlayCircle /></a>
            <ModalVideo show={modal} onHide={() => setmodal(false)} />

        </div>
    );

}

