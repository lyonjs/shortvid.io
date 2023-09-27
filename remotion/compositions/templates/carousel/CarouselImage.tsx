import { CSSProperties } from 'react'
import { Easing, Img, interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

export type AnimationMode = 'slideLeft'
export function CarouselImage({ imageUrl, imageDuration, noAnimation = false }: { imageUrl: string, imageDuration: number, noAnimation?: boolean}) {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const animationDuration = imageDuration * 0.10;
  const slide = interpolate(frame, [imageDuration - animationDuration , imageDuration], [0,width/2], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  })
  const opacity = interpolate(frame, [imageDuration - animationDuration , imageDuration], [1,0], {
    extrapolateRight: 'clamp'
  })


  let animation: CSSProperties = {
    transform: `translate(-${slide}px)`,
    opacity,
  }

  if(noAnimation) {
    animation = {}
  }

  return <>
    <Img src={imageUrl} style={{
      position: 'absolute',
      inset: 0,
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      filter: 'blur(20px)',
      transform: 'scale(1.2)',
      opacity: 0.3,
      ...animation
    }}/>
    <Img src={imageUrl} style={{
      position: 'absolute',
      inset: 0,
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      ...animation
    }}/>
  </>

}