import { Dialog } from "primereact/dialog";
import React from "react";
import CallbackForm from "./CallbackForm";

function DialogForm({visible,setVisible}) {
  return (
    <>
      <div className="card flex justify-content-center bg_lightDark">
        <Dialog
          className="h-screen"
          draggable={false}
          closable={false}
          visible={visible}
          modal
          // style={{ width: "50rem" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <CallbackForm setVisible={setVisible} />
        </Dialog>
      </div>
    </>
  );
}

export default DialogForm;
