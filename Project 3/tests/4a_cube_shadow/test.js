function configureTest(callback) {

    const camera = new PerspectiveCamera(Math.PI / 4, 1, Mat4.identity());
    const scene = new Scene();

    scene.addLight(new SimplePointLight(
        Vec.of(10, 5, 10, 1),
        Vec.of(1, 1, 1)       
    ));
    scene.addObject(new SceneObject(
        new Plane(Vec.of(0, 1, 0, 0), -1),
        new PhongMaterial(Vec.of(1,0,0), 0.3, 0.8, 0.6, 100)));

    loadObjFile(
        "../assets/cube.obj",
        new PhongMaterial(Vec.of(0,0,1), 0.2, 0.4, 0.6, 100),

        Mat4.translation([0.6,0,-4])
            .times(Mat4.rotation(Math.PI/9, Vec.of(1,0,0)))
            .times(Mat4.rotation(Math.PI/3, Vec.of(0,1,0))),

        function(triangles) {
            scene.addObjects(triangles);

            callback({
                renderer: new SimpleRenderer(scene, camera, 4),
                width: 600,
                height: 600
            });
        });
}