// 班级网站交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 为导航链接添加平滑滚动效果
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // 只对同一页面的锚点链接使用平滑滚动
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 为页面内容添加淡入动画
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = "1";
    });
});