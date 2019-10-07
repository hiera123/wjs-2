$(function(){
    /* 获取当前所有的item */
    var items = $(".carousel-inner .item");
    /*---监听屏幕大小的改变--- */
    /*--当窗口被调整(resize)时,触发function函数 */
    $(window).on("resize",function(){
        /* --1.获取当前屏幕的宽度-----*/
        var width = $(window).width();
        /* --2.判断屏幕的宽度 */
        if (width>=768){/*---说明是非移动端--- */ 

            /*----为每一个item添加子元素----遍历---- */
            $(items).each(function(index,value){
                var item = $(this);
                /*--添加非移动端的子元素 */
            });


        }
    })
})