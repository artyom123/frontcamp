module.exports = ({ userRepository }) => {
    const create = req => userRepository.create(req.body);

    return {
        create,
    };
};
