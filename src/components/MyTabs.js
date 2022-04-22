import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from './MyMap';

export default function MyTabs(height, defaultCenter, defaultZoom, width, anchor)  { 
    return(
  <Tabs>
    <TabList>
      <Tab>Borkenberge</Tab>
      <Tab>Hometown</Tab>
      <Tab>Greenwich</Tab>
      <Tab>Bahamas</Tab>
    </TabList>

    <TabPanel>
        <div className='tableDiv'>
      <h2>Borkenberge</h2>
      <MyMap height= {500} defaultCenter={[51.7792, 7.2884]}
       defaultZoom={15} width={25} anchor={[51.7792, 7.2884]}/>
       <p>Earlybird learned how to drive a car on my Dads lap.</p>
       </div>
    </TabPanel>
    <TabPanel>
    <div className='tableDiv'>
      <h2>Driving School</h2>
      <MyMap height= {500} defaultCenter={[51.5450, 7.2187]}
       defaultZoom={15} width={25} anchor={[51.5450, 7.2187]}/>
       <p>Learned how to drive a car again, this time not on my Dads lap.</p>
       </div>
    </TabPanel>
    <TabPanel>
    <div className='tableDiv'>
      <h2>0° Meridian</h2>
      <MyMap height= {500} defaultCenter={[51.477678, 0.0]}
       defaultZoom={2} width={50} anchor={[51.477678, 0.0]}/>
       <p>As per convention, the 0° meridian passes through Greenwich.</p>
       </div>
    </TabPanel>
    <TabPanel>
    <div className='tableDiv'>
      <h2>The Bahamas!</h2>
      <MyMap height= {500} defaultCenter={[24.510, -77.009]}
       defaultZoom={5} width={50} anchor={[24.510, -77.009]}/>
       <p>Not been there yet, maybe one day.</p>
       </div>
    </TabPanel>
  </Tabs>
);
;}