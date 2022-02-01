import React from 'react';
import Customer from './Customer';
const { faker } = require('@faker-js/faker');

const Customers = () => {
  const customersList = Array.from({ length: 100 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    job: faker.name.jobTitle(),
  }));

  return (
    <ul>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))}
    </ul>
  );
};

export default Customers;
