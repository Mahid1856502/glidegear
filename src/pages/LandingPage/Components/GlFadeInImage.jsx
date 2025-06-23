// import { Spring } from '@react-spring/web';
// import React from 'react';
// import ReactGlTransitionImage from 'react-gl-transition-image';
// import { useInView } from 'react-intersection-observer';

// const GlFadeInImage = ({ src }) => {
//   const [ref, inView] = useInView({
//     threshold: 0,
//     triggerOnce: true,
//   });
//   return (
//     <Spring
//       config={{
//         tension: 180,
//         friction: 45,
//         clamp: true,
//       }}
//       to={{ progress: inView ? 1 : 0 }}
//     >
//       {(animProps) => (
//         <ReactGlTransitionImage
//           ref={ref}
//           src={src}
//           progress={animProps.progress}
//         />
//       )}
//     </Spring>
//   );
// };

// export default GlFadeInImage;

import React from 'react';

import ReactGlTransitionImage, {
  glitchTransition,
  polkaTransition,
  noiseSwirlsTransition,
  blurTransition,
  waterTransition,
  randomSquaresTransition,
} from 'react-gl-transition-image';

import { useInView } from 'react-intersection-observer';
import { Spring } from '@react-spring/web';

const GlFadeInImage = ({ src, textures, mask, transition }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const onAssetsLoaded = React.useCallback(
    () => setAssetsLoaded(true),
    [setAssetsLoaded],
  );

  const active = inView && assetsLoaded;

  return (
    <div className="image">
      <Spring
        config={{
          tension: 180,
          friction: 45,
          clamp: true,
        }}
        to={{
          fadeProgress: active ? 1 : 0,
          scale: active ? 1 : 0.9,
          yPos: active ? 0 : 80,
        }}
      >
        {(animProps) => (
          <ReactGlTransitionImage
            ref={ref}
            src={src}
            loadAssetsOn={inView}
            onAssetsLoaded={onAssetsLoaded}
            mask={mask}
            textures={textures}
            transition={transition}
            progress={animProps.fadeProgress}
            style={{
              transform: `scale(${animProps.scale}) translate3d(0, ${animProps.yPos}px, 0)`,
            }}
          />
        )}
      </Spring>
    </div>
  );
};

export default GlFadeInImage;
