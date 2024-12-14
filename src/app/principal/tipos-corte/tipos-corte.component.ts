import { Component, ElementRef, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

@Component({
  selector: 'app-tipos-corte',
  templateUrl: './tipos-corte.component.html',
  styleUrl: './tipos-corte.component.scss'
})
export class TiposCorteComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.loadModel('viewer1', 'assets/imagenes/pulido.obj', 'assets/imagenes/pulido.mtl');
    this.loadModel('viewer2', 'assets/imagenes/a45.obj', 'assets/imagenes/a45.mtl');
    this.loadModel('viewer3', 'assets/imagenes/boleado.obj', 'assets/imagenes/boleado.mtl');
    this.loadModel('viewer4', 'assets/imagenes/boleado.obj', 'assets/imagenes/boleado.mtl');
    this.loadModel('viewer5', 'assets/imagenes/boleado.obj', 'assets/imagenes/boleado.mtl');
  }

  loadModel(containerId: string, objPath: string, mtlPath: string) {


    const container = this.el.nativeElement.querySelector(`#${containerId}`);

    // Configuración básica
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const heightInVh = window.innerHeight * 0.27; 
    renderer.setSize(container.offsetWidth, heightInVh);
    container.appendChild(renderer.domElement);
    renderer.setClearColor(0x000000, 0);

    // Luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5).normalize();
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(10, 15, 20).normalize();
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);  // Luz ambiental suave
    scene.add(ambientLight);

    // Controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Suavizar el movimiento
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 2; // Velocidad de rotación
    controls.zoomSpeed = 2; // Velocidad de zoom

    // Cargar el archivo .obj con el archivo .mtl para las texturas
    const mtlLoader = new MTLLoader();
    mtlLoader.load(mtlPath, (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(objPath, (object) => {
        scene.add(object);

        // Centrar y ajustar la escala del modelo cargado
        const box = new THREE.Box3().setFromObject(object);
        const center = box.getCenter(new THREE.Vector3());
        object.position.set(-center.x, -center.y, -center.z); // Centrar el objeto en la escena
        object.scale.set(1.2,1.2,1.2); // Ajustar escala si es necesario

         // Ajustar posición inicial de la cámara y controles
      const size = box.getSize(new THREE.Vector3()); // Tamaño del objeto
      const maxDimension = Math.max(size.x, size.y, size.z);

      // Posición de la cámara en la esquina
      camera.position.set(maxDimension * 0, maxDimension * -2, maxDimension * 0.8); 
      camera.lookAt(center); // Enfocar al centro del objeto
      controls.target.copy(center); // Configurar controles hacia el centro
      controls.update();
      camera.position.z=7;
      });
    });

    // Animación
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();


  }

}
