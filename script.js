// ҳ��������ʱִ��
document.addEventListener('DOMContentLoaded', function() {

    // Ϊ��������������¼�����
    const searchInput = document.querySelector('input[type="search"]');
    searchInput.addEventListener('input', function() {
        // ����������ʵʱ�������߼���������������ֵ��ʾ�����ʾ��ɸѡ���
        console.log('����������' + this.value);
    });

    // Ϊ�������а���Ƽ�ͼ����б�����������ͣЧ��
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