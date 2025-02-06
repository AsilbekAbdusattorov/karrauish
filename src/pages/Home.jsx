import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Hero from "/src/components/Hero.jsx";
import Section1 from "/src/img/1.png";
import Section2 from "/src/img/2.png";
import Section3 from "/src/img/3.png";
import Section4 from "/src/img/4.png";
import Section5 from "/src/img/5.png";
import Sherzod from "/src/img/sherzod.png";
import swipper1 from "/src/img/swipper1.jpeg";
import swipper2 from "/src/img/swipper2.jpeg";
import swipper3 from "/src/img/swipper3.jpeg";
import swipper4 from "/src/img/swipper4.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero />

      <main className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <section>
          <div className="w-full max-w-7xl mx-auto px-5">
            <motion.h2
              className="text-white text-center text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Тадбиркорлар учун дастур:
            </motion.h2>

            <motion.p
              className="text-white text-center text-lg md:text-xl font-semibold mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Қандай қилиб бизнесни кенгайтириш ва даромадни ошириш мумкин?
            </motion.p>

            {/* Kartalar grid shaklda */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Card 1 */}
              <motion.div
                className="max-w-sm md:max-w-md bg-black border rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <motion.h2
                    className="text-4xl py-1 px-4 text-white border rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    1
                  </motion.h2>
                  <motion.p
                    className="text-white ml-3 font-semibold text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    Бизнесини масштаблаштиришни хоҳлайдиган бизнесменлар учун.
                  </motion.p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="max-w-sm md:max-w-md bg-black border rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <motion.h2 className="text-4xl py-1 px-4 text-white border rounded-full">
                    2
                  </motion.h2>
                  <motion.p className="text-white ml-3 font-semibold text-lg md:text-xl">
                    Даромадини оширишни хоҳловчи тадбиркорлар учун.
                  </motion.p>
                </div>
              </motion.div>

              {/* Card 3 (Centered) */}
              <motion.div
                className="max-w-sm md:max-w-md bg-black border rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800 mx-auto md:col-span-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <motion.h2 className="text-4xl py-1 px-4 text-white border rounded-full">
                    3
                  </motion.h2>
                  <motion.p className="text-white ml-3 font-semibold text-lg md:text-xl">
                    Ўз йўналишини бозорда мустаҳкам ўрнатишни хоҳлайдиган
                    бизнесменлар учун.
                  </motion.p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                className="max-w-sm md:max-w-md bg-black border rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <motion.h2 className="text-4xl py-1 px-4 text-white border rounded-full">
                    4
                  </motion.h2>
                  <motion.p className="text-white ml-3 font-semibold text-lg md:text-xl">
                    Янги бозорга чиқишни истайдиган тадбиркорлар учун.
                  </motion.p>
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                className="max-w-sm md:max-w-md bg-black border rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <motion.h2 className="text-4xl py-1 px-4 text-white border rounded-full">
                    5
                  </motion.h2>
                  <motion.p className="text-white ml-3 font-semibold text-lg md:text-xl">
                    Бизнесини юқори даражага олиб чиқишни истайдиганлар учун.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-gray-900">
          <div className="w-full max-w-7xl mx-auto px-5">
            <h2 className="text-blue-500 mb-7 text-4xl font-bold text-center">
              Курс қуйидаги форматда бўлади
            </h2>
            <p className="text-white text-xl font-semibold text-center mb-3">
              Тошкентда бир ҳафтада бир маротаба жонли
            </p>
            <p className="text-white text-xl font-semibold text-center">
              учрашув ташкил қилинади.
            </p>
            <p className="text-white text-xl font-semibold text-center mb-10">
              ушбу муаммоларга ечим топамиз:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-5">
              {[Section1, Section2, Section3, Section4, Section5].map(
                (image, index) => (
                  <div
                    key={index}
                    className="transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
                  >
                    <img
                      className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-contain"
                      src={image}
                      alt={`Section ${index + 1}`}
                    />
                    <p className="text-white mt-5 text-center text-xl font-semibold p-4">
                      {
                        [
                          "Фикрлаш ва психология",
                          "Бизнес- моделлар ва бозор",
                          "Хамкорлик ва жамоа",
                          "Маркетинг - лидогенерация",
                          "Сотув- мотиватция",
                        ][index]
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full max-w-7xl mx-auto px-5">
            <h2 className="text-white font-bold text-4xl text-center mb-10">
              Қуйидаги маълумотларга эга бўласиз:
            </h2>

            <div className="flex flex-col gap-8">
              {[
                "Масштаблашиш учун босқичма-босқич режа.",
                "Тизимли ўсиш учун кўрсатмалар - молиядан, жамоагача.",
                "Миллиард рубллик лойиҳаларни амалга оширишда ёрдам берган ҳаракатлар",
                "Бизнесга зиён етказмаган ҳолда масштаблашишни аниқ кўрсатмалар.",
                "Қандай қилиб мижозларни кўпайтириш.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="relative border rounded-[40px] w-full sm:w-[750px] md:w-[800px] lg:w-[850px] flex justify-center items-center mx-auto p-4 min-h-[85px]"
                >
                  <p className="absolute left-5 -top-4 w-12 h-12 flex items-center justify-center bg-black text-white text-3xl font-bold border rounded-full">
                    {index + 1}
                  </p>
                  <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl text-center px-8">
                    {text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full max-w-7xl mx-auto px-5">
            <h2 className="text-blue-500 font-bold text-4xl text-center">
              Мақсадлар
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 mt-10 sm:mt-12 lg:mt-16">
              {[
                "Тизимли равишда ракобатчилардан устунликка эришиш.",
                "Бизнесни тизимлаштириш: ходимларни ишга олиш, сотув, маркетинг.",
                "Кандай килиб жамоани самарали бошкариш ва энг кучли жамоа йигиш.",
                "Узингиз учун шахсий вакт ажратиш ва операцион тизимдан чикиш.",
                "Усиш нуктасини топиб, соф фойдани ошириш.",
                "Мижозлар окимини бир неча карра устириш.",
              ].map((text, index) => (
                <div
                  key={index}
                  className="border rounded-3xl w-full max-w-[305px] h-[148px] mx-auto hover:scale-105 hover:bg-blue-500 transition-all duration-300 p-4 flex flex-col items-center justify-center"
                >
                  <p className="text-blue-500 font-bold bg-black text-xl sm:text-2xl lg:text-3xl px-3 py-1 rounded-md mb-4">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </p>
                  <p className="text-white text-center text-sm sm:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="w-full max-w-7xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="w-full max-w-[599px] h-[auto]">
                <img
                  src={Sherzod}
                  alt="Sherzod"
                  className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="border-t border-r border-l rounded-3xl text-center w-full max-w-[500px] h-[auto] p-5 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-blue-500 text-2xl font-semibold py-2 group-hover:text-white transition-all duration-300">
                    «Евродизайн» асосчиси.
                  </h3>
                  <p className="text-white pb-2">
                    270 000 000 миллион доллардан <br />
                    ошик оборотга чиққан компания
                  </p>
                  <p className="text-white">
                    Россияда ўз соҳаси бўйича топ 3 таликка кирган
                  </p>
                </div>

                <div className="border-t border-r border-l rounded-3xl text-center w-full max-w-[500px] h-[auto] p-5 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-blue-500 text-2xl font-semibold py-2 group-hover:text-white transition-all duration-300">
                    «Вилгуд» ақлли автосервислар <br /> тармоғини нолдан бошлаб
                    қурган
                  </h3>
                  <p className="text-white pb-2">
                    1 800 000 000 рубль оборотга чиққан.
                  </p>
                  <p className="text-white">
                    Россия “Forbes”да 2017- йилда “Йилнинг энг яхши <br />
                    франшизаси” топ 3талигига кирган.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full max-w-7xl mx-auto px-5">
            <h2 className="text-blue-500 font-bold text-4xl text-center">
              Асосий модуллар.
            </h2>

            <div className="flex flex-col py-10 gap-10">
              {/* 1-Modul */}
              <div className="w-full max-w-4xl mx-auto border rounded-3xl p-6 bg-gray-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <p className="text-white text-5xl font-bold">01</p>
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                    Тадбиркор психологияси: ички холатни ўзгартириш.
                  </h2>
                </div>
                <p className="text-white mt-6 text-lg">
                  Мақсад: Тадбиркорда нотўғри шаклланган ички ресурслардан халос
                  бўлиб, ички тўсиқларни енгиб ўтиб, бизнесининг ўсиши ва
                  ривожланиши учун барқарор фикрлашни шакллантириш.
                </p>
                <ul className="text-white mt-4 space-y-2">
                  <li className="text-lg">
                    ✅ Блоклар билан ишлаш: қўрқувларни енгиш
                  </li>
                  <li className="text-lg">
                    ✅ Қарор қабул қилишда ишончни ошириш
                  </li>
                  <li className="text-lg">
                    ✅ Лидерлик руҳиятини шакллантириш, рискларни қабул қилиш
                  </li>
                  <li className="text-lg">✅ Энергия бошқарувини яхшилаш</li>
                  <li className="text-lg">
                    ✅ Стресли вазиятларда чидамлиликни ошириш усуллари
                  </li>
                </ul>
              </div>

              {/* 2-Modul */}
              <div className="w-full max-w-4xl mx-auto border rounded-3xl p-6 bg-gray-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <p className="text-white text-5xl font-bold">02</p>
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                    Бизнес моделлар ва брендлар разбори.
                  </h2>
                </div>
                <p className="text-white mt-6 text-lg">
                  Максад: Бизнеснинг заиф томонларини аниқлаб, моделни
                  мустахкамлаш ва кучли бренд қуриш.
                </p>
                <ul className="text-white mt-4 space-y-2">
                  <li className="text-lg">
                    ✅ Ҳозирги бизнес моделингиз таҳлили: нима ишлаяпти, қаерда
                    бизнесингиз оқсаяпти.
                  </li>
                  <li className="text-lg">
                    ✅ УТП (ноёб савдо таклифини) яратиш
                  </li>
                  <li className="text-lg">
                    ✅ Мижозларни ўзига тортадиган бренд қуриш
                  </li>
                  <li className="text-lg">✅ Молиявий оқимни яхшилаш</li>
                  <li className="text-lg">✅ Қатнашувчилар кейслари</li>
                </ul>
              </div>

              {/* 3-Modul */}
              <div className="w-full max-w-4xl mx-auto border rounded-3xl p-6 bg-gray-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <p className="text-white text-5xl font-bold">03</p>
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                    Жамоа: одамлар орқали бизнесни кучайтириш.
                  </h2>
                </div>
                <p className="text-white mt-6 text-lg">
                  Максад: Кучли жамоа тузишни ўрганиш.
                </p>
                <ul className="text-white mt-4 space-y-2">
                  <li className="text-lg">
                    ✅ Сизнинг бизнесингизга туртки берувчи ходимни топиш
                  </li>
                  <li className="text-lg">
                    ✅ Бренд атрофида эко система яратиш
                  </li>
                  <li className="text-lg">
                    ✅ Жамоани доимий ривожланишга йўналтириш
                  </li>
                </ul>
              </div>

              {/* 4-Modul */}
              <div className="w-full max-w-4xl mx-auto border rounded-3xl p-6 bg-gray-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <p className="text-white text-5xl font-bold">04</p>
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                    Маркетинг ва лидогенерация.
                  </h2>
                </div>
                <p className="text-white mt-6 text-lg">
                  Максад: Янги мижозларни жалб қилиш ва бор мижозларни сақлаб
                  қолиш.
                </p>
                <ul className="text-white mt-4 space-y-2">
                  <li className="text-lg">✅ УТП яратиш</li>
                  <li className="text-lg">✅ Реклама каналларини танлаш</li>
                  <li className="text-lg">✅ Бюджетни оптималлаштириш</li>
                  <li className="text-lg">✅ Лидогенерацияни ривожлантириш</li>
                </ul>
              </div>

              {/* 5-Modul */}
              <div className="w-full max-w-4xl mx-auto border rounded-3xl p-6 bg-gray-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <p className="text-white text-5xl font-bold">05</p>
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold">
                    Сотув, автоматизация ва мотивация.
                  </h2>
                </div>
                <p className="text-white mt-6 text-lg">
                  Максад: Сотув бошқарувининг асосий тамойилларини ўрганиш ва
                  татбиқ етиш, бизнес жараёнларининг автоматизацияси.
                </p>
                <ul className="text-white mt-4 space-y-2">
                  <li className="text-lg">
                    ✅ Сотув бўлимининг асосий KPI лари
                  </li>
                  <li className="text-lg">✅ Сотув стратегиялари</li>
                  <li className="text-lg">
                    ✅ Сотув жараёнини автоматизация қилиш
                  </li>
                  <li className="text-lg">
                    ✅ Жамоа иш самарадорлигини ошириш
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full max-w-7xl mx-auto px-5">
            <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-20">
              Сентябр/октябр ойларида Кара усиш фоторепортажлар
            </h2>

            <div className="flex justify-center relative">
              {/* Custom prev va next tugmalar */}
              <button className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-12 h-12 bg-white/70 text-gray-800 rounded-full flex items-center justify-center z-10 hover:bg-white transition-all swiper-button-prev sm:block lg:block hidden">
                ❮
              </button>
              <button className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-12 h-12 bg-white/70 text-gray-800 rounded-full flex items-center justify-center z-10 hover:bg-white transition-all swiper-button-next sm:block lg:block hidden">
                ❯
              </button>

              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1} // Telefon ekranda faqat 1 ta slayd ko'rsatiladi
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                centeredSlides={true} // Markazdagi slaydni kattaroq qilish
                breakpoints={{
                  // 1024px va undan katta ekranlarda 3 ta slayd ko'rsatiladi
                  1024: {
                    slidesPerView: 3, // 3 ta slayd
                    spaceBetween: 30, // Slaydlar orasidagi bo'shliq
                  },
                }}
                className="w-full max-w-[860px]"
              >
                {[swipper1, swipper2, swipper3, swipper4].map(
                  (image, index) => (
                    <SwiperSlide
                      key={index}
                      className="scale-90 transition-all duration-300 ease-in-out swiper-slide"
                    >
                      <img
                        className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover rounded-lg mb-10"
                        src={image}
                        alt="img"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="py-10">
      <div className="w-full max-w-7xl mx-auto px-5">
        <h2 className="text-white text-4xl text-center font-bold mb-20">
          Шарҳлар
        </h2>

        <div className="flex justify-center relative">
          {/* Custom prev va next tugmalar */}
          <button className="absolute top-1/2 -left-10 transform -translate-y-1/2 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center z-10 hover:bg-gray-600 transition-all my-custom-prev">
            ❮
          </button>
          <button className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center z-10 hover:bg-gray-600 transition-all my-custom-next">
            ❯
          </button>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".my-custom-next", // Custom class for next button
              prevEl: ".my-custom-prev", // Custom class for prev button
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full max-w-3xl sm:max-w-full lg:max-w-3xl"
          >
            {/* Video Slaydlar */}
            {[
              "https://www.youtube.com/embed/yJN_St-UyqQ",
              "https://www.youtube.com/embed/KOTZ9MS2Glo",
              "https://www.youtube.com/embed/zlW55aAxLE0",
              "https://www.youtube.com/embed/0jjlo91pxkM",
            ].map((url, index) => (
              <SwiperSlide
                key={index}
                className={`flex justify-center transition-all duration-300 ease-in-out
                ${index === 1 ? "scale-110 z-10" : "scale-90 opacity-70"}`}
              >
                <iframe
                  className="w-full max-w-lg h-[315px] mx-auto block"
                  src={url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
      </main>
    </>
  );
};

export default Home;
