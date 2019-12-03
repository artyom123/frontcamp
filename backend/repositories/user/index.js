module.exports = (Model) => {
    const find = () => (
        Model.find({})
            .then(result => result));

    const findByName = (name) => (
        Model.findOne({ username: name })
            .then(user => user));

    const findById = (id) => (
        Model.findById(id)
            .then(result => result));

    const create = (body) => {
        const newItem = new Model(body);

        return newItem.save()
            .then((result) => {
                return { status: `User ${result._id} was added successfully` };
            });
    };

    return {
        find: () => Promise.resolve().then(() => find()),
        findByName: name => Promise.resolve().then(() => findByName(name)),
        findById: id => Promise.resolve().then(() => findById(id)),
        create: body => Promise.resolve().then(() => create(body)),
    };
};
