import React from "react";
import { Modal, Button } from "antd";

const EmptyTaskWarning = ({ isModalVisible, handleOk, handleCancel }: any) => {
    return (
        <>
            <Modal
                title="Empty Task Warning"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Ok
                    </Button>,
                ]}
            >
                You are trying close your task without name, enter the title and try
                again!
            </Modal>
        </>
    );
};

export default EmptyTaskWarning;
