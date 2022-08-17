import {
  Color4,
  FreeCamera,
  HemisphericLight,
  MeshBuilder,
  Vector3,
} from "@babylonjs/core";
import { Container } from "@mui/system";
import SceneComponent from "./SceneComponent";
import "./BabylonExperience.css";

function BabylonExperience() {
  let sphere;

  const onSceneReady = function (scene) {
    scene.clearColor = new Color4(0, 0, 0, 0);

    // This creates and positions a free camera (non-mesh)
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());
    camera.inputs.clear();

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    createEnvironment(scene);
  };

  function createEnvironment(scene) {
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 3, segments: 8 },
      scene
    );

    // Move the box upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape.
    // MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  }

  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */
  const onRender = (scene) => {
    if (sphere !== undefined) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();

      const rpm = 10;
      sphere.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  };

  return (
    <Container>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="cm-main-canvas"
      />
    </Container>
  );
}

export default BabylonExperience;
