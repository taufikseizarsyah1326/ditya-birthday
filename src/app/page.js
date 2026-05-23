'use client'

import {
  useEffect,
  useState,
  useRef,
} from 'react'

import { motion } from 'framer-motion'

export default function BirthdayInvitation() {
  const targetDate = new Date('2026-05-25T00:00:00')
  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] =
    useState(false)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(
          difference / (1000 * 60 * 60 * 24)
        )

        const hours = Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        )

        const minutes = Math.floor(
          (difference / (1000 * 60)) % 60
        )

        const seconds = Math.floor(
          (difference / 1000) % 60
        )

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const itinerary = [
    {
      time: '08:30 WIB',
      title: 'Intimate Time',
      place: 'Sudhaa Hotel',
      icon: '🏨',
    },
    {
      time: '12:30 WIB',
      title: 'Lunch',
      place: 'Ubihiro Nikudon',
      icon: '🍽️',
    },
    {
      time: '15:00 WIB',
      title: 'Photobooth',
      place: 'Braga',
      icon: '📸',
    },
    {
      time: '18:00 WIB',
      title: 'Bandung Night Ride',
      place: 'Bandros Bandung',
      icon: '🚌',
    },
  ]

  const gallery = [
    {
      image: '/images/foto1.jpg',
    },
    {
      image: '/images/foto10.jpeg',
    },
    {
      image: '/images/foto5.jpg',
    },
    {
      image: '/images/foto9.JPG',
    },
  ]

  return (
    <div className="bg-[#1A120B] text-[#f6e9dc] min-h-screen overflow-x-hidden font-[Poppins] scroll-smooth">
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source
          src="/music/extraordinary-magic.mp3"
          type="audio/mp3"
        />
      </audio>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover scale-110"
          style={{
            backgroundImage:
              "url('/images/foto7.jpg')",
            backgroundPosition: 'center 80%',
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#1A120B]/40" />

        {/* CONTENT */}
        <div className="relative z-10 px-6 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-sm text-[#d6b18f] mb-6">
            A Special Day For
          </p>

          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-6 text-[#f8e7d3]">
            Ditya Putri I
          </h1>

          <div className="w-28 h-[1px] bg-[#d6b18f] mx-auto mb-6" />

          <p className="text-lg md:text-xl text-[#e7d2c0] italic mb-10">
            “Every moment with you feels like
            extraordinary magic.”
          </p>

          {/* BUTTON */}
          <button
            onClick={() => {
              audioRef.current.play()
              setIsPlaying(true)

            document
              .getElementById('main-content')
              .scrollIntoView({
               behavior: 'smooth',
               })
            }}
            className="border border-[#d6b18f] px-10 py-4 rounded-full hover:bg-[#d6b18f] hover:text-[#1A120B] transition-all duration-500 tracking-widest uppercase text-sm"
          >
            Open Invitation
          </button>

          <p className="mt-10 text-[#caa58d] text-sm tracking-[0.3em]">
            25 MAY 2026
          </p>
          <button
            onClick={() => {
             if (isPlaying) {
              audioRef.current.pause()
              setIsPlaying(false)
            } else {
              audioRef.current.play()
              setIsPlaying(true)
            }
          }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2B1810]/80 border border-[#C8A27A]/40 backdrop-blur-md flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 shadow-2xl"
        >
          {isPlaying ? '⏸️' : '🎵'}
        </button>
        </div>
      </motion.section>

      {/* ROMANTIC SECTION */}
      <motion.section
        id="main-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-28 px-6 md:px-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#d6b18f] tracking-[0.3em] uppercase text-sm mb-4">
              Happy Birthday
            </p>

            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Dek Ditya ❤️ (hehe) 
            </h2>

            <p className="text-lg leading-9 text-[#e8d9cb]">
              Thank you for being my safe place,
              my calmest home, and the reason why
              ordinary days feel beautiful. This
              little website is just a tiny
              reminder that every memory with you
              matters so much to me.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4A2C20] to-[#2B1810] border border-[#C8A27A]/30 flex items-center justify-center text-2xl">
                🎵
              </div>

              <div>
                <p className="font-semibold">
                  Extraordinary Magic
                </p>

                <p className="text-sm text-[#caa58d]">
                  Ben Rector
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/foto4.jpg"
              className="rounded-[2rem] object-cover w-full h-[650px] shadow-2xl"
            />

            {/* DRESSCODE */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#3B2418]/90 to-[#24150F]/90 backdrop-blur-md border border-[#C8A27A]/30 rounded-[2rem] p-6 max-w-xs">
              <p className="text-[#d6b18f] text-sm uppercase tracking-[0.2em] mb-3">
                Dresscode
              </p>

              <p className="text-xl font-serif">
                Brown Top • Black Bottom
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* COUNTDOWN */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#3B2418]/90 to-[#24150F]/90 rounded-[3rem] p-12 border border-[#C8A27A]/30 backdrop-blur-md">
          <p className="uppercase tracking-[0.3em] text-center text-[#d6b18f] text-sm mb-5">
            Countdown To The Day
          </p>

          <h2 className="text-4xl md:text-6xl text-center font-serif mb-16">
            25 May 2026
          </h2>

          {/* COUNTDOWN GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {[
              {
                value: timeLeft.days,
                label: 'Days',
              },
              {
                value: timeLeft.hours,
                label: 'Hours',
              },
              {
                value: timeLeft.minutes,
                label: 'Minutes',
              },
              {
                value: timeLeft.seconds,
                label: 'Seconds',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#3B2418]/90 to-[#24150F]/90 border border-[#C8A27A]/30 rounded-[2.5rem] min-h-[220px] flex flex-col items-center justify-center backdrop-blur-md shadow-2xl"
              >
                <h3 className="text-6xl md:text-7xl font-serif tracking-wide mb-4">
                  {item.value}
                </h3>

                <p className="uppercase tracking-[0.3em] text-[#d6b18f] text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 px-6 md:px-20">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[#d6b18f] text-sm mb-5">
            Our Memories
          </p>

          <h2 className="text-5xl md:text-7xl font-serif">
            Little Pieces of Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="rotate-[-2deg] hover:rotate-0 transition-all duration-500 bg-gradient-to-br from-[#3B2418]/90 to-[#24150F]/90 p-4 rounded-[2rem] border border-[#C8A27A]/20 shadow-xl"
            >
              <img
                src={item.image}
                className="w-full h-[360px] object-cover rounded-[1.5rem]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-28 px-6 md:px-20 bg-[#24150F] relative overflow-hidden">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#d6b18f] text-sm mb-5">
            Birthday Itinerary
          </p>

          <h2 className="text-5xl md:text-7xl font-serif mb-6">
            Our Day Together
          </h2>

          <p className="text-[#d9c7ba] text-lg max-w-2xl mx-auto leading-8">
            A little journey through Bandung,
            filled with warm conversations,
            laughter, memories, and moments I
            never want to forget.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#C8A27A]/30 hidden md:block" />

          <div className="space-y-14">
            {itinerary.map((item, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 0
                    ? ''
                    : 'md:[&>*:first-child]:order-2'
                }`}
              >
                <div
                  className={`${
                    i % 2 === 0
                      ? 'md:text-right'
                      : 'md:text-left'
                  }`}
                >
                  <p className="text-[#d6b18f] tracking-[0.2em] uppercase text-sm mb-3">
                    {item.time}
                  </p>

                  <h3 className="text-3xl font-serif mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[#e3d3c7] text-lg">
                    {item.place}
                  </p>
                </div>

                <div className="relative flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4A2C20] to-[#2B1810] border border-[#C8A27A]/30 flex items-center justify-center text-4xl shadow-2xl z-10">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOVE NOTE */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,90,68,0.25),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-[#d6b18f] text-sm mb-6">
            A Little Note For You
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-[1.4] mb-10">
            “Thank you for being part of my
            life.
            <br />
            You make every ordinary day feel
            like magic.”
          </h2>

          <p className="text-[#dbcabd] text-lg leading-9 max-w-3xl mx-auto">
            I don’t know how many birthdays
            we’ll celebrate together in the
            future, but I know every memory
            with you will always become one of
            my favorites.
          </p>

          <p className="mt-14 text-4xl font-serif text-[#d6b18f] italic">
            I Love You ❤️
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-[center_80%]"
          style={{
            backgroundImage:
              "url('/images/foto2.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#1A120B]/60 backdrop-blur-[2px]" />

        <div className="relative z-10 px-6">
          <p className="uppercase tracking-[0.3em] text-[#d6b18f] text-sm mb-5">
            See You Soon
          </p>

          <h2 className="text-5xl md:text-8xl font-serif mb-10">
            Sayang ❤️
          </h2>

          <button className="px-10 py-4 border border-[#d6b18f] rounded-full hover:bg-[#d6b18f] hover:text-[#1A120B] transition-all duration-500 tracking-[0.2em] uppercase text-sm">
            Can’t Wait!
          </button>

          <p className="mt-10 text-[#d9c7ba] text-lg italic">
            With all my love.
          </p>
        </div>
      </section>
    </div>
  )
}