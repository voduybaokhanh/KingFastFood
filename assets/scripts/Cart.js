// ---------------------------------------------------------------------------- //
var productList = JSON.parse(localStorage.getItem('product')) || [];
var userList = JSON.parse(localStorage.getItem('user')) || [];
var tempArray = []; // Mảng chứa thông tin đơn hàng của user

function formPayment() {
    document.querySelector('.cartPayment').innerHTML = `
    <div class="container__cart-title">Đơn Hàng hiện tại</div>
    <div class="container__Mycart-wrap">
        <ul class="container__Mycart-listItem">
            <div class="container_Mycart-Temp">
                Hiện tại bạn chưa đặt đơn hàng nào cả :(
            </div>
        </ul>
    </div>
    `;
}

// ---------------------------------------------------------------------------- //
// Hàm xử lý công việc thêm sản phẩm vào giỏ hàng
function addCart(nameProduct) {
    var check = document.querySelector(".js-HandlerLR").classList.contains("js-isLogin");
    if (!check) {
        alert("Hãy đăng nhập để có thể mua sắm\nNếu bạn chưa có tài khoản thì hãy nhanh tay tạo cho mình một tài khoản đi nào.");
        return;
    }

    var product = productList.find(p => p.name === nameProduct);
    if (product) {
        var tempCart = {
            id: product.id,
            type: product.type,
            name: product.name,
            img: product.img,
            price: product.price
        };
        tempArray.push(tempCart);
        updateCartDisplay();
        pushCarttoLocalStorage();
        updateCartCount();
        updateCartItemCount();
    }
}

function updateCartDisplay() {
    var temp = tempArray.map(item => `
        <li class="container__cart-Item">
            <img src="./assets/${item.img}" class="container__cart-img">
            <div class="container__cart-Item-Info">
                <div class="container__cart-Item-head">
                    <h5 class="container__cart-Item-name">${item.name}</h5>
                    <span class="container__cart-Item-price">${item.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                </div>
                <div class="container__cart-Item-body">
                    <div class="container__cart-Item-desciption">Phân Loại: ${item.type}</div>
                    <span class="container__cart-Item-remove" onclick="deleteCart('${item.name}')">Xóa</span>
                </div>
            </div>
        </li>
    `).join('');

    document.querySelector(".cart").innerHTML = `
        <div class="container__cart-title">Giỏ hàng của tôi</div>
        <div class="container__cart-wrap">
            <ul class="container__cart-listItem">${temp}</ul>
        </div>
        <div class="btn-cart">
            <div class="btn-Product">Thanh toán</div>
        </div>
    `;

    updateCartItemCount(); // Cập nhật số lượng sản phẩm
}


function updateCartCount() {
    let cartCount = localStorage.getItem('cartCount') || 0;
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    document.querySelector('#cart-count').innerText = cartCount;
}
function updateCartItemCount() {
    let totalItems = tempArray.length; // Đếm số lượng sản phẩm trong tempArray
    document.querySelector('#cart-item-count').innerText = totalItems; // Cập nhật số lượng sản phẩm lên giao diện
}



function deleteCart(nameProduct) {
    var index = tempArray.findIndex(item => item.name === nameProduct);
    if (index !== -1 && confirm('Bạn có muốn xóa sản phẩm này ?')) {
        tempArray.splice(index, 1);
        updateCartDisplay();
        pushCarttoLocalStorage();
        updateCartItemCount();
    }
}

// ---------------------------------------------------------------------------- //
// Hàm xử lý công việc xử lý và gửi đơn hàng mà user đã đặt lên Local Storage
function pushCarttoLocalStorage() {
    document.querySelector(".btn-Product").addEventListener('click', () => {
        if (confirm('Xác nhận đặt hàng ?')) {
            if (tempArray.length === 0) {
                alert('Giỏ hàng đang trống !\nVui lòng thêm sản phẩm vào giỏ hàng trước khi ấn nút Thanh toán');
                return;
            }

            var nameUser = document.getElementById("js-Username").innerText;
            var ListNameProducts = tempArray.map(item => item.name);
            var totalMoney = tempArray.reduce((total, item) => total + item.price, 0);

            var today = new Date();
            var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            var time = today.getHours() + "h " + today.getMinutes() + "m " + today.getSeconds() + "s";
            var dateTime = date + ' ' + time;

            var tempTemp = {
                username: nameUser,
                totalProducts: tempArray,
                ListNameProducts: ListNameProducts,
                totalMoney: totalMoney,
                status: 'pending', // Mặc định trạng thái đơn hàng là đang chờ
                dateTime: dateTime
            };

            var totalPayment = JSON.parse(localStorage.getItem('cartList')) || [];
            totalPayment.push(tempTemp);
            localStorage.setItem('cartList', JSON.stringify(totalPayment));

            var showPayment = JSON.parse(localStorage.getItem('cartList')) || [];
            var temp = '';
            showPayment.forEach((order, index) => {
                if (order.username === nameUser) {
                    var value, color;
                    switch (order.status) {
                        case 'pending':
                            value = "Đang xử lí";
                            color = "orange";
                            break;
                        case 'confirmed':
                            value = "Đã xác nhận";
                            color = "green";
                            break;
                        case 'unconfirmed':
                            value = "Đã huỷ";
                            color = "red";
                            break;
                    }

                    temp += `
                    <tr>
                        <td style="width: 2%">${index + 1}</td>
                        <td style="width: 45%">${order.ListNameProducts.join('</br>')}</td>
                        <td style="width: 18%">${order.dateTime}</td>
                        <td style="width: 15%">${order.totalMoney.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                        <td id="js-cart-status" style="width: 20%; color: ${color}">${value}</td>
                    </tr>
                    `;
                }
            });

            document.querySelector('.container__Mycart-listItem').innerHTML = `
            <table id="listProduct">
                <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Thời gian</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                </tr>
                ${temp}
            </table>`;

            sendRequire(tempArray);  // Gửi Toast Message thông báo rằng yêu cầu đặt hàng đã được gửi cho admin
            tempArray = []; // Reset lại tempArray 

            document.querySelector('.container__cart-listItem').innerHTML = `
                <div class="container_Mycart-Temp">
                    <p>Cảm ơn vì đã mua sắm :)</p>
                    <p>Bạn có thể mua thêm sản phẩm mà bạn yêu thích</p>
                </div>
            `;
        }
    });
}

// ----------------------------------------------------------------------------------------------------------
// Toast Notify Form 
function addCartSuccess() {
    var check = document.querySelector(".js-HandlerLR").classList.contains("js-isLogin");
    if (!check) return;
    toast({
        type: 'success',
        title: 'Giỏ hàng',
        message: 'Đã thêm sản phẩm vào giỏ hàng !',
        duration: 1300
    });
}

function sendRequire(arr) {
    if (arr.length === 0) return;
    toast({
        type: 'success',
        title: 'Đơn hàng',
        message: 'Đã gửi yêu cầu đơn hàng cho người bán\nVui lòng đợi phản hồi từ người bán !',
        duration: 3000
    });
}
