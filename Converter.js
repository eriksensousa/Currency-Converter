var url = "https://api.exchangeratesapi.io/latest?base="

            async function convert(){
                var base = document.getElementById('Base').value;
                var out =  document.getElementById('Output').value;
                var amount =  document.getElementById('Amount').value;
                var final;
                let response = await fetch(`${url}${base}`,{method:'GET'})
                let data = await response.json()
                final = data.rates
                final = final[out]*Number(amount)
                var result = `Converted Amount of ${amount} ${base} is ${final} ${out}`
                document.getElementById('Converted').innerText=result
            }