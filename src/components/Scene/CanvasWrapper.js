import React, { useEffect, useRef, useState } from 'react'
import "./Scene.scss";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import Scene from './Scene';

const CanvasWrapper = ({settings, selectedPlanet, planetSelected, planetdata}) => {

    return (
        <div id="canvas-wrap">
            <Canvas>
                <Scene 
                    selectedPlanet={selectedPlanet}
                    planetSelected={planetSelected}
                    planetdata={planetdata}
                    settings={settings} />
            </Canvas>
        </div>
    )
}

export default CanvasWrapper;