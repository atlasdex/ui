
import { ReactNode } from 'react';
import Modal from 'react-bootstrap/Modal'
import Div from 'components/DivComponent';
interface ModalProps {
    size?: 'sm' | 'lg' | 'xl' | undefined;
    show?: boolean;
    onHide?: () => void;
    onClick?: () => void;
    contentClassName?: string;
    animation?: boolean;
    centered?: boolean;
    backdrop?: 'static' | true | false;
    header?: ReactNode;
    bodyContent?: ReactNode;
    footer?: ReactNode;
    scrollable?: boolean;
    modalClasses? : string;

}
const CustomModal: React.FC<ModalProps> = (props: ModalProps) => {
    const { show, size, onHide, modalClasses, contentClassName, animation, centered, backdrop, scrollable, header, bodyContent, footer } = props;
    return (
        <>
        <Modal
                size={size}
                show={show}
                onHide={onHide}
                contentClassName={contentClassName}
                backdrop={backdrop}
                scrollable={scrollable}
                aria-labelledby="example-modal-sizes-title-sm"
                centered={centered}
                animation = {animation}
                className = {modalClasses}
            >
                <Div classes = "modal-bg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        {header && header}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {bodyContent && bodyContent}
                </Modal.Body>
                {footer && <Modal.Footer>{footer}</Modal.Footer>}
                </Div>
               
            </Modal>
           
        </>
    )
}

export default CustomModal