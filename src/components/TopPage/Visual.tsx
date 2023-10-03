import { fadeIn } from '@/constants/animation'
import { Box, Heading } from '@chakra-ui/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo } from 'react'
import * as THREE from 'three'
import { vertexShader, fragmentShader } from './shader'
import { PerspectiveCamera } from '@react-three/drei'

export const Visual = () => {
  return (
    <Box
      w={'100%'}
      padding={'50px 0'}
      background={'radial-gradient(closest-side,#FFFFFF,#F7F7F9)'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      position={'relative'}
      animation={`${fadeIn} 3s forwards`}
    >
      <Canvas style={{ position: 'absolute' }}>
        <PerspectiveCamera />
        <Particle />
      </Canvas>
      <Box
        w={[200, 300]}
        h={[200, 300]}
        rounded={'full'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        border={'solid 5px'}
        zIndex={1}
      >
        <Heading fontSize={[20, 30]}>OCHA .dev</Heading>
      </Box>
    </Box>
  )
}

const Particle = () => {
  const planePositions = useMemo(() => {
    const planeGeometry = new THREE.SphereGeometry(3, 120, 120)
    const positions = planeGeometry.attributes.position.array
    return positions
  }, [])

  const shaderArgs = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    }),
    [],
  )

  useFrame(() => {
    shaderArgs.uniforms.uTime.value++
  })
  return (
    <points rotation={[0, 0, Math.PI / 3]}>
      <bufferGeometry attach={'geometry'}>
        <bufferAttribute
          attach={'attributes-position'}
          array={planePositions}
          itemSize={3}
          count={planePositions.length / 3}
        />
      </bufferGeometry>
      <shaderMaterial
        args={[shaderArgs]}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </points>
  )
}
