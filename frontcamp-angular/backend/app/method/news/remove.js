module.exports = ({ newsRepository }) => {
    const remove = req => newsRepository.remove(req.params.id);

    return {
        remove,
    };
};
