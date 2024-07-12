import Product from './Product';

const productList = [];

export default function ListProduct() {

    registProduct(['1', '상품명1', '상품설명1', './img/1.png', 22000]);
    registProduct(['2', '상품명2', '상품설명2', './img/2.png', 22000]);
    registProduct(['3', '상품명3', '상품설명3', './img/3.png', 22000]);
    registProduct(['4', '상품명4', '상품설명4', './img/4.png', 22000]);
    registProduct(['5', '상품명5', '상품설명5', './img/5.png', 22000]);
    registProduct(['6', '상품명6', '상품설명6', './img/6.png', 22000]);
    registProduct(['7', '상품명7', '상품설명7', './img/7.png', 22000]);
    registProduct(['8', '상품명8', '상품설명8', './img/8.png', 22000]);

    console.log(productList);
    console.log(productList[0].state.pimg);

    return (
        <>
            <div id='listProduct'>
                <ul>
                    {productList.map((product, idx) =>
                            <li className='productLi' data-index='{idx}'>
                                <img src='{product.state.pimg}' /><br />
                                {product.state.ptitle}<br />
                                {product.state.pprice}
                            </li>
                    )}
                </ul>
            </div>
        </>
    );
}

function registProduct(productArr) {
    const productObj = new Product();
    productObj.state.pno = productArr[0];
    productObj.state.ptitle = productArr[1];
    productObj.state.pcontent = productArr[2];
    productObj.state.pimg = productArr[3];
    productObj.state.pprice = productArr[4];
    productList.push(productObj);
}