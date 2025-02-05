import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Hero1 from "/src/img/hero1.png";
import Hero2 from "/src/img/hero2.png";
import Hero3 from "/src/img/hero3.png";
import Hero4 from "/src/img/hero4.png";

const Hero = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    option: "Дастур хақида биламан, лекин саволларим бор.",
  });

  const botToken = "YOUR_BOT_TOKEN"; // 🛑 Bot tokeningizni qo'ying
  const chatId = "YOUR_CHAT_ID"; // 🛑 Telegram chat ID-ni qo'ying

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `📩 Yangi ariza!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\nℹ️ Variant: ${formData.option}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });

      alert("✅ So‘rovingiz yuborildi!");
      setFormData({ phone: "", name: "", option: formData.option });
    } catch (error) {
      alert("❌ Xatolik yuz berdi!");
      console.error("Telegramga yuborishda xatolik:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-10"
    >
      <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Form va Matn */}
        <div className="flex flex-col">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-3xl font-semibold"
          >
            Тадбиркорлар учун дастур
          </motion.h2>

          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white px-3 py-2 rounded-2xl text-black font-bold my-5 text-center w-[375px]"
          >
            Даты: 29.01 / 05.02 / 12.02 / 19.02 / 26.02
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="space-y-4"
          >
            <label className="text-white text-sm">Telefon рақами</label>
            <motion.input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+998 99-999-9999"
              whileFocus={{ scale: 1.05, borderColor: "#4A90E2" }}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
              required
            />
            <label className="text-white text-sm">Исм</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Иван Иванов"
              whileFocus={{ scale: 1.05, borderColor: "#4A90E2" }}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
              required
            />
            <label className="text-white text-sm">Вариантларни танлаш</label>
            <motion.select
              name="option"
              value={formData.option}
              onChange={handleChange}
              whileFocus={{ scale: 1.05 }}
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            >
              <option>
                Хеч кандай маълумотим йўқ, тўлиқроқ билишни хоҳлайман.
              </option>
              <option>Дастур ҳақида биламан, лекин саволларим бор.</option>
              <option>
                Дастурни ўрганиб чиқдим, тўлов қилишга тайёрман.
              </option>
            </motion.select>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full p-3 mt-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Отправить заявку
            </motion.button>
          </motion.form>
        </div>

        {/* Slayder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-lg"
        >
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full"
          >
            <SwiperSlide>
              <motion.img
                src={Hero1}
                alt="Hero1"
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <motion.img
                src={Hero2}
                alt="Hero2"
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <motion.img
                src={Hero3}
                alt="Hero3"
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <motion.img
                src={Hero4}
                alt="Hero4"
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
