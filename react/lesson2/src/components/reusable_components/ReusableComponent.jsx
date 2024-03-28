import { useState } from 'react';
import '../../App.css'
import Button from './Button'
import Modal from './Modal'

const ReusableComponent = () => {
    const [open, setOpen] = useState(false)

    function openModal() {
        setOpen(true)
    }

    function closeModal() {
        setOpen(false)
    }

    return (
        <div>
            <h1>Текст</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: 20 }}>
                <Button fontSize="20px">
                    <h1>Нажми</h1>
                </Button>
                <Button color="#D8A2F5" fontSize="15px">Не нажимай</Button>
                <Button color="#DD65BA" fontSize="18px" onClick={openModal}>Открыть модалку</Button>

            </div>
            <Modal open={open} closeModal={closeModal}>
                <h1>Привет МИР!</h1>
                <Button fontSize="20px">
                    <h1>Нажми</h1>
                </Button>
            </Modal>
        </div>
    )
}

export default ReusableComponent;
