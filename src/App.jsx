import './App.css';
import Save from './assets/Save.PNG';
import Instruction from './assets/Instruction.PNG';
import OnVid from './assets/OnVideoCard.PNG';
import SaveVid from './assets/saveit.MOV';
import Save1 from './assets/SaveItHero1.mov';
import Save2 from './assets/SaveItHero2.mov';
import Save3 from './assets/SaveItHero3.mov';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import ru from './locale/ru';
import en from './locale/en';
import uz from './locale/uz';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    uz: { translation: uz },
  },
  lng: 'uz',            // <-- тут меняем на 'uz'
  fallbackLng: 'uz',    // <-- и тут тоже на 'uz'
  interpolation: { escapeValue: false }
});


function App() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <nav className='p-4 relative'>
        <div className='flex justify-center items-center'>
          <div className='relative flex flex-col items-center'>
            <img className='w-56' src={Save} alt="Save" />
            <img className='w-48 absolute top-6 left-3' src={Instruction} alt="Instruction" />
          </div>
        </div>
        <select
          onChange={handleLanguageChange}
          className="absolute top-4 left-[340px] bg-gray-900 text-white px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004109] transition duration-300"
        >
          <option value="uz">O'z</option>
          <option value="ru">Ру</option>
          <option value="en">En</option>
        </select>
        <ul className='flex items-center justify-center mt-14 text-xs space-x-8 text-[#004109]'>
          <li>{t('usage')}</li>
          <li>{t('information')}</li>
          <li>{t('guarantee')}</li>
        </ul>
      </nav>

      <div className='flex items-center justify-center mt-4 relative'>
        <video
          src={Save1}
          className="w-[320px] h-[180px] rounded-[30px] shadow-2xl bg-gray-500"
          autoPlay
          muted
          loop
          playsInline
        />
        <img className='absolute w-60 top-1 left-36' src={OnVid} alt="On Video" />
      </div>

      <section className='mt-10 '>
        <h1 className='text-xl font-semibold ml-6 tracking-wider'>
          {t('how_to_use_card')}
        </h1>
        <div className='text-[#295E3E] font-bold px-14 flex flex-col items-baseline pt-5'>
          <p>{t('benefit_1')}</p>
          <p>{t('benefit_2')}</p>
          <p>{t('benefit_3')}</p>
          <video
  src={Save2}
  className="w-[320px] h-[168px] rounded-[30px] mt-6 shadow-2xl bg-gray-500 "
  autoPlay
  muted
  loop
  playsInline
/>
        </div>
      </section>

      <section className='mt-10'>
        <h1 className='text-xl font-semibold ml-6 tracking-wider'>
          {t('guarantee_title')}
        </h1>
        <div className='text-[#295E3E] font-bold px-14 flex flex-col items-baseline pt-5'>
          <p>{t('guarantee_1')}</p>
          <p>{t('guarantee_2')}</p>
          <p>{t('guarantee_3')}</p>
          <video
  src={Save3}
  className="w-[320px] h-[168px] rounded-[30px] mt-6 shadow-2xl bg-gray-500 "
  autoPlay
  muted
  loop
  playsInline
/>

        </div>
      </section>

      <section className='mt-10'>
        <h1 className='text-xl font-semibold ml-6 tracking-wider'>
          {t('how_to_save_card')}
        </h1>
        <div className='text-[#004109] font-bold space-y-2 flex flex-col items-baseline pl-10 pt-5'>
          <p>{t('save_condition_1')}</p>
          <p>{t('save_condition_2')}</p>
          <p>{t('save_condition_3')}</p>
        </div>
      </section>  

      <footer className='w-full h-72 bg-[#5F5F5F] mt-10 text-white flex items-center pl-10'>
        <div className='space-y-6 text-xl'>
          <p>Telegram <br /><a href="https://t.me/@saveit_consultant">@saveit_consultant</a></p>
          <p>Instagram <br /><a href="https://www.instagram.com/saveit_uz?igsh=dnNpaDA2N2I1Nzdu">@saveit_uz</a></p>
          <p className='pb-10'>{t('tel_number')}<br /><a href="tel:+998901105407">+998 90 110 54 07</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
