import Head from 'next/head'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
        document.getElementById("finalRes").innerText = response.result.toFixed(2) + " NOK";
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  )
}
