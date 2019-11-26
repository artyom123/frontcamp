module.exports = ({ newsRepository }) => {
    const find = () => (
        Promise
            .resolve()
            .then(() => newsRepository.find())
            .catch((error) => {
                throw new Error(error);
            })
    );

    const findOne = (req) => (
        Promise
            .resolve()
            .then(() => newsRepository.findOne(req.params.id))
            .catch((error) => {
                throw new Error(error);
            })
    );

    return {
        find,
        findOne,
    };
};
