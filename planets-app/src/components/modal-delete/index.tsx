import { styles as s } from "./styles";

interface IModalDeleteProps {
  handleClose: Function;
  handleDelete: Function;
}

export const ModalDelete: React.FC<IModalDeleteProps> = (
  props: IModalDeleteProps
) => {
  return (
    <s.ModalDelete>
      <section>
        <s.ModalHeader>
          <h3>Remove favorite</h3>
          <p onClick={() => props.handleClose()}>x</p>
        </s.ModalHeader>
        <p style={{ padding: "8px 16px" }}>
          Planet will be removed from favorites
        </p>
        <s.ModalButtonsContainer>
          <p onClick={() => props.handleClose()}>Cancel</p>
          <button
            onClick={(event) => {
              props.handleClose();
              props.handleDelete(event);
            }}
          >
            Remove
          </button>
        </s.ModalButtonsContainer>
      </section>
    </s.ModalDelete>
  );
};
