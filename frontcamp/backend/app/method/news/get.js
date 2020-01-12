module.exports = ({ newsRepository }) => {
    const find = () => newsRepository.find();

    const findOne = req => newsRepository.findOne(req.params.id);

    return {
        find,
        findOne,
    };
};
