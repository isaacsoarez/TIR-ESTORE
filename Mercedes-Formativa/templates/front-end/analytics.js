const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

Orders.forEach(order =>{
    const tr = document.createElement('tr')
    const trContent = `
    <td class="${order.MateriaPrima === 'Aço' ? 'danger' : order.MateriaPrima === 'Ferramentas' ? 'success' : 'primary'}">${order.MateriaPrima}</td>
    <td>${order.Produção}</td>
    <td class="${order.Fornecedor === 'Partz' ? 'success' : order.Fornecedor === 'Yokohama' ? 'danger' : 'primary'  }">${order.Fornecedor}</td>
    <td>${order.FreteKM}</td>
    <td class="${order.status === 'Pendente' ? 'danger' : order.status === 'Enviado' ? 'warning' : 'primary'}">${order.status}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

