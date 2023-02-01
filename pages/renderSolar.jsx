import { useEffect } from "react";
import CreateSolarSystem from "../components/SolarSystem";
import * as THREE from "three";
import SceneInit from "../components/SceneInit";
import Link from 'next/link'
import SolarInfo from "../components/SolarInfo";

function RenderSolar() {
    useEffect(() => {
        const solarSystem = new THREE.Group();
        let solar = new SceneInit();
        solar.initScene();
        solar.animate();

        solar.scene.add(solarSystem)
        solarSystem.add(CreateSolarSystem(solarSystem))
    }, [])
    const handleClear = (solarSystem, system) => {
        solarSystem.children.forEach(child => child.name == system ? solarSystem.remove(child) : null)
    }
    return (
        <>
            <div id='infoParent'>
                <Link href='/' id='link' onClick={() => handleClear(solarSystem, 'solarSystem')}>Back</Link>
                <SolarInfo />

            </div>

            <canvas id='solarCanvas' />
        </>
    );
}

export default RenderSolar;