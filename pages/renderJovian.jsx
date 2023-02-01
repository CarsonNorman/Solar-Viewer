import { useEffect } from "react";
import CreateJovianSystem from "../components/JovianSystem";
import * as THREE from "three";
import SceneInit from "../components/SceneInit";
import Link from 'next/link'
import JovianInfo from "../components/JovianInfo";

function RenderJovian() {
    useEffect(() => {
        const solarSystem = new THREE.Group();
        let solar = new SceneInit();
        solar.initScene();
        solar.animate();

        solar.scene.add(solarSystem)
        solarSystem.add(CreateJovianSystem(solarSystem))
    }, [])
    const handleClear = (solarSystem, system) => {
        solarSystem.children.forEach(child => child.name == system ? solarSystem.remove(child) : null)
      }
    return ( 
        <>
        <div id='infoParent'>
        <Link href='/' id='link' onClick={() => handleClear(solarSystem, 'jovianSystem')}>Back</Link>

        <JovianInfo/>
        </div>
        
        <canvas id='solarCanvas' />
        </>
     );
}

export default RenderJovian;