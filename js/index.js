$(document).ready(function() {
	// 菜单切换功能
	$('.menu-header').click(function() {
		// 如果点击的是链接则不执行折叠
		if ($(this).find('a').length > 0) return;

		$(this).toggleClass('active')
			.find('.menu-icon')
			.toggleClass('rotated');

		$(this).next('.menu-content').slideToggle(300);

		// 关闭其他打开的菜单项
		$(this).parent().siblings('.menu-item').find('.menu-header').removeClass('active');
		$(this).parent().siblings('.menu-item').find('.menu-content').slideUp(300);
	});

	// 卡片悬停效果
	$('.card').hover(
		function() {
			$(this).css('transform', 'translateY(-5px)');
		},
		function() {
			$(this).css('transform', 'translateY(0)');
		}
	);
});