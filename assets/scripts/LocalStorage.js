// --------------------------------------------------------------------------- //
// khởi tạo user
function createAccount() {
    var userArray = [];
    if (localStorage.getItem('user') == null) {
        var admin = {
            name: 'Tran Nguyen Loc',
            username: 'admin',
            password: '987',
            gmail: 'admin1704@gmail.com',
            RegisterDay: `1-1-1999`,
            userType: 'admin',
            phonenumber: '0707029549',
            address: '179/12 Quan 7, TpHcm'
        };
        userArray.push(admin);

        // Tạo thêm 3 tài khoản ảo để test
        for (var i = 1; i <= 3; i++) {
            var temp = {
                name: `Nguyen Thanh B${i}`,
                username: `user${i}`,
                password: `${124 + i}`,
                gmail: `user${i}@gmail.com`,
                RegisterDay: `${i}-1-1999`,
                userType: 'user',
                phonenumber: `0${707029549+i}`,
                address: `12${2 + i}/${1 + i} Quan ${7 + i}, TpHcm`
            };
            userArray.push(temp);
        }
        localStorage.setItem('user', JSON.stringify(userArray)); // đẩy dữ liệu lên Local Storage
    }
}

// --------------------------------------------------------------------------- //
//  khởi tạo dữ liệu sản phẩm
function createProducts() {
    if (localStorage.getItem('product') === null) {
        var productArray = [
            // combo
            { id: 25, type: 'Combo', name: 'Combo Burger Mozzarella', img: '/img/Products/Combo/Combo1.png', price: 89491, description: "1 Burger Mozzarella, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Mozzarella, 1 French fries, 1 Option Drink"},
            { id: 26, type: 'Combo', name: 'Combo Burger Double Double', img: '/img/Products/Combo/Combo2.png', price: 88518, description: "1 Burger Double Double, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Double Double , 1 French fries, 1 Option Drink"},
            { id: 27, type: 'Combo', name: 'Combo Burger Tôm', img: '/img/Products/Combo/Combo3.png', price: 74900, description: "1 Burger Tôm, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Tôm, 1 French fries, 1 Option Drink"},
            { id: 28, type: 'Combo', name: 'Combo Burger Bulgogi', img: '/img/Products/Combo/Combo4.png', price: 71982, description: "1 Burger Mozzarella, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Mozzarella, 1 French fries, 1 Option Drink"},
            { id: 29, type: 'Combo', name: 'Combo Burger Gà Thượng Hạng', img: '/img/Products/Combo/Combo5.png', price: 71982, description: "1 Burger Gà Thượng Hạng, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Gà Thượng Hạng, 1 French fries, 1 Option Drink"},
            { id: 30, type: 'Combo', name: 'Combo Burger Bò Teriyaki Trứng', img: '/img/Products/Combo/Combo6.png', price: 64200, description: "1 Burger Bò Teriyaki Trứng, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Bò Teriyaki Trứng, 1 French fries, 1 Option Drink"},
            { id: 31, type: 'Combo', name: 'Combo Burger Cá', img: '/img/Products/Combo/Combo7.png', price: 62255, description: "1 Burger Cá , 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Cá, 1 French fries, 1 Option Drink"},
            { id: 32, type: 'Combo', name: 'Combo Burger Phô Mai', img: '/img/Products/Combo/Combo8.png', price: 62255, description: "1 Burger Phô Mai, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Phô Mai, 1 French fries, 1 Option Drink"},
            { id: 33, type: 'Combo', name: 'Combo Burger Bò Teriyaki', img: '/img/Products/Combo/Combo9.png', price: 59336, description: "1 Burger Bò Teriyaki, 1 khoai tây chiên, 1 nước ngọt bất kì tuỳ chọn", detail: "1 Burger Bò Teriyaki, 1 French fries, 1 Option Drink"},


            // burger
            { id: 0, type: 'Burger', name: 'Burger Mozzarella', img: '/img/Products/Hamburgers/burger1.png', price: 58364 , description: "Burger Phô mai Mozzarella", detail: "1 bánh hambuger"},
            { id: 1, type: 'Burger', name: 'Burger Double Double', img: '/img/Products/Hamburgers/burger2.png', price: 57391 , description: "Burger 2 tầng", detail: "1 bánh hambuger"},
            { id: 2, type: 'Burger', name: 'Burger Tôm', img: '/img/Products/Hamburgers/burger3.png', price: 45718 , description: "Burger tôm", detail: "1 bánh hambuger"},
            { id: 3, type: 'Burger', name: 'Burger Bulgogi', img: '/img/Products/Hamburgers/burger4.png', price: 42800 , description: "Burger thịt với sốt Bulgogi", detail: "1 bánh hambuger"},
            { id: 4, type: 'Burger', name: 'Burger Gà Thượng Hạng', img: '/img/Products/Hamburgers/burger5.png', price: 42800 , description: "Burger với thịt gà thượng hạng nhập khẩu", detail: "1 bánh hambuger"},
            { id: 5, type: 'Burger', name: 'Burger Bò Teriyaki Trứng', img: '/img/Products/Hamburgers/burger6.png', price: 35018 , description: "Burger thịt bò và trứng với sốt Teriyaki", detail: "1 bánh hambuger"},
            { id: 6, type: 'Burger', name: 'Burger Cá', img: '/img/Products/Hamburgers/burger7.png', price: 33073 , description: "Burger cá", detail: "1 bánh hambuger"},
            { id: 7, type: 'Burger', name: 'Burger Phô Mai', img: '/img/Products/Hamburgers/burger8.png', price: 33073 , description: "Burger Phô mai thông thường", detail: "1 bánh hambuger"},
            { id: 8, type: 'Burger', name: 'Burger Bò Teriyaki', img: '/img/Products/Hamburgers/burger9.png', price: 30155 , description: "Burger thịt bò với sốt Teriyaki", detail: "1 bánh hambuger"},
            { id: 9, type: 'Drink', name: 'Nước Cam', img: '/img/Products/Drink/drink1.png', price: 27236, description: "1 ly nước cam tươi mát !", detail: "1 nước cam"},
           
            // drink
            { id: 10, type: 'Drink', name: '7 Up Cherry', img: '/img/Products/Drink/drink2.png', price: 24318 , description: "1 ly nước 7UP vị cherry !", detail: "1 7Up Cherry"},
            { id: 11, type: 'Drink', name: '7 Up Rose', img: '/img/Products/Drink/drink3.png', price: 24318, description: "1 ly nước 7UP vị rose !", detail: "1 7Up Rose"},
            { id: 12, type: 'Drink', name: 'Milo', img: '/img/Products/Drink/drink4.png', price: 24318, description: "1 ly Milo", detail: "1 Milo"},
            { id: 17, type: 'Drink', name: '7 UP (L)', img: '/img/Products/Drink/drink9.png', price: 17509, description: "1 7Up Size Nhỏ", detail: "1 7UP (L)"},
            { id: 18, type: 'Drink', name: 'Mirinda (L)', img: '/img/Products/Drink/drink10.png', price: 17509, description: "1 Mirinda (L) Size Nhỏ", detail: "1 Mirinda (L)"},
            { id: 19, type: 'Drink', name: 'Nestea', img: '/img/Products/Drink/drink11.png', price: 17509, description: "1 Nestea", detail: "1 Nestea"},
            { id: 20, type: 'Drink', name: 'Pepsi (L)', img: '/img/Products/Drink/drink12.png', price: 17509, description: "1 Pepsi (L) Size Nhỏ", detail: "1 Pepsi (L)"},
            { id: 21, type: 'Drink', name: 'Pepsi Không Calories Vị Chanh (Dạng Lon)', img: '/img/Products/Drink/drink13.png', price: 17509, description: "1 Pepsi Không Calories Vị Chanh (Dạng Lon)", detail: "1 Pepsi No Calories Lemon (Dạng Lon)"},
            { id: 22, type: 'Drink', name: '7 UP (M)', img: '/img/Products/Drink/drink14.png', price: 13618, description: "1 7UP (M) Loại Vừa", detail: ""},
            { id: 23, type: 'Drink', name: 'Mirinda (M)', img: '/img/Products/Drink/drink15.png', price: 13618, description: "1 Mirinda (M) Loại Vừa", detail: "1 Pepsi (M)"},
            { id: 24, type: 'Drink', name: 'Pepsi (M)', img: '/img/Products/Drink/drink16.png', price: 13618 , description: "1 Pepsi (M) Loại Vừa", detail: "1 Pepsi (M)"},
            
            // chicken
            { id: 34, type: 'Chicken', name: 'Gà Rán - 1 Miếng', img: '/img/Products/Chicken/chicken1.png', price: 35018, description: "1 miếng Gà Rán", detail: "1 Gà Rán"},
            { id: 35, type: 'Chicken', name: 'Gà Sốt Đậu - 1 Miếng', img: '/img/Products/Chicken/chicken2.png', price: 36964, description: "1 miếng Gà Sốt Đậu", detail: "1 Gà Sốt Đậu"},
            { id: 36, type: 'Chicken', name: 'Gà Sốt Phô Mai Trắng - 1 Miếng', img: '/img/Products/Chicken/chicken3.png', price: 36964, description: "1 miếng Gà Sốt Phô Mai Trắng", detail: "1 Gà Sốt Phô Mai Trắng"},
            { id: 37, type: 'Chicken', name: 'Gà Sốt Phô Mai - 1 Miếng', img: '/img/Products/Chicken/chicken4.png', price: 36964, description: "1 miếng Gà Sốt Phô Mai", detail: "1 Gà Sốt Phô Mai"},
            { id: 38, type: 'Chicken', name: 'Gà Rán - 3 Miếng', img: '/img/Products/Chicken/chicken5.png', price: 96300, description: "3 miếng Gà Rán", detail: "3 Gà Rán"},
            { id: 39, type: 'Chicken', name: 'Gà Sốt Đậu - 3 Miếng', img: '/img/Products/Chicken/chicken6.png', price: 104082, description: "3 miếng Gà Sốt Đậu", detail: "3 Gà Sốt Đậu"},
            { id: 40, type: 'Chicken', name: 'Gà Sốt Phô Mai Trắng - 3 Miếng', img: '/img/Products/Chicken/chicken7.png', price: 104082, description: "3 miếng Gà Sốt Phô Mai Trắng", detail: "3 Gà Sốt Phô Mai Trắng"},
            { id: 41, type: 'Chicken', name: 'Gà Sốt Phô Mai - 3 Miếng', img: '/img/Products/Chicken/chicken8.png', price: 104082, description: "3 miếng Gà Sốt Phô Mai", detail: "3 Gà Sốt Phô Mai"},
            { id: 42, type: 'Chicken', name: 'Gà Rán - 6 Miếng', img: '/img/Products/Chicken/chicken9.png', price: 189682, description: "6 miếng Gà Rán", detail: "6 Gà Rán"},
            { id: 43, type: 'Chicken', name: 'Gà Sốt Đậu - 6 Miếng', img: '/img/Products/Chicken/chicken10.png', price: 201355, description: "6 miếng Gà Sốt Đậu", detail: "6 Gà Sốt Đậu"},
            { id: 44, type: 'Chicken', name: 'Gà Sốt Phô Mai Trắng - 6 Miếng', img: '/img/Products/Chicken/chicken11.png', price: 201355, description: "6 miếng Gà Sốt Phô Mai Trắng", detail: "6 Gà Sốt Phô Mai Trắng"},
            { id: 45, type: 'Chicken', name: 'Gà Sốt Phô Mai - 6 Miếng', img: '/img/Products/Chicken/chicken12.png', price: 201355, description: "6 miếng Gà Sốt Phô Mai", detail: "6 Gà Sốt Phô Mai"},
            { id: 46, type: 'Chicken', name: 'Gà Rán - 9 Miếng', img: '/img/Products/Chicken/chicken13.png', price: 281118, description: "9 miếng Gà Rán", detail: "9 Gà Rán"},
            { id: 47, type: 'Chicken', name: 'Gà Sốt Đậu - 9 Miếng', img: '/img/Products/Chicken/chicken14.png', price: 301545, description: "9 miếng Gà Sốt Đậu", detail: "9 Gà Sốt Đậu"},
            { id: 48, type: 'Chicken', name: 'Gà Sốt Phô Mai Trắng - 9 Miếng', img: '/img/Products/Chicken/chicken15.png', price: 301545, description: "9 miếng Gà Sốt Phô Mai Trắng", detail: "9 Gà Sốt Phô Mai Trắng"},
            { id: 49, type: 'Chicken', name: 'Gà Sốt Phô Mai - 9 Miếng', img: '/img/Products/Chicken/chicken16.png', price: 301545, description: "9 miếng Gà Sốt Phô Mai", detail: "9 Gà Sốt Phô Mai"},
            { id: 50, type: 'Chicken', name: 'Gà Nướng sốt mật ong - 9 Miếng', img: '/img/Products/Chicken/chicken17.png', price: 401545, description: "9 miếng Gà nướng Sốt Mật Ong", detail: "9  Gà nướng Sốt Mật Ong"},
        
        ];
        localStorage.setItem('product', JSON.stringify(productArray));
    }
}

// --------------------------------------------------------------------------- //
// khởi tạo cartList rỗng
function createCartListEmpty() {
    if (localStorage.getItem('cartList') === null) {
        var CartEmpty = [];
        localStorage.setItem('cartList', JSON.stringify(CartEmpty));
    }
}

createAccount();
createProducts();
createCartListEmpty();