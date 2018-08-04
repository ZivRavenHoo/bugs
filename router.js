$(function(){
//  hash封装route
  (function(window,undefind){
    var Router = function(){
      this.routes = {};
      this.currentUrl ='';
    }
    Router.prototype.init = function(){
      window.addEventListener("load",this.refrash.bind(this));
      window.addEventListener("hashchange",this.refrash.bind(this));
    }
    Router.prototype.refrash=function(){
      this.currentUrl = location.hash.slice(1)||"/";
      this.routes[this.currentUrl]();
    }
    Router.prototype.route=function(path,callback){
      var result_HandlerResult = callback||function(){};
      this.routes[path]=callback;
    }
    
    var router = new Router();
    router.init();

    
    var each = function(arr){
      var col = arr.column
      
      for(var i in col){
        (function(){//闭包保护
          var temp = i;
          var el = col[temp];
          var path = '"' + el.route + '"';
//        var children = el.children ? el.children : "";
//       
//        if(children){
//          for(var j in children){
//            (function(){
//              var num = j;
//              var child = children[j];
//              var route_path = route + child;
//              router.route(route_path,function(){
//                $(arr.page + " .tab .path .page_path>ol>li").eq(temp).addClass("current").siblings().removeClass("current");
//                $(arr.page + " .tab_children .contain .children").eq(temp).addClass("current").siblings().removeClass("current");
//                $(arr.page + " .tab .pages>ul>li").eq(temp).addClass("current").siblings().removeClass("current");
//                $(arr.page + " .main>ul>li").eq(temp).addClass("current").siblings().removeClass("current");
//              })
//            })(j)
//          }
//        }
          console.log(path)
         
          
          router.route(path,function(){
            console.log($(arr.page + " .tab .path .page_path>ol>li"))
//          $(page + " .tab .path .page_path>ol>li").eq(temp).addClass("current").siblings().removeClass("current");
//          $(page + " .tab_children .contain .children").eq(temp).addClass("current").siblings().removeClass("current");
//          $(page + " .tab .pages>ul>li").eq(temp).addClass("current").siblings().removeClass("current");
//          $(page + " .main>ul>li").eq(temp).addClass("current").siblings().removeClass("current");
          })
        })(i)
      }
    }
    
    
//    演之桥
//  
//  each({
//    page: '#yanbridge',  //页面,  对应     yanbridge.html(演之桥)
//    column: ['/aboutus','/branch','/enterpriceimage','/contactus']
//    //子栏目: 平台介绍        分支机构         企业形象     联系我们
//  })

//    平台荣誉

//  each({
//    page: '#honor ',   //页面,  对应     honor.html(平台荣誉)
//    column: ['/worksofexcellence','/awards','/actordevelopment']
//    //子栏目:     优秀作品                                  获得奖项            演员成长
//  })

//    平台服务

    each({
      page: '#serve',   //页面,  对应     serve.html(平台服务)
      column: [
        {
          route: "/actorservice",             
          //子栏目:   演员服务
          children: ['/detail']     
          //详情            通告选角 (演员服务  详情)
        },{
          route: '/noticeproduction'            
          //子栏目:   通告项目
        }
      ]
    })
    
//    平台服务三级栏目

//  each({
//    page: '#serve_detail',   //页面,  对应     serve.html(平台服务)
//    column: [
//      {
//        route: "/actorservice",              
//        //子栏目:   演员服务
//        children: ['/actorrecrutment','/actormanagemengt','/videomaking','/publicpromotion']
//        //三级栏目           演员招募                                       演员管理                          视频制作                         个宣推广
//      },{
//        route: '/noticeproduction',            
//        //子栏目:   通告项目
//        children: ['/actorselection','/Audition','/exhibitionworks'] 
//      //三级栏目                       通告选角                      定妆试镜                   作品展示
//      }
//    ]
//  })
    
//    团队介绍

//  each({
//    page: '#team',   //页面,  对应     team.html(团队介绍)
//    column: ['/middleman','/filmeditor','/photographer','/cameraman','/makeupartist']
//    //子栏目:   经纪人                          剪辑师                    摄影师                      摄像师                 化妆师
//  })




////    平台介绍
//  router.route("/aboutus",function(){
//    
//  })
////    分支机构
//  router.route("/branch",function(){
//    $("#yanbridge .tab .path .page_path li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#yanbridge .tab .pages li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#yanbridge .main>ul>li").eq(1).addClass("current").siblings().removeClass("current");
//  })
////    企业形象
//  router.route("/enterpriceimage",function(){
//    $("#yanbridge .tab .path .page_path li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#yanbridge .tab .pages li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#yanbridge .main>ul>li").eq(2).addClass("current").siblings().removeClass("current");
//  })
////   联系我们
//  router.route("/contactus",function(){
//    $("#yanbridge .tab .path .page_path li").eq(3).addClass("current").siblings().removeClass("current");
//    $("#yanbridge .tab .pages li").eq(3).addClass("current").siblings().removeClass("current");
//    $("#yanbridge .main>ul>li").eq(3).addClass("current").siblings().removeClass("current");
//  })

//
//  
////    平台荣誉
//
////    优秀作品
//  router.route("/worksofexcellence",function(){
//    $("#honor .tab .path .page_path li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#honor .tab .pages li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#honor .main>ul>li").eq(0).addClass("current").siblings().removeClass("current");
//  })
//  
////    获得奖项
//  router.route("/awards",function(){
//    $("#honor .tab .path .page_path li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#honor .tab .pages li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#honor .main>ul>li").eq(1).addClass("current").siblings().removeClass("current");
//  })
//  
////    演员成长
//  router.route("/actordevelopment",function(){
//    $("#honor .tab .path .page_path li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#honor .tab .pages li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#honor .main>ul>li").eq(2).addClass("current").siblings().removeClass("current");
//  })
//
//
////    平台服务
//
////    演员服务
//  router.route("/actorservice",function(){
//    $("#serve .tab .path .page_path li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#serve .tab .pages li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#serve .main>ul>li").eq(0).addClass("current").siblings().removeClass("current");
//  })
//  
////    通告服务
//  router.route("/noticeservice",function(){
//    $("#serve .tab .path .page_path li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#serve .tab .pages li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#serve .main>ul>li").eq(1).addClass("current").siblings().removeClass("current");
//  })
//  
////    通告选角
//  router.route("/actorservice/detail",function(){
//    $("#serve .tab .path .page_path li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#serve .tab .pages li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#serve .main>ul>li").eq(2).addClass("current").siblings().removeClass("current");
//  })
//  
//
//
////    平台荣誉
//
////    优秀作品
//  router.route("/worksofexcellence",function(){
//    $("#honor .tab .path .page_path li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#honor .tab .pages li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#honor .main>ul>li").eq(0).addClass("current").siblings().removeClass("current");
//  })
//  
////    获得奖项
//  router.route("/awards",function(){
//    $("#honor .tab .path .page_path li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#honor .tab .pages li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#honor .main>ul>li").eq(1).addClass("current").siblings().removeClass("current");
//  })
//  
////    演员成长
//  router.route("/actordevelopment",function(){
//    $("#honor .tab .path .page_path li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#honor .tab .pages li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#honor .main>ul>li").eq(2).addClass("current").siblings().removeClass("current");
//  })
//
////    团队介绍
//
////    经纪人
//  router.route("/middleman",function(){
//    $("#team .tab .path .page_path li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#team .tab .pages li").eq(0).addClass("current").siblings().removeClass("current");
//    $("#team .main>ul>li").eq(0).addClass("current").siblings().removeClass("current");
//  })
//  
////    剪辑师
//  router.route("/filmeditor",function(){
//    $("#team .tab .path .page_path li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#team .tab .pages li").eq(1).addClass("current").siblings().removeClass("current");
//    $("#team .main>ul>li").eq(1).addClass("current").siblings().removeClass("current");
//  })
//  
////    摄影师
//  router.route("/photographer",function(){
//    $("#team .tab .path .page_path li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#team .tab .pages li").eq(2).addClass("current").siblings().removeClass("current");
//    $("#team .main>ul>li").eq(2).addClass("current").siblings().removeClass("current");
//  })
//  
////    摄像师
//  router.route("/cameraman",function(){
//    $("#team .tab .path .page_path li").eq(3).addClass("current").siblings().removeClass("current");
//    $("#team .tab .pages li").eq(3).addClass("current").siblings().removeClass("current");
//    $("#team .main>ul>li").eq(3).addClass("current").siblings().removeClass("current");
//  })
//  
////    化妆师
//  router.route("/makeupartist",function(){
//    $("#team .tab .path .page_path li").eq(4).addClass("current").siblings().removeClass("current");
//    $("#team .tab .pages li").eq(4).addClass("current").siblings().removeClass("current");
//    $("#team .main>ul>li").eq(4).addClass("current").siblings().removeClass("current");
//  })

  })(window)
})