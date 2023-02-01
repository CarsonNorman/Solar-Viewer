
import Link from 'next/link'




export default function Home() {
  return (
    <>
    <div style={{
      backgroundColor: 'black',
      color: 'white'
    }}>
        <div id='landingDiv' style={{
          width: "100vw",
          height: "100vh",
          
        
        }}>
          <div style={{
            width: "20vw",
            textAlign: "center"
          }}>
            <h1 id='title'>Solar Viewer</h1>
            <div id='buttonContainer' style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <Link href="/renderSolar" style={{color:"white"}}>Solar System</Link>

              <Link href="/renderJovian" style={{color:"white"}}>Jovian System</Link>
            </div>
          </div>
        </div>
        </div>

    </>
  )
}
