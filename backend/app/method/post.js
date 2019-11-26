module.exports = ({ newsRepository }) => {
    const create = () => (
        Promise
            .resolve()
            .then(() => newsRepository.create())
            .catch((error) => {
                throw new Error(error);
            })
    );

    return {
        create,
    };
};
