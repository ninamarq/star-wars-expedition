interface IModalDeleteProps {
  handleClose: Function;
  handleDelete: Function;
  children: React.ReactNode;
}

export const ModalDelete: React.FC<IModalDeleteProps> = (
  props: IModalDeleteProps
) => {
  return (
    <div>
      <section className="modal-main">
        {props.children}
        <button onClick={() => props.handleClose()}>Cancel</button>
        <button
          onClick={(event) => {
            props.handleClose();
            props.handleDelete(event);
          }}
        >
          Delete
        </button>
      </section>
    </div>
  );
};
