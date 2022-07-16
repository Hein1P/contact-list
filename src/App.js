import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {ContactList} from "./components/ContactList";
import {Container, Grid} from "@mui/material";

function App() {
  const url = "https://randomuser.me/api/?results=50";
  const [data,setData]= useState(null)
  useEffect(()=>{
    fetch(url)
        .then(data=>data.json())
        .then(data=>setData(data.results))
        .catch(error=>{throw(error)})
  },[])
  console.log("Data",data)
  return (
      <Container maxWidth="xl" sx={{marginTop:2}}>
        <Grid  container spacing={2}>
            {data ? data.map(contact=>{
                return(
                    <Grid item xs={4}>
                        <ContactList contact={contact}/>
                    </Grid>
                )
            }): null}
        </Grid>

      </Container>
  );
}

export default App;
