import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  fetchCustomerNames,
  updateCustomerName,
} from '../../redux/customerName/action';

import Button from '../../component/Button';
import Input from '../../component/Input';
import Card from '../../component/Card';
import { CustomerName } from '../../redux/customerName/type';

const CustomerNamePage: React.FC = () => {
  const dispatch = useDispatch();
  const customerNames = useSelector(
    (state: RootState) => state.customerName.data
  );
  const loading = useSelector((state: RootState) => state.customerName.loading);

  // const getState = () =>
  //   customerNames.reduce((acc, cur) => {
  //     return {
  //       ...acc,
  //       [cur.id]: false,
  //     };
  //   }, {});

  const initUpdatedCustomerName = () => ({
    firstname: '',
    lastname: '',
  });

  const [isEditable, setIsEditable] = useState({});
  const [updatedCustomerName, setUpdatedCustomerName] = useState(
    initUpdatedCustomerName()
  );
  const [isNameChanged, setIsNameChanged] = useState(false);

  useEffect(() => {
    dispatch(fetchCustomerNames());
  }, [dispatch]);

  const toggleIsEditable = (id) => {
    const state = isEditable;
    state[id] = !state[id];
    const customerName = customerNames.find((customer) => customer.id === id);
    if (state[id] && customerName) {
      setUpdatedCustomerName({
        firstname: customerName.firstname,
        lastname: customerName.lastname,
      });
    } else {
      setUpdatedCustomerName(initUpdatedCustomerName());
    }
    setIsEditable(state);
    console.log(isEditable);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCustomerName((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsNameChanged(
      value !== updatedCustomerName.firstname ||
        value !== updatedCustomerName.lastname
    );
  };

  const handleSave = async (id: number) => {
    const customerName = customerNames.find((customer) => customer.id === id);
    if (!customerName) return;

    const updatedFields: Partial<CustomerName> = {};

    if (updatedCustomerName.firstname !== customerName.firstname) {
      updatedFields.firstname = updatedCustomerName.firstname;
    }

    if (updatedCustomerName.lastname !== customerName.lastname) {
      updatedFields.lastname = updatedCustomerName.lastname;
    }

    if (Object.keys(updatedFields).length === 0) {
      // If there are no changes, return without making the API call
      toggleIsEditable(id); // Change view back to read mode
      return;
    }

    // Make the API call with the updated fields
    await dispatch(updateCustomerName(id, updatedFields));
    await dispatch(fetchCustomerNames());
    toggleIsEditable(id); // Change view back to read mode
  };

  const customerContent = (customerName: CustomerName) => (
    <Card
      isEditable={isEditable[customerName.id]}
      toggleIsEditable={toggleIsEditable}
      data={customerName}
      className="min-h-96 min-w-72"
      image="/"
      header={
        <div>
          {customerName.firstname} {customerName.lastname}
        </div>
      }
      body={
        <div>
          <span>Created: {customerName.created_at}</span>
        </div>
      }
      action={
        <div className="flex justify-center">
          <Button
            className={`
              mt-4 
              mx-2 
              px-4
              py-2 
              text-sm 
              font-medium 
              text-center 
              bg-gray-600
              rounded-lg 
              hover:bg-gray-700
            `}
            onClick={() => toggleIsEditable(customerName.id)}
          >
            Edit
          </Button>
          <Button
            type="link"
            to={`/customer-name-change-log/${customerName.id}`}
            className={`
              mt-4 
              mx-2 
              px-4
              py-2 
              font-medium 
              bg-white 
              border 
              dark:bg-gray-800 
              dark:text-gray-400 
              dark:border-gray-600 
              dark:hover:bg-gray-700 
            `}
          >
            View Logs
          </Button>
        </div>
      }
      input={
        <div className="flex flex-col">
          <Input
            className="flex flex-col"
            label="Firstname"
            placeholder={customerName.firstname}
            name="firstname"
            value={updatedCustomerName.firstname}
            onChange={handleChange}
          />
          <Input
            className="flex flex-col"
            label="Lastname"
            placeholder={customerName.lastname}
            name="lastname"
            value={updatedCustomerName.lastname}
            onChange={handleChange}
          />
        </div>
      }
      inputAction={
        <div className="flex justify-center">
          <Button
            className={`
              mt-4 
              mx-2 
              px-4
              py-2
              text-sm
              font-medium
              text-center
              bg-gray-600
              rounded-lg
              ${isNameChanged ? `hover:bg-gray-700` : 'bg-gray-700'}
            `}
            onClick={() => handleSave(customerName.id)}
            disabled={!isNameChanged}
          >
            Save
          </Button>
        </div>
      }
    />
  );

  const Content = () => (
    <div className="p-5 flex flex-col justify-center items-center lg:flex-row">
      {customerNames.map((customerName) => (
        <div key={customerName.id} className="flex justify-center items-center">
          {customerContent(customerName)}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex justify-center mb-5">
        <h2 className="h2">Customer Names</h2>
      </div>
      {loading ? <p>Loading...</p> : <Content />}
    </div>
  );
};

export default CustomerNamePage;
