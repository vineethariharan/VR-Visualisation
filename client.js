import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.controls.clearCameraControllers();
  // Create three roots: two flat panels on the left and the right, and a Location
  // to mount rendered models in 3D space
  // const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  // leftPanel.setAngle(-0.6, 0);
  // Cube1.add();
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.7, 0);
  // cube.add();
  // r360.renderToSurface(
  //   r360.createRoot('TopPosts'),
  //   leftPanel,
  // );
  r360.renderToSurface(
    r360.createRoot('ButtonPanel'),
    rightPanel,
  );
  r360.renderToLocation(
    r360.createRoot('ModelView'),
    new Location([0, -2, -10]),
  );
  r360.compositor.setBackground('./static_assets/360_world.jpg');
}


window.React360 = {init};
