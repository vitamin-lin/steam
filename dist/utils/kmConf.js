var devConfig = {
  token: 'e7cf780c2c38791e1a1c10c42fcc9cd1', //请在此行填写token
  defaultSharePath: 'pages/home/index', //小程序的默认首页, 用于分享时path为空时
  appName: '好奇官方精品商城', // pageDes无法匹配的时候 默认的 pageDes
  pageDes: {
    // 更加具体路径进行划分
    'pages/userInfo/index': 'authorize', // 授权页 ＝> true
    'pages/home/index': 'index', // 首页 => true
    'pages/banner/index': 'bannerlist', // banner页 ＝> true
    'pages/detail/index': 'detail', // 产品详情页 ＝>true
    'pages/confirmOrder/index': 'info', // 确认订单页(不止一个产品的情况监测？)xxxxxxxxxx 暂时只埋了单种商品
    'pages/success/index': 'finish', // 支付成功页 ＝>true
    'pages/coupons/index': 'coupon', // 优惠券选取页面 => true
    'pages/bulk/index': 'groupnews', // 团购资讯 => true
    'pages/stars/index': 'reclist', // 网红推荐列表 => true
    'pages/starsDetail/index': 'recdetail', // 网红详情页 => true
    'pages/shareDetail/index': 'beinvited', // (等待加入拼团，成团页面)xxxxxxxxxxx
    'pages/user/index': 'center', //个人中心 => true
    'pages/cart/index': 'shoppingcart', // 购物车 ＝>true
    'pages/order/index': 'ordercenter', // 订单中心 =>true
    'pages/tempDetail/index': 'faq', // 众享 =>true
    'pages/all/index': 'gdlist', // 全部商品 =>true
    'pages/newStarsDetail/index': 'recdetail', // 新的网红详情页 =>true
    'pages/webView/index': 'Page-yykH5' // 新的网红详情页 =>true
  }
}
module.exports = devConfig

// 问题：
//  1.分享数据怎么统一监测?
//  2.确认订单页(不止一个产品的情况监测？)
//  3.(等待加入拼团，成团页面的两种情况的监测？)
//  4. 底部tab的事件
//  5. 客服的埋点
