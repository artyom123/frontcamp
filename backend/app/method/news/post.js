module.exports = ({ newsRepository }) => {
    const create = req => newsRepository.create(req.body);

    return {
        create,
    };
};
