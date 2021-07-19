       //    汉堡导航
       $(".hamburger").on("click", function() {
           if ($(this).hasClass("activ")) {
               $(this).removeClass("activ").addClass("close");
               $(".nav").fadeOut();
           } else {
               $(this).removeClass("close").addClass("activ");
               $(".nav").fadeIn();
           }
       })



       //    回到顶部
       var ad = document.querySelector('.to');

       window.onscroll = function() {
           // 获取网页卷进去的高度

           var sct = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
           if (sct >= 300) {
               $('.to').show()
           } else {
               $('.to').hide()
           }
           // 监听 卷入的 高度
           if (sct <= 100) {
               $('.header').css({
                   opacity: 1 - 0.4 * (sct / 100),
                   height: (80 - 20 * (sct / 100)) + 'px',
                   boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
               })
           }
           var target = sct + 300;
           move(ad, target)
       }

       function move(el, target) {
           if (el.timer) {
               clearInterval(el.timer)
           }
           if (el.offsetTop === target) {
               return
           }
           el.timer = setInterval(function() {
               var step = (target - el.offsetTop) / 10;
               if (Math.abs(step) <= 1) {
                   step = step > 0 ? 1 : -1
               }
               el.style.top = el.offsetTop + step + 'px';
               // 终止条件
               if (el.offsetTop === target) {
                   clearInterval(el.timer)
               }
           }, 1000 / 60)



       }