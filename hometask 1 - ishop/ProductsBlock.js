let ProductsBlock = React.createClass({
    displayName: "ProductsBlock",

    render: function() {
        let products = [];
        this.props.products.forEach((product) => {
            let tdArr = [];
            for (let key in product) {
                if (key !== 'code')
                    if (key === 'imgUrl') {
                        tdArr.push(React.DOM.td({
                            className: "ProductsBlock__img",
                            key: Math.random(),
                        }, React.DOM.img({
                            src: product[key],
                        })));
                    } else {
                        tdArr.push(React.DOM.td({
                            key: Math.random(),
                        }, product[key]));
                    }
            }

            let tableRow = React.DOM.tr({
                key: product.code,
                className: "ProductsBlock__rows"
            }, tdArr);

            products.push(tableRow);
        });

        let tbody = React.DOM.tbody(null,
            React.DOM.tr({
                className: "ProductsBlock__tHeader",
            }, React.DOM.th({
                colSpan: 4,
            }, this.props.title)),
            React.DOM.tr({
                    className: "ProductsBlock__tHeader"
                },
                React.DOM.th(null, 'Название товара:'),
                React.DOM.th(null, 'Цена товара:'),
                React.DOM.th(null, 'Фото товара:'),
                React.DOM.th(null, 'Количество товара:'),
            ), products);

        return React.DOM.table({
            className: "ProductsBlock__table",
        }, tbody);
    },
})