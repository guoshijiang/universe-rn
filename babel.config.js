// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };

module.exports = {
    presets: ["module:metro-react-native-babel-preset", {
        exclude: [
            'transform-exponentiation-operator',
        ]
    }],
    "plugins": [
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        'react-native-reanimated/plugin',
        "@babel/plugin-proposal-object-rest-spread"
    ]
};
