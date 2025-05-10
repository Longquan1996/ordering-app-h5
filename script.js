// 加载菜单数据
fetch('data.json')
    .then(response => response.json())
    .then(data => renderMenu(data));

let order = [];

function renderMenu(menu) {
    const menuDiv = document.getElementById("menu");
    menu.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>价格：${item.price} 元</p>
            <button onclick="addToOrder('${item.name}', ${item.price})">点菜</button>
        `;
        menuDiv.appendChild(menuItem);
    });
}

function addToOrder(name, price) {
    order.push({ name, price });
    updateOrderList();
}

function updateOrderList() {
    const list = document.getElementById("order-list");
    list.innerHTML = "";
    let total = 0;

    order.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price} 元`;
        list.appendChild(li);
    });

    document.getElementById("total-price").textContent = total;
}

function submitOrder() {
    if (order.length === 0) {
        alert("请先点菜！");
        return;
    }
    alert("下单成功！");
    order = [];
    updateOrderList();
}
