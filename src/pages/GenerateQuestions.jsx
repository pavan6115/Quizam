import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import './GenerateQuestion.css'

export function GenerateQuestions() {
  return (
    <div className='wrapper'>
      <Navbar />
        <section className='content' id="para">
          <div className='content__input'>
            <label>
                <textarea name="text__inp" id="" cols="80" rows="15" placeholder='Input Paragraph' className='text__inp'></textarea>
            </label>
          </div>
          <button className='generate__btn'>Generate</button>
        </section>
    </div>
  )
}
