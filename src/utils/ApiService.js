const ApiService = {

    ListaEmpresas : () =>{
        return fetch('https://financialmodelingprep.com/api/v3/company/stock/list')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    Analyze: id => {
        return fetch(`https://financialmodelingprep.com/api/v3/financials/income-statement/${id}`)
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },
    TrataErros : res =>{
        if(!res.ok){
            
            throw Error(res.responseText);
        }
        return res;
    } 
}
export default ApiService;