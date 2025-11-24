// 加载导航数据
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const sitesDiv = document.getElementById('sites');
        data.sites.forEach(site => {
            const link = document.createElement('a');
            link.className = 'site';
            link.href = site.url;
            link.target = '_blank';
            link.innerHTML = `<img src="${site.icon || 'https://via.placeholder.com/24?text=?'} " alt=""> ${site.name}`;
            sitesDiv.appendChild(link);
        });
    })
    .catch(() => console.log('数据加载失败，使用默认'));

// 搜索功能
document.getElementById('searchInput').addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    document.querySelectorAll('.site').forEach(site => {
        site.style.display = site.textContent.toLowerCase().includes(value) ? 'flex' : 'none';
    });
});
