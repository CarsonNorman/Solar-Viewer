import * as THREE from 'three'
import Planet from './planet'
export const CreateSolarSystem = (parent) =>{
    const sunGeometry = new THREE.SphereGeometry(40)
    const sunTexture = new THREE.TextureLoader().load("sun.jpg")
    const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture})
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.position.set(0, 0, 0)
    const solarSystem = new THREE.Group();
    solarSystem.name = 'solarSystem'
    solarSystem.add(sunMesh)
    
    const mercury = new Planet(10, 80, 'mercury.jpg')
    const mercuryMesh = mercury.getMesh()
    let mercurySystem = new THREE.Group()
    mercurySystem.add(mercuryMesh)
    
    const venus = new Planet(15, 140, 'venus.jpg')
    const venusMesh = venus.getMesh()
    let venusSystem = new THREE.Group()
    venusSystem.add(venusMesh)

    const earth = new Planet(20, 210, 'earth.jpg')
    const earthMesh = earth.getMesh()
    let earthSystem = new THREE.Group()
    earthSystem.add(earthMesh)

    const mars = new Planet(15, 280, 'mars.jpg')
    const marsMesh = mars.getMesh()
    let marsSystem = new THREE.Group()
    marsSystem.add(marsMesh)

    const jupiter = new Planet(25, 450, 'jupiter.jpg')
    const jupiterMesh = jupiter.getMesh()
    let jupiterSystem = new THREE.Group()
    jupiterSystem.add(jupiterMesh)
    
    const saturn = new Planet(30, 800, 'saturn.jpg')
    const saturnMesh = saturn.getMesh()
    let saturnSystem = new THREE.Group()
    saturnSystem.add(saturnMesh)

    const uranus = new Planet(40, 1200, 'uranus.jpg')
    const uranusMesh = uranus.getMesh()
    let uranusSystem = new THREE.Group()
    uranusSystem.add(uranusMesh)

    const neptune = new Planet(25, 1700, 'neptune.jpg')
    const neptuneMesh = neptune.getMesh()
    let neptuneSystem = new THREE.Group()
    neptuneSystem.add(neptuneMesh)

    const pluto = new Planet(5, 2200, 'pluto.jpg')
    const plutoMesh = pluto.getMesh()
    let plutoSystem = new THREE.Group()
    plutoSystem.add(plutoMesh)

    solarSystem.add(mercurySystem, venusSystem, earthSystem, marsSystem, jupiterSystem, saturnSystem, uranusSystem, neptuneSystem, plutoSystem)
    const earthYear = 2 * Math.PI * (1/60) * (1/60)

    const animate = () =>{
      sunMesh.rotation.y += 0.001
      mercurySystem.rotation.y += earthYear * 4
      venusSystem.rotation.y += earthYear * 2
      earthSystem.rotation.y += earthYear
      marsSystem.rotation.y += earthYear * .5
      jupiterSystem.rotation.y += earthYear * .25
      saturnSystem.rotation.y += earthYear * .125
      uranusSystem.rotation.y += earthYear * .0625
      neptuneSystem.rotation.y += earthYear * .03125
      plutoSystem.rotation.y += earthYear * .015625


      requestAnimationFrame(animate)
    }
    animate()

    parent.add(solarSystem);

}

export default CreateSolarSystem