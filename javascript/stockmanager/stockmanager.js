$(() => {

    // localStorage 초기화
    initLocalStorage();

    // 매장목록 출력
    printShopList();    

    // 이벤트핸들러 등록
    $('#shwriteBtn').on('click', () => {
        writeShop();
    });

});

// localStorage 초기화
const initLocalStorage = () => {
    if (localStorage) {
        if (!localStorage.getItem('shopSeq')) {
            localStorage.setItem('shopSeq', '0');
        }
        if (!localStorage.getItem('stockSeq')) {
            localStorage.setItem('stockSeq', '0');
        }                
        if (!localStorage.getItem('shopList')) {
            localStorage.setItem('shopList', '[]');
        }
        if (!localStorage.getItem('stockList')) {
            localStorage.setItem('stockList', '[]');
        }        
    }
};

// 매장등록
const writeShop = () => {
    const shopArr = getShopList();
    shopArr.unshift(new Shop(getNextShopSeq(), $('#shname').val(), 0));
    localStorage.setItem('shopList', JSON.stringify(shopArr));
    printShopList();
};

// 매장번호 시퀀스
const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem('shopSeq')) + 1;
    localStorage.setItem('shopSeq', nextShopSeq);
    return Number(nextShopSeq);
};

// 매장목록
const getShopList = () => {
    return JSON.parse(localStorage.getItem('shopList'))
            .sort((a, b) => b.shno - a.shno);
};

// 매장목록 출력
const printShopList = () => {
    $('#shoplist table tbody').html('');
    getShopList().forEach(shop => {
        let tr = $("<tr></tr>");
        tr.append($("<td>"+shop.shno+"</td>"));
        tr.append($("<td><input id='shname"+shop.shno+"' class='width40px' type='text' value='"+shop.shname+"' /></td>"));
        tr.append($("<td>"+shop.shtotst+"</td>"));
        tr.append($("<td><input id='updateShopBtn"+shop.shno+"' type='button' value='수정' /></td>"));
        tr.append($("<td><input id='deleteShopBtn"+shop.shno+"' type='button' value='삭제' /></td>"));
        $('#shoplist table tbody').append(tr);
        $('#updateShopBtn' + shop.shno).on('click', () => {
            updateShop(shop.shno);
        });        
        $('#deleteShopBtn' + shop.shno).on('click', () => {
            deleteShop(shop.shno);
        });
    });
};

// 매장수정
const updateShop = shno => {
    const newShopList = getShopList().map(shop => {
        if (shop.shno == shno) {
            return new Shop(shop.shno, $('#shname' + shop.shno).val(), shop.shtotst);
        } else {
            return shop;
        }
    });
    localStorage.setItem('shopList', JSON.stringify(newShopList));
    printShopList();
};

// 매장삭제
const deleteShop = shno => {
    const newShopList = getShopList().filter(shop => {
        return shop.shno != shno;
    });
    localStorage.setItem('shopList', JSON.stringify(newShopList));
    printShopList();
};

// 재고목록

// 재고등록

// 재고수정

// 재고삭제

// 재고수량변경