$(() => {

    // localStorage 초기화
    initLocalStorage();

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
    const shopArr = JSON.parse(localStorage.getItem('shopList'));
    shopArr.push(new Shop(getNextShopSeq(), $('#shname').val(), 0));
    localStorage.setItem('shopList', JSON.stringify(shopArr));
};

// 매장번호 시퀀스
const getNextShopSeq = () => {
    const nextShopSeq = Number(localStorage.getItem('shopSeq')) + 1;
    localStorage.setItem('shopSeq', nextShopSeq);
    return Number(nextShopSeq);
};

// 매장목록

// 매장수정

// 매장삭제

// 재고목록

// 재고등록

// 재고수정

// 재고삭제

// 재고수량변경