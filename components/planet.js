import * as THREE from 'three';

export default class Planet{
    constructor(radius, positionX, textureFile, positionZ = 0){
        this.radius= radius
        this.positionX = positionX
        this.textureFile = textureFile
        this.positionZ = positionZ

    }

    getMesh(){
        if(this.mesh === undefined || this.mesh === null){
            const geometry = new THREE.SphereGeometry(this.radius)
            const texture = new THREE.TextureLoader().load(this.textureFile)
            const material = new THREE.MeshBasicMaterial({map: texture})
            this.mesh = new THREE.Mesh(geometry, material);
            this.mesh.position.x += this.positionX;
            this.mesh.position.z += this.positionZ;
        }
        return this.mesh
    }
}