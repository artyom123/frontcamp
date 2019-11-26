module.exports = ({ newsRepository }) => {
    const update = () => (
        Promise
            .resolve()
            .then(() => newsRepository.update())
            .catch((error) => {
                throw new Error(error);
            })
    );

    return {
        update,
    };
};
