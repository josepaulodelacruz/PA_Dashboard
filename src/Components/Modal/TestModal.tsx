import Modal from "@mui/material/Modal";
import PrimaryButton from "../Button/PrimaryButton";
import BorderedButton from "../Button/BorderedButton";
import Grow from '@mui/material/Grow'
import { MainSpan, SubSpan } from "../Labels/Spans";


interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TestModal = ({ isOpen, onClose }: TestModalProps) => {
  return (
   <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
    >
      <Grow in={isOpen} mountOnEnter unmountOnExit>
        <div className='flex items-center justify-center min-h-screen' onClick={onClose}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col relative w-1/8 max-w-lg bg-white rounded-lg shadow-lg px-6 pt-4"
          >
            <div id='modal-header' className="flex-1">
              <MainSpan>Delete Item</MainSpan>
            </div>

            <div id='modal-body' className="flex-1">
              <SubSpan className="text-[0.85rem]">Are you sure you want to delete this Resident?</SubSpan>
            </div>

            <div id='modal-footer' className="flex justify-end py-4">
              <BorderedButton
                onClick={onClose}
              >CANCEL</BorderedButton>
              <div style={{ width: '10px' }} />
              <PrimaryButton>OKAY</PrimaryButton>
            </div>
          </div>
        </div>
      </Grow>
    </Modal>
  );
}

export default TestModal;