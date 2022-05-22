const sequelize = require('../config/config');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Rodney',
        email: 'Rodney@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'Lisa',
        email: 'lisa@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'Kareem',
        email: 'kareem@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'Eric',
        email: 'eric@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'Joe',
        email: 'joe@gmail.com',
        password: 'pass1234'
    },
    {
        username: 'Sasuke',
        email: 'uchiha@gmail.com',
        password: 'pass1234'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;