const courses = [
  {
    book:"./course/book1.jpg",
    author:"./course/user1.jpg",
    title:"Java 并发编程",
    desc:"理论+实战，带你深入浅出Java并发编程",
    name:"DannyIdea",
    info:"JAVA攻城狮 @ 珍爱网",
    price:199.9,
    count:12,
    view:517
  },
  {
    book:"./course/book2.jpg",
    author:"./course/user2.jpg",
    title:"推荐系统完全指南",
    desc:"用简单易懂的方式，降低阅读门槛，让更多人构建出推荐系统的知识体系，理解核心技术，实现落地应用。",
    name:"周博",
    info:"推荐算法Leader @ 某知名出海互联网公司",
    price:39.9,
    count:19,
    view:311
  },
  {
    book:"./course/book3.jpg",
    author:"./course/user3.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book4.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book5.jpg",
    author:"./course/user3.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book6.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book7.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book8.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book9.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book10.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book11.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book12.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book13.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:79.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book14.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:99.9,
    count:20,
    view:2999
  },
  {
    book:"./course/book15.jpg",
    author:"./course/user4.jpg",
    title:"Webpack5 核心原理与应用实践",
    desc:"由浅入深，从场景化工程搭建技巧；到构建与应用性能优化技巧；再到 Loader、Plugin 组件开发；最终落地到源码级剖析 Webpack 执行原理。",
    name:"范文杰",
    info:"字节跳动资深前端工程",
    price:59.9,
    count:20,
    view:2999
  } 
]
/**返回数据列表 */
module.exports = function({type,size,pageNum}) {
  size = parseInt(size)
  pageNum = parseInt(pageNum)
  console.log(type,size,pageNum)
  if(type==1) {
    courses.sort((a,b)=>a.price-b.price)
    return courses.slice(size*pageNum,size*pageNum+size)
  } else {
    return courses.slice(size*pageNum,size*pageNum+size)
  }
}