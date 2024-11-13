$(function(){
    const ON = 'on';
    const CHANGE = 'change';

    // inserted list toggle
    let $insertedLi = $('.inserted > li');
    let $insertList = $('.inserted > li > h6');
    let SLIDE = 'slide';

    $(function(){
        $($insertList).on('click',function(){
            $(this).next('ul').toggleClass(SLIDE);
            $(this).parent('li').siblings('li').children('ul').removeClass(SLIDE);
            $(this).parent('li').toggleClass(CHANGE);
            $(this).parent('li').siblings('li').removeClass(CHANGE);
        });
    });

    // footer contact slide
    let $ctList = $('.contact__lf ul > li');
    let $ctListHide = $('.contact__lf ul > li:nth-of-type(n+2)');
    let $ctRight = $('.contact__rt');

    $(function(){
        $($ctList).eq(0).on("click",function(){
            $(this).toggleClass(CHANGE);
            $($ctListHide).stop().toggleClass(ON);
            $($ctRight).stop().toggleClass(ON);
        });
    });
}); //FN

