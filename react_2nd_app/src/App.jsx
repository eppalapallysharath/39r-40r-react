import './App.css'

function App() {
  const a = "hi";
  const num = 123;
  const t = true;
  const f = false;
  const n = null;
  const u = undefined;

  const arr = ["hi", 123,"wow", null, undefined, true, false]
  const obj = { name: "sharath", age:20}

  return<section className="container" > 
    <h1>hi hello {a}</h1> 
    <p>sharath</p> 
    <h6>number {num}</h6>
    <div>
      <ol>
        <li>{t}</li>
        <li>{f}</li>
        <li>{n}</li>
        <li>{u}</li>
        <li>{arr}</li>
        {/* <li>{JSON.stringify(obj)}</li> */}
        <li>{obj.name} {obj.age}</li>
      </ol>
    </div>
    </section>
}

export default App
