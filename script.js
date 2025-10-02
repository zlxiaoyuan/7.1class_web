// 班级网站交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 为导航链接添加平滑滚动效果和高亮当前页面
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(anchor => {
        // 高亮当前页面
        if (anchor.getAttribute('href') === currentPage) {
            anchor.classList.add('active');
        }
        
        // 平滑滚动效果
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加页面加载动画
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // 为文章添加悬停效果
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 为班级成员卡片添加悬停效果
    const groupColumns = document.querySelectorAll('.group-column');
    groupColumns.forEach(column => {
        column.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.03)';
        });
        
        column.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 添加滚动时的视差效果
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('header');
        const parallax = document.querySelector('header::before');
        
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // 添加打字机效果到标题
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // 为首页标题添加打字机效果
    const mainTitle = document.querySelector('header h1');
    if (mainTitle && currentPage === 'index.html') {
        const originalText = mainTitle.textContent;
        setTimeout(() => {
            typeWriter(mainTitle, originalText, 80);
        }, 500);
    }
});