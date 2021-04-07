import React, { useMemo, useRef } from 'react';
import { MdFullscreen } from 'react-icons/md';
import Button from '../../components/Button/Button';
import './styles.css';

import { Canvas, useFrame } from "react-three-fiber"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import { OrbitControls } from "drei"
import "./dotmaterial"

const ROW = 50
const COL = 50
const NUM = ROW * COL

function Particles({ pointCount }) {
    const [coords, sizes] = useMemo(() => {
      const initialCoords = []
      const initialSizes = []
      let i = 0
      for (let y = 0; y < ROW; y += 1) {
        for (let x = 0; x < COL; x += 1) {
          initialCoords.push(x)
          initialCoords.push(y)
          initialCoords.push(i)
          initialSizes.push(Math.random() < 0.03 ? 15 : 6)
          i++
        }
      }
  
      const coords = new Float32Array(initialCoords)
      const sizes = new Float32Array(initialSizes)
      return [coords, sizes]
    }, [pointCount])
  
    const geom = useRef()
    useFrame((state) => {
      geom.current.material.uniforms.time.value = state.clock.getElapsedTime()
      geom.current.geometry.verticesNeedUpdate = true
    })
  
    return (
      <points ref={geom} position={[0, 10, 0]} rotation={[-Math.PI / 4, 0, Math.PI / 6]}>
        <bufferGeometry>
          <bufferAttribute attachObject={["attributes", "position"]} count={coords.length / 3} array={coords} itemSize={3} />
          <bufferAttribute attachObject={["attributes", "size"]} count={sizes.length} array={sizes} itemSize={1} />
        </bufferGeometry>
        <dotMaterial />
      </points>
    )
  }

const Landing = () => {
    return (
        <div className='landing'>
            <Canvas style={{position: 'absolute', width: '100%', height: '100%', zIndex: 0}} pixelRatio={[1, 2]} camera={{ position: [0, 0, 2] }}>
                <color attach="background" args={["#202025"]} />
                <Particles pointCount={NUM} />
                <OrbitControls />

            </Canvas>


            <div className='container-fluid landing d-flex flex-column justify-content-evenly align-items-center' style={{zIndex: 5, width: '100%', height: '100%', position: 'absolute'}}>
            
            <div className='heading-text w-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 id='heading'>
                Elijah Hampton
            </h1>

            <h2 id='subheading'>
                Design and Development
            </h2>
            </div>

            <div className='w-75 d-flex flex-row align-items-center justify-content-evenly border rounded border-light p-5'>
                <div className='stats-container d-flex flex-column align-items-center justify-content center'>
                    <h3>
                        20+
                    </h3>
                    <h6>
                        Clients
                    </h6>
                </div>

                <div className='stats-container d-flex flex-column align-items-center justify-content center'>
                    <h3>
                        8+
                    </h3>
                    <h6>
                        Projects
                    </h6>
                </div>

                <div className='stats-container d-flex flex-column align-items-center justify-content center'>
                    <h3>
                        6+
                    </h3>
                    <h6>
                        Years
                    </h6>
                </div>
            </div>


            <div className='social-stick'>
                <MdFullscreen size={20} className='social-icon my-2' />

                <MdFullscreen size={20} className='social-icon my-2' />

                <MdFullscreen size={20} className='social-icon my-2' />
                <div className='line' />
            </div>


            <Button inverted>
                See My Work
            </Button>
    </div>
</div>

    )
}

export default Landing;
