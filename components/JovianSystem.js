import * as THREE from 'three'
import Planet from "./planet";
export const CreateJovianSystem = (solarSystem) =>{
    const jupiterGeometry = new THREE.SphereGeometry(40)
    const jupiterTexture = new THREE.TextureLoader().load("jupiter.jpg")
    const jupiterMaterial = new THREE.MeshBasicMaterial({map: jupiterTexture})
    const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    jupiterMesh.position.set(0, 0, 0)
    const jovianSystem = new THREE.Group();
    jovianSystem.name = 'jovianSystem'
    jovianSystem.add(jupiterMesh);
 

    const io = new Planet(11,150, 'io.jpg', 0)
    const ioMesh = io.getMesh();
    const ioSystem = new THREE.Group();
    ioSystem.add(ioMesh);

    const europa = new Planet(9,0, 'europa.jpg', 150)
    const europaMesh = europa.getMesh();
    const europaSystem = new THREE.Group();
    europaSystem.add(europaMesh);

    const ganymede = new Planet(16,0, 'ganymede.jpg', -150)
    const ganymedeMesh = ganymede.getMesh();
    const ganymedeSystem = new THREE.Group();
    ganymedeSystem.add(ganymedeMesh);

    const callisto = new Planet(15,-150, 'callisto.jpg', 0)
    const callistoMesh = callisto.getMesh();
    const callistoSytstem = new THREE.Group();
    callistoSytstem.add(callistoMesh);

    jovianSystem.add(ioSystem,europaSystem, ganymedeSystem, callistoSytstem )

    const ioSpeed = 2 * Math.PI * (1/60) * (1/60)
    const animate = () =>{
      jupiterMesh.rotation.y += 0.001
      jupiterMesh.rotation.z += 0.001

      ioSystem.rotation.y += ioSpeed
      ioSystem.rotation.z += ioSpeed/4

      europaSystem.rotation.y += ioSpeed
      europaSystem.rotation.z += ioSpeed/4


      ganymedeSystem.rotation.y += ioSpeed 
      ganymedeSystem.rotation.z += ioSpeed/4

      callistoSytstem.rotation.y += ioSpeed
      callistoSytstem.rotation.z += ioSpeed/4

      requestAnimationFrame(animate)
    }
    animate()

    solarSystem.add(jovianSystem)
}

export default CreateJovianSystem