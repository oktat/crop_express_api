import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  const now = new Date();
  await QueryInterface.bulkInsert('producers', [
    {
      id: 1,
      name: 'Puli',
      country: 'Hungary',
      yearOfFoundation: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      name: 'Csom Inc',
      country: 'Hungary',
      yearOfFoundation: 2000,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now      
    },
    {
      id: 3,
      name: 'Cson Inc',
      country: 'Poland',
      yearOfFoundation: 1995,
      capacityHectare: 800,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 4,
      name: 'Huli Inc',
      country: 'Portugal',
      yearOfFoundation: 2002,
      capacityHectare: 900,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 5,
      name: 'Far Kft',
      country: 'Hungary',
      yearOfFoundation: 2005,
      capacityHectare: 1200,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 6,
      name: 'Dotto Kft',
      country: 'Hungary',
      yearOfFoundation: 1998,
      capacityHectare: 1010,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 7,
      name: 'Párduc Kft',
      country: 'Hungary',
      yearOfFoundation: 2020,
      capacityHectare: 900,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 8,
      name: 'Jóvi Kft',
      country: 'Hungary',
      yearOfFoundation: 2004,
      capacityHectare: 1100,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 9,
      name: 'Roli Bt',
      country: 'Hungary',
      yearOfFoundation: 2004,
      capacityHectare: 1000,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 10,
      name: 'Csend Kft',
      country: 'Hungary',
      yearOfFoundation: 2000,
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
