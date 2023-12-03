"use client"
import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';


export default function AddBloodBank({visible,onClose}) {

    const [bloodBankAddress, setBloodBankAddress] = useState('');

    const handleOk = async () => {
      try {
        const response = await fetch('your-backend-api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bloodBankAddress }),
        });
  
        if (response.ok) {
          // Handle success
          console.log('Blood Bank added successfully!');
          setBloodBankAddress('');
          onClose();
        } else {
          // Handle error
          console.error('Failed to add Blood Bank');
        }
      } catch (error) {
        console.error('An error occurred while adding Blood Bank:', error);
      }
    };
  
    const handleCancel = () => {
      setBloodBankAddress('');
      onClose();
    };

  return (
    <Modal
    title="Add Blood Bank Address"
    visible={visible}
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="cancel" onClick={handleCancel}>
        Cancel
      </Button>,
      <Button key="submit" type="primary" className='bg-gray-800' onClick={handleOk}>
        Submit
      </Button>,
    ]}
  >
    <Input
      placeholder="Enter Blood Bank Address"
      value={bloodBankAddress}
      onChange={(e) => setBloodBankAddress(e.target.value)}
    />
  </Modal>
  )
}
