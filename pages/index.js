import Head from 'next/head'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Home() {

  const callAPI = async () => {

    function getInput() {
      let numberInput = document.getElementById("input").value;

      let numberQ = numberInput;
      console.log(numberQ)
      return numberQ
    }

    try {
      var requestURL = 'https://api.exchangerate.host/convert?from=AUD&to=NOK&amount=' + getInput();
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      request.onload = function () {
        var response = request.response;
        document.getElementById("finalRes").innerText = response.result.toFixed(2) + "NOK";
      }
    } catch (err) {
      console.log(err);
    }

    /* var myHeaders = new Headers();
    myHeaders.append("apikey", process.env.API_URL);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    try{  
    await fetch(
      fetch("https://api.apilayer.com/exchangerates_data/convert?to=NOK&from=AUD&amount=" +getInput(), requestOptions)
        .then(response => response.json())
        .then((result) => {
          console.log(result.result);
          document.getElementById("finalRes").innerText = result.result.toFixed(2) + "NOK";
        })
        .catch(error => console.log('error', error)))
        
    }catch (err){
      console.log(err);
  } */
  }
  return (
    <div className="container">
      <Head>
        <title>Converter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography id="res" variant='h1'>AUD to NOK</Typography>
        <TextField id="input" label="" type="number"></TextField>

        <br></br>
        <Button variant="contained" onClick={callAPI}>Convert</Button>

        <Typography id="finalRes" variant="h1"></Typography>

      </main>

    </div>
  )
}
