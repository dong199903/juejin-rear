const router = require('koa-router')()

router.prefix('/api/shop')

router.get('/list', function (ctx, next) {
  console.log("shoping")
  ctx.body = {
    code:200,
    data:[
      {img:"https://img01.yzcdn.cn/upload_files/2022/03/16/Fo3SKNvQG5cIj3IspG_SOs_T216M.png!280x280.jpg",title:"JUEJIN FRIENDS 「码赛克」码克杯",price:69.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/07/20/lvKcP2DIjYnWStkDUG5RR4ZvfoUK.jpg!280x280.jpg",title:"【预售】2022稀土开发者大会if(引力++)限量款便携电脑支架",price:199},
      {img:"https://img01.yzcdn.cn/upload_files/2022/07/19/FigI5u_wXqXkDA1EOrpiVIQoIKI7.jpg!280x280.jpg",title:"【预售】2022稀土开发者大会if(引力++)限量款口罩",price:25.9},
      {img:"https://img01.yzcdn.cn/upload_files/2022/07/20/Fk1rj4gSaia1i8yD-FSO8CWLWlSu.jpg!280x280.jpg",title:"【预售】2022稀土开发者大会if(引力++)开发者笔记本",price:99.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/07/20/Fr9Plsl7CbniO3tasqIaukp4EjqF.jpg!280x280.jpg",title:"【预售】2022稀土开发者大会if(引力++)限量款纪念帖",price:59.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/05/30/FguIz4XVMqAS3ft_7thNqlJrT0_F.jpg!280x280.jpg",title:"【预售】稀土掘金—Who Cares系列「我真的不困」咖啡杯",price:119.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/07/20/FpiWVvdWc1iIiNVzON0NW4fIKzrD.jpg!280x280.jpg",title:"【预售】2022稀土开发者大会if(引力++)限量款礼盒",price:499.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/07/19/FsT754_weL6KZgUC2TuRWxr5zLnG.jpg!280x280.jpg",title:"2022稀土开发者大会if(引力++)限量款冰氧T恤",price:299.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/05/09/FvG5_KInsbyhVq9W6xbygpo9jb9i.jpg!280x280.jpg",title:"稀土掘金-JUEJIN FRIENDS Click抱枕",price:69.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/05/09/FiuOdBi9P_WhoHa_kAU2kEHGSl4s.jpg!280x280.jpg",title:"稀土掘金-码赛克系列毛巾",price:59.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/05/09/FiuOdBi9P_WhoHa_kAU2kEHGSl4s.jpg!280x280.jpg",title:"稀土掘金—Who Cares系列「挺你」手机支架/桌面状态栏",price:39.9},
      {img:"https://img01.yzcdn.cn/upload_files/2022/03/16/FsSAWB2s6HeDhHMPbQGH3au2Mgcp.jpg!280x280.jpg",title:"虎虎生金系列-工卡套",price:69.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/05/30/Fpht4CzextqfHA048FGU8m_t4NP5.jpeg!280x280.jpg",title:"稀土掘金—Who Cares系列「丢掉包袱」杜邦特包",price:119.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/03/15/FlTBO9tItc9TXslq6wYd87udb-6t.jpg!280x280.jpg",title:"JUEJIN FRIENDS 「码赛克」拖鞋",price:99.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/03/15/FmpOVpO-b3uSYf6U3wBv2qX0FSmY.png!280x280.jpg",title:"稀土掘金周边商务合作",price:10000.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/03/15/Fmu13HT-hJ4gEiW3LZiYnBsgfGhm.jpg!280x280.jpg",title:"虎虎生金系列-保温杯",price:129.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/03/15/Fi77MVQB0xREZRQdzaKHyHNuG-yg.jpg!280x280.jpg",title:"稀土掘金-「解码系列」皮革鼠标垫",price:129.0},
      {img:"https://img01.yzcdn.cn/upload_files/2022/06/17/Fj2xqSGvnJ17uVitPcHGay0X-Sfi.jpg!280x280.jpg",title:"JUEJIN FRIENDS 「码赛克」T恤",price:139.0},
    ]
  }
})



module.exports = router
