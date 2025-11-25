import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  const now = new Date();
  await QueryInterface.bulkInsert('producers', [
    {
      id: 1,
      name: 'Puli',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      name: 'Puli',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now      
    },
    {
      id: 3,
      name: 'Cson Inc',
      country: 'Polan',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 4,
      name: 'Huli Inc',
      country: 'Portugal',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 5,
      name: 'Far Kft',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 6,
      name: 'Dotto Kft',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 7,
      name: 'Párduc Kft',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 8,
      name: 'Jóvi Kft',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 9,
      name: 'Roli Bt',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 10,
      name: 'Csend Kft',
      country: 'Hungary',
      yearOfFoundatin: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    }
  ]);


}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('producers', null, {});
}

export { up, down }
