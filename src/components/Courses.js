import React from 'react'

import AdmitereIcon from '../assets/admitere-icon.svg'
import BacalaureatIcon from '../assets/bacalaureat-icon.svg'
import OlimpiadaIcon from '../assets/olimpiada-icon.svg'

function Courses() {
  return (
    <div className='container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 '>
      <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
        <h1 className="font-bold text-darken my-3 text-2xl">CodeWiki <span className='ml-2 mr-2'> | </span> <span className="text-orange-500">Investește în educația ta</span></h1>
        <p className="leading-relaxed text-gray-500">
          Alege metoda de învățare potrivită nevoilor și dorințelor tale!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
        <div data-aos="fade-up" className="bg-white p-6 text-center rounded-xl shadow-xl hover:shadow-2xl hover:shadow-orange-100">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <img src={AdmitereIcon} alt="" className='w-8 h-8'/>
            {/* <img src={AdmitereIcon} alt="" className='w-12 h-12' /> */}
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Admitere</h1>
          <p className="px-4 text-gray-500">
          Indiferent de nivelul tău de pregătire, vei găsi materiale utile care să te ajute să te pregătești și să-ți maximizezi șansele de a obține un loc la o facultate de informatică   </p>     </div>

        <div data-aos="fade-up" data-aos-delay="150" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <img src={BacalaureatIcon} alt="" className='ml-1 w-8 h-8 mt-[3px] text-white' />
          </div>
          <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">Bacalaureat</h1>
          <p className="px-4 text-gray-500">
          Poți beneficia de ghiduri studiu, subiecte din anii trecuți rezolvate complet, cu explicații detaliate și feedback personalizat la propriile soluții          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-xl p-6 text-center rounded-xl hover:shadow-2xl hover:shadow-orange-100">
          <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <img src={OlimpiadaIcon} alt="" className='w-[36px] h-[36px] mt-[2px]' />
          </div>
          <h1 className="font-medium text-xl mb-2 lg:px-14 text-darken">Olimpiadă</h1>
          <p className="px-4 text-gray-500">
          Oferim o varietate de materiale de învățare, astfel încât să poți învăța în ritmul tău ca să te poți simți pregătit pentru a excela la competițiile de programare
            
          </p>

        </div>
      </div>
    </div>
  )
}

export default Courses