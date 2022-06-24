import Mock from 'mockjs';
Mock.mock('/list', {
  code: 0,
  data: {
    'data|1000': [
      {
        id: '@id', //随机id
        name: '@name', //随机名称
        nickName: '@last', //随机昵称
        phone: /^1[34578]\d{9}$/, //随机电话号码
        'age|11-99': 1, //年龄
        address: '@county(true)', //随机地址
        email: '@email', //随机邮箱
        isMale: '@boolean', //随机性别
        createTime: '@datetime', //创建时间
      },
    ],
  },
});
