module.exports = ({ newsRepository }) => {
    const remove = () => (
        Promise
            .resolve()
            .then(() => newsRepository.remove())
            .catch((error) => {
                throw new Error(error);
            })
    );

    return {
        remove,
    };
};
