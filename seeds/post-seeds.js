const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        post_content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        post_content: 'http://desdev.cn/enim/blandit/mi.jpg',
        user_id: 4
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_content: 'https://stanford.edu/consequat.png',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_content: 'http://ucla.edu/consequat/nulla.html',
        user_id: 1
    },
    {
        title: 'Curabitur at ipsum ac tellus semper interdum.',
        post_content: 'https://reverbnation.com/ligula/sit.jpg',
        user_id: 5
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'http://china.com.cn/lectus/vestibulum.json',
        user_id: 3
    },
    {
        title: 'Nulla tellus.',
        post_content: 'https://lycos.com/natoque/penatibus/et.html',
        user_id: 2
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_content: 'https://gmpg.org/lorem.jpg',
        user_id: 3
    },
    {
        title: 'Etiam justo.',
        post_content: 'https://shareasale.com/quis.json',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);
module.exports = seedPosts;