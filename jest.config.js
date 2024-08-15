module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom',
    // transform: {
    //     "^.+\\.jsx?$": "babel-jest"
    // }
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        // Mock CSS imports
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    }
};
