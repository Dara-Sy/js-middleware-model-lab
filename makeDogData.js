#!/usr/bin/env node
const faker = require('faker');

function makeFakeWeight() {
  return `${Math.floor(Math.random() * 200)}.${Math.floor(Math.random() * 100) + 10}`;
}

process.stdout.write(Array(5).fill(0)
  .map(() => ({
    name:       faker.name.firstName(),
    color:      faker.commerce.color(),
    breed:      Math.floor(Math.random() * 343) + 1,
    age:        Math.floor(Math.random() * 20),
    state_born: faker.address.stateAbbr(),
    tag_id:     faker.random.uuid(),
    lbs:        makeFakeWeight(),
  }))
  .map(obj => Object.values(obj).join(','))
  .join('\r\n'));
