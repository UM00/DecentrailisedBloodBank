"use client"
import React, { useState } from 'react';
import { Modal, Input, Button } from 'antd';

export default function DonateBlood({visible,onClose}) {

    const [bloodType, setBloodType] = useState('');

    const handleOk = async () => {
      try {
        // Perform validation if needed
        if (!bloodType) {
          console.error('Blood Type is required.');
          return;
        }
        // Perform your fetch here to send the blood type to the backend
        const response = await fetch('http://localhost:3001/transferBlood', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bloodType }),
        });
  
        if (response.ok) {
          // Handle success
          console.log('Blood Type added successfully!');
          setBloodType('');
          onClose();
        } else {
          // Handle error
          console.error('Failed to add Blood Type');
        }
      } catch (error) {
        console.error('An error occurred while adding Blood Type:', error);
      }
    };
  
    const handleCancel = () => {
      setBloodType('');
      onClose();
    };

  return (
    <>
      <Modal
      title="Add Blood Type"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" className='bg-gray-700' onClick={handleOk}>
          Submit
        </Button>,
      ]}
    >
      <Input
        placeholder="Enter Blood Type"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
      />
    </Modal>
    </>
  )
}
