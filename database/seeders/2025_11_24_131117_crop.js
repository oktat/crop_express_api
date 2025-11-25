import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Crop) {
    await db.Crop.bulkCreate([
      {
        id: 1,
        name: 'Búza',
        type: 'őszi',
        proteinContent: 13.5,
        producerId: 3
      },
      {
        id: 2,
        name: 'Kukorica',
        type: 'hibrid 32F',
        proteinContent: 8.8,
        producerId: 7
      },
      {
        id: 3,
        name: 'Árpa',
        type: 'takarmány',
        proteinContent: 11.2,
        producerId: 5
      },
      {
        id: 4,
        name: 'Rizs',
        type: 'basmati',
        proteinContent: 7.5,
        producerId: 4
      },
      {
        id: 5,
        name: 'Búza',
        type: 'tönköly',
        proteinContent: 16.0,
        producerId: 10
      },
      {
        id: 6,
        name: 'Zab',
        type: 'élelmiszer',
        proteinContent: 12.0,
        producerId: 2
      },
      {
        id: 7,
        name: 'Quinoa',
        type: 'fehér',
        proteinContent: 14.1,
        producerId: 9
      },
      {
        id: 8,
        name: 'Tritikálé',
        type: 'takarmány',
        proteinContent: 12.8,
        producerId: 8
      },
      {
        id: 9,
        name: 'Kukorica',
        type: 'csemege',
        proteinContent: 9.1,
        producerId: 6
      },
      {
        id: 10,
        name: 'Köles',
        type: 'sárga',
        proteinContent: 10.5,
        producerId: 1
      }
      
    ]);
  }else {
    await QueryInterface.bulkInsert('crops', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('crops', null, {});
  
}

export { up, down }
