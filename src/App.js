
import './App.css';
import React ,{useState} from 'react'


const ve = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: false }
];




function App() {

const [liste,setListe] =useState(ve)

const [neu ,setNeue ] =useState('')

console.log('deneme',neu)
  return (
    <div className="App">
      <h1>Yapilacaklar Listesi</h1>

      <div className='ekleme butonu'>
        <input
        value={neu}
        onChange={e=>setNeue(e.target.value)}
         type='text' 
         placeholder='yapilacak girin'/>


        <button
        onClick={()=>{
        setListe([...liste ,{id: Date.now() , baslik: neu ,completed:false}])
        setNeue('')
        }}
        
        >Ekle</button>


      </div>
      <div className='liste'>
      {
       liste.map((e ,index)=> {
         return(
            <div  key={index}
             onClick={()=>
              setListe(
                liste.map( el=> el.id === e.id ? {...el,tamamlandi:!el.tamamlandi} :el )
              )
            }
            className={e.tamamlandi ? 'yapildi' : ''}>{e.baslik}
            </div>
         )
        
       })
      }
        
      </div>
      <button onClick={()=>setListe(liste.filter(e=>! e.tamamlandi))}
      className='temizle'> Yapilanlari Temizle</button>
    </div>
  );
}

export default App;
