#!/usr/bin/env node
require('dotenv').config();

const dog = process.env.DOG
const name = process.env.NAME

console.log(`Here, ${name}, you beautiful ${dog}!`);
process.exit(0);
