import React from 'react'
import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

import { ActionGrid } from '../components/ActionGrid'
import AudioStories from '../components/AudioStories'
import PracticeWithHumans from '../components/PracticeWithHumans'
import PracticeWithAI from '../components/PracticeWithAI'

const Home = () => {
  return (
   <div className="pb-20 bg-emerald-50">
      <Header />
      <ActionGrid/>
      <AudioStories/>
      <BottomNav />
      <PracticeWithHumans/>
      <PracticeWithAI/>
    </div>
  )
}

export default Home
