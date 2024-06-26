// 页面加载完成时执行
document.addEventListener('DOMContentLoaded', function() {

    // 为搜索框添加输入事件监听
    const searchInput = document.querySelector('input[type="search"]');
    searchInput.addEventListener('input', function() {
        // 这里可以添加实时搜索的逻辑，比如根据输入的值显示相关提示或筛选结果
        console.log('正在搜索：' + this.value);
    });

    // 为销量排行榜和推荐图书的列表项添加鼠标悬停效果
    const listItems = document.querySelectorAll('.sales-ranking li,.recommended-books li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
        item.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});