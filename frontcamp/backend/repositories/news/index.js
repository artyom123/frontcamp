module.exports = (Model) => {
    const find = () => (
        Model.find({})
            .then(result => result));

    const findOne = (id) => (
        Model.findById(id)
            .then(result => result));

    const create = (body) => {
        const newItem = new Model(body);

        return newItem.save()
            .then((result) => {
                return { status: `News ${result._id} was added successfully` };
            });
    };        

    const update = (id, body) => (
        Model.findByIdAndUpdate(id, body, { "new": true })
            .then((result) => (
                { status: `Item with id ${result._id} was updated successfully` })));

    const remove = (id) => (
        Model.findOneAndDelete({ _id: id })
            .then((result) => (
                { status: `Item with id ${result._id} was deleted successfully` })));

    return {
        find: () => Promise.resolve().then(() => find()),
        findOne: id => Promise.resolve().then(() => findOne(id)),
        create: body => Promise.resolve().then(() => create(body)),
        update: (id, body) => Promise.resolve().then(() => update(id, body)),
        remove: id => Promise.resolve().then(() => remove(id)),
    };
};
