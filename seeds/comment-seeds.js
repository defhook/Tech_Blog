const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Aliquam erat volutpat. In congue.',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'Vivamus vestibulum sagittis sapien.',
        user_id: 1,
        post_id: 20
    },
    {
        comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Donec ut mauris eget massa tempor convallis.',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
        user_id: 2,
        post_id: 20
    },
    {
        comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
        user_id: 5,
        post_id: 13
    },
    {
        comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Nam tristique tortor eu pede.',
        user_id: 4,
        post_id: 16
    },
    {
        comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        user_id: 4,
        post_id: 18
    },
    {
        comment_text: 'Proin eu mi. Nulla ac enim.',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Donec quis orci eget orci vehicula condimentum.',
        user_id: 3,
        post_id: 19
    },
    {
        comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        user_id: 5,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;