
export const getAUD = async () => {
    try{
        const response = await fetch ('https://economia.awesomeapi.com.br/last/AUD-BRL');
        const json = await response.json();
        if(json.AUDBRL){
            return parseFloat(json.AUDBRL.ask)
        }
        return 0;
    }catch(error){
        return 0
      }

  }
export const getUSD = async () => {
    try{
        const response = await fetch ('https://economia.awesomeapi.com.br/last/USD-BRL');
        const json = await response.json();
        if(json.USDBRL){
            return parseFloat(json.USDBRL.ask)
        }
        return 0;
    }catch(error){
        return 0
      }

  }
export const getEUR = async () => {
    try{
        const response = await fetch ('https://economia.awesomeapi.com.br/last/EUR-BRL');
        const json = await response.json();
        if(json.EURBRL){
            return parseFloat(json.EURBRL.ask)
        }
        return 0;
    }catch(error){
        return 0
      }

  }
export const getGBP = async () => {
    try{
        const response = await fetch ('https://economia.awesomeapi.com.br/last/GBP-BRL');
        const json = await response.json();
        if(json.GBPBRL){
            return parseFloat(json.GBPBRL.ask)
        }
        return 0;
    }catch(error){
        return 0
      }

  }

  
