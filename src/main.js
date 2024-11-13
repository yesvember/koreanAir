const CloseBtn = document.querySelector('.close-btn');
const TopBtn = document.querySelector('.top-btn');
const floatingBtn = document.querySelector('.floating');

CloseBtn.addEventListener('click', () => {
    floatingBtn.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        TopBtn.style.display = 'block';
    } else {
        TopBtn.style.display = 'none';
    }
});


$(function(){
    const $accListTitle = $('.acc__list-pc > a');
    const $accListSub = $('.acc__list_sub-pc');
    const $affMain = $('.aff__main');
    const CHANGE = 'change';
    const ON = 'on';

    $(function(){
        $($accListTitle).on('click',function(){
            $(this).next($accListSub).toggleClass(ON);
            $(this).parent('li').siblings('li').children($accListSub).removeClass(ON);
            $(this).parent('li').toggleClass(ON).siblings('li').removeClass(ON);

            $(this).toggleClass(CHANGE);
            $(this).parent('li').siblings('li').children('a').removeClass(CHANGE);
            // 
            if($accListSub.hasClass(ON)){
                $affMain.stop().addClass(ON);
            }else {
                $affMain.stop().removeClass(ON);
            }
        });
    });
}); //FN

