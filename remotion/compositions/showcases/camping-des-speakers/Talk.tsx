import {Img, Sequence, staticFile} from "remotion";
import {TalkProps} from "./CampingDesSpeakers";
import {Details} from "./components/Details";
import {Speakers} from "./components/Speakers";
import {TalkTitle} from "./components/TalkTitle";

export const Talk: React.FC<TalkProps> = ({ title, speakers, date, time, location }) => {
  return (
    <>
      <Sequence from={300}>
        <Speakers speakers={speakers}/>
        <TalkTitle title={title} style={{}}/>
        <Img src={staticFile('images/conferences/campingDesSpeakers/cds_logo.png')} alt="Conference logo" style={{
          position: 'absolute',
          top: 0,
          right: 30,
          width: '150px',
        }}/>
      </Sequence>
      <Sequence from={320}>
        <Details date={date} time={time} location={location}/>
      </Sequence>
    </>
  )
}