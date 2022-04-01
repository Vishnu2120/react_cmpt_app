 const Invoices = [
    // {
    //   "name": "Dorustree",
    // "number": 0,
    // "address": "India",
    // "website": "https://www.dorustree.com/"
    // },
    // {
    //   "name": "SilverCloud",
    // "number": 1,
    // "address": "India",
    // "website": "https://www.silvercloud.com/"
    // },
    // {
    //   "name": "Access Network",
    // "number": 2,
    // "address": "India",
    // "website": "https://www.anwsi.com/"
    // },
    // {
    //   "name": "10Decoders",
    // "number": 3,
    // "address": "India",
    // "website": "https://www.10Decoders.com/"
    // },
    
  ];
  
  export function getInvoices() {
    return JSON.stringify( Invoices);
  }
  export function getInvoice(number) {
    return Invoices.find(
      (invoice) => invoice.number === number
    );
  }

  export function setInvoices(state){
    const isExist = Invoices.findIndex(each=>each.number === state.number)
    console.log('isExist',isExist)

    if(isExist === -1){//add
      return Invoices.push(state)
    }
    else{//edit
      Invoices.splice(isExist,1,state);
      return Invoices;
    }
  }

  export function deleteInvoice(index){
      Invoices.splice(index, 1);
      return  Invoices
          
  }

  