import Mock from 'mockjs'
import data from '../data.json'

Mock.mock('/good/sellers', {
    code: 0,
    codeMsg: '成功',
    data: data.sellers
})

Mock.mock('/good/goods', {
    code: 0,
    codeMsg: '成功',
    data: data.goods
})

Mock.mock('/good/ratings', {
    code: 0,
    codeMsg: '成功',
    data: data.ratings
})