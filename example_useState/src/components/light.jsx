export function Light (sharath) {

    console.log(sharath)
    return <>
        <p>this lights component</p>
        {sharath.isLight == true ? <h1>bike light are on</h1>: <h1>bike lights are off</h1>}
        {sharath.model.map(v => <h2>{v}</h2>)}
    </>
}