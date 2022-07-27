
function render(){
    const productsCard = localStorageUtil.getProducts();

    headerPage.render(productsCard.length);
    productsPage.render();
}   

spinnerPage.render();

let CATALOG = [];



fetch('http://myjson.dit.upm.es/api/bins/d932')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(() =>{
            spinnerPage.handleClear();
            render();
        },1500) ; 
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });