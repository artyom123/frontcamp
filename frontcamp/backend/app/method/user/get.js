module.exports = ({ userRepository }) => {
    const find = () => userRepository.find();

    const findByName = username => userRepository.findByName(username);

    const findById = id => userRepository.findById(id);

    return {
        find,
        findByName,
        findById,
    };
};
