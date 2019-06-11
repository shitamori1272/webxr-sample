"use strict";
exports.__esModule = true;
var THREE = require("three");
// intial commit sample
window.addEventListener("DOMContentLoaded", init);
function init() {
    var width = 960;
    var height = 540;
    var renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, +1000);
    var geometry = new THREE.BoxGeometry(500, 500, 500);
    var material = new THREE.MeshStandardMaterial({
        color: 0x0000ff
    });
    var box = new THREE.Mesh(geometry, material);
    scene.add(box);
    var light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 2;
    light.position.set(1, 1, 1);
    scene.add(light);
    tick();
    function tick() {
        requestAnimationFrame(tick);
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
}
