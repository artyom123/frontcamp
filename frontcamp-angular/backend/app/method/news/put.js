module.exports = ({ newsRepository }) => {
    const update = req => newsRepository.update(req.params.id, req.body);

    return {
        update,
    };
};
