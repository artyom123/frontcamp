module.exports = (model) => {
    const find = () => model;

    const findOne = id => model.find(item => item.id === id);

    const create = () => [ { status: "Created successful" } ];

    const update = id => [ { status: `Id: ${id} was updated successful` } ];

    const remove = id => [ { status: `Id: ${id} was deleted successful` } ];

    return {
        find,
        findOne,
        create,
        update,
        remove,
    };
};
