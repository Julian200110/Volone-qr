/***********************
 * TikTokFoodUI.jsx
 * - Al iniciar, todas las secciones empiezan en su primer plato
 * - Si dejas una sección a la mitad, y vuelves luego, retoma ahí
 ***********************/
import React, { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

import styled, { createGlobalStyle } from "styled-components";

// ====== SWIPER IMPORTS (versión 10+)
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  SECTIONS,
  SECTIONS_DISCOTECA,
  ChampagnePartyAlcoholIcon,
  RestaurantIcon,
} from "./data/constants";
import PostComponent from "./components/PostComponent";
// =============== GlobalStyles ===============
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.3);
    border-radius: 3px;
  }

.swiper-pagination {
  background-color: #00100e33;
  border-radius: 28px;
  padding: 10px;
}

.swiper-pagination-bullet {
  background-color: #fff; 
  width: 5px;
  height: 5px;
  opacity: 0.6;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.swiper-pagination-bullet-active {
  height: 20px;
  opacity: 1;
}
`;
const ALLERGENS_MAP = {};

// ===================== COMPONENTE PRINCIPAL =====================
const TikTokFoodUI = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [expandedPost, setExpandedPost] = useState(null);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeMode, setActiveMode] = useState("restaurante");

  // Índice de sección activa (Swiper horizontal)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  // Guardaremos refs a cada Swiper vertical
  const verticalSwipersRef = useRef([]);

  // <<-- AÑADIMOS LA LÓGICA DE "primera vez" -->
  // Bandera para saber si es la primera carga
  const [firstLoad, setFirstLoad] = useState(true);

  // Cantidad de iconos en la barra inferior
  const [buttonsToShow, setButtonsToShow] = useState(5);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      const isIphone = /iPhone/i.test(navigator.userAgent || "");
      // iPhone con ancho >= 390 => 5 iconos, si no < 400 => 3 iconos
      if (isIphone && w >= 390) {
        setButtonsToShow(5);
      } else if (w < 400) {
        setButtonsToShow(3);
      } else {
        setButtonsToShow(5);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const translations = {
    es: {
      title: "MENÚ",
      seeMore: "Ver Más",
      seeLess: "Ver Menos",
      selectLanguage: "Seleccionar idioma",
      close: "Cerrar",
      list: "List",
    },
    en: {
      title: "MENU",
      seeMore: "See More",
      seeLess: "See Less",
      selectLanguage: "Select Language",
      close: "Close",
      list: "List",
    },
  };

  const currentSections =
    activeMode === "restaurante" ? SECTIONS : SECTIONS_DISCOTECA;
  const totalSections = currentSections.length;

  // Expandir/cerrar
  const handleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  // Favoritos
  const toggleFavorite = (post) => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === post.id);
      return exists
        ? prev.filter((item) => item.id !== post.id)
        : [...prev, post];
    });
  };

  // Añadir a pedidos
  const addToOrders = (post) => {
    setOrders((prev) => {
      const exists = prev.find((item) => item.id === post.id);
      return exists ? prev : [...prev, post];
    });
  };

  // Cambio de idioma
  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode);
    setShowLanguageModal(false);
  };

  // Lógica: al montar cada Swiper vertical, lo guardamos
  // y luego si es la primera carga, lo mandamos a la diapositiva 0
  const handleVerticalSwiperInit = (verticalSwiper, index) => {
    verticalSwipersRef.current[index] = verticalSwiper;

    // Si todavía es firstLoad => lo ponemos en la diapositiva 0
    // (para asegurarnos de que arranquen en el primer plato)
    if (firstLoad) {
      verticalSwiper.slideTo(0, 0); // sin animación
    }
  };

  // Al terminar el primer render, quitamos la bandera
  // Significa que ya "inicializamos" todo a la posición 0
  useEffect(() => {
    if (firstLoad) {
      // Esperamos un ciclo (por si no se han montado todos los swipers verticales)
      setTimeout(() => {
        setFirstLoad(false);
      }, 0);
    }
  }, [firstLoad]);

  // Al cambiar de sección (horizontal)
  const onHorizontalSlideChange = (swiperInstance) => {
    const newIndex = swiperInstance.activeIndex;
    setActiveSectionIndex(newIndex);

    // Nota: ya NO forzamos slideTo(0) en la nueva sección,
    // para que si dejaste a la mitad, se conserve.
    // (Si quisieras forzarlo, lo harías aquí, pero no es tu caso.)
  };

  // Barra inferior
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const maxOffset =
    totalSections - buttonsToShow >= 0 ? totalSections - buttonsToShow : 0;
  const offset = Math.min(activeSectionIndex, maxOffset);
  const visibleSections = currentSections.slice(offset, offset + buttonsToShow);
  const [showPrincipal, setShowPrincipal] = useState(true);
  // Cambiar el estado automáticamente 2 segundos después de cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrincipal(false); // Cambia a false después de 2 segundos
    }, 2000); // 2 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <>
      <GlobalStyles />

      <div className="h-screen w-[415px] overflow-hidden bg-black text-white relative mx-auto">
        {/* INTRO */}
        {showPrincipal ? (
          <div className="h-full w-full flex items-center justify-center">
            {/* <video
              src="/video/portada.mp4"
              className="w-full h-full object-cover pointer-events-none"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setShowIntro(false)}
            /> */}
            <div className="relative w-full h-full">
              {/* Imagen de fondo */}
              <img
                src="/img/restaurant.svg"
                alt="Spanish"
                className="w-full h-full object-cover"
              />

              {/* Imagen centrada */}
              <img
                src="/img/Logo_Restaurant.svg" // Aquí pon la ruta de tu imagen pequeña
                alt="Sushi Logo"
                className="absolute top-1/2 left-1/2 w-222 h-35 transform -translate-x-1/2 -translate-y-1/2"
              />
              {/* Imagen adicional centrada al final */}
              <img
                src="/img/Footer.svg" // Aquí pon la ruta de tu imagen adicional
                alt="Additional Image"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
              />
            </div>
          </div>
        ) : (
          <>
            {/* SWIPER HORIZONTAL (SECCIONES) */}
            <Swiper
              className="w-full h-full"
              modules={[Pagination]}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={0}
              nested={true}
              onSwiper={(instance) => setSwiperRef(instance)}
              onSlideChange={onHorizontalSlideChange}
            >
              {currentSections.map((section, hIndex) => (
                <SwiperSlide
                  key={section.id}
                  className="m-0 p-0 w-full h-full"
                  style={{ backgroundColor: "#000" }}
                >
                  {/* SWIPER VERTICAL (POSTS) */}
                  <Swiper
                    direction="vertical"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={0}
                    nested={true}
                    onSwiper={(verticalSwiper) =>
                      handleVerticalSwiperInit(verticalSwiper, hIndex)
                    }
                    className="w-full h-full"
                  >
                    {section.posts.map((post, vIndex) => (
                      <SwiperSlide
                        key={post.id}
                        className="m-0 p-0 w-full h-full"
                        style={{ backgroundColor: "#000" }}
                      >
                        <PostComponent
                          post={post}
                          expandedPost={expandedPost}
                          handleExpand={handleExpand}
                          translations={translations}
                          selectedLanguage={selectedLanguage}
                          toggleFavorite={toggleFavorite}
                          favorites={favorites}
                          addToOrders={addToOrders}
                          orders={orders}
                          activeSection={section.id}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* NAVEGACIÓN INFERIOR (ICONOS) */}
            <motion.nav
              className="fixed top-0 backdrop-blur-md bg-black/60
                        w-full px-4 py-2 z-50 max-w-[415px] rounded-b-[13px]"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="max-w-screen-xl mx-auto flex items-center justify-center relative">
                {/* Flecha IZQUIERDA */}
                {offset > 0 && (
                  <motion.button
                    onClick={() => {
                      if (activeSectionIndex > 0) {
                        const newIndex = activeSectionIndex - 1;
                        setActiveSectionIndex(newIndex);
                        if (swiperRef) swiperRef.slideTo(newIndex);
                      }
                    }}
                    className="absolute left-0 p-2 focus:outline-none
                               rounded-lg text-gray-300 hover:text-white"
                    whileHover={buttonVariants.hover}
                    whileTap={buttonVariants.tap}
                    aria-label="Flecha izquierda"
                  >
                    <Icon icon="mdi:chevron-left" className="text-3xl" />
                  </motion.button>
                )}

                {/* Iconos (centrados) */}
                <div className="flex items-center justify-center gap-4 w-4/5">
                  {visibleSections.map((section) => {
                    const IconComp = section.icon;
                    const realIndex = currentSections.indexOf(section);
                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => {
                          setActiveSectionIndex(realIndex);
                          if (swiperRef) swiperRef.slideTo(realIndex);
                        }}
                        className={`flex flex-col items-center p-2 focus:outline-none rounded-lg w-1/5 ${
                          activeSectionIndex === realIndex
                            ? "text-[#E50051]"
                            : "text-white hover:text-[#E50051]"
                        }`}
                        aria-label={section.label}
                        whileHover={buttonVariants.hover}
                        whileTap={buttonVariants.tap}
                      >
                        <IconComp className="text-3xl" />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Flecha DERECHA */}
                {offset + buttonsToShow < totalSections && (
                  <motion.button
                    onClick={() => {
                      if (activeSectionIndex < totalSections - 1) {
                        const newIndex = activeSectionIndex + 1;
                        setActiveSectionIndex(newIndex);
                        if (swiperRef) swiperRef.slideTo(newIndex);
                      }
                    }}
                    className="absolute right-0 p-2 focus:outline-none
                               rounded-lg text-gray-300 hover:text-white"
                    whileHover={buttonVariants.hover}
                    whileTap={buttonVariants.tap}
                    aria-label="Flecha derecha"
                  >
                    <Icon icon="mdi:chevron-right" className="text-3xl" />
                  </motion.button>
                )}
              </div>
            </motion.nav>
            <motion.nav
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0  w-full max-w-[415px] px-4 py-2 z-50 overflow-hidden mx-auto rounded-b-[13px] "
            >
              <div className="relative flex items-center justify-center gap-12">
                {/* Enlaces de navegación */}
                <a className="text-white hover:text-[#E50051] flex items-center justify-center">
                  <img className="w-7 h-7" src="/img/Perfil.svg" alt="Perfil" />
                </a>
                <a className="text-white hover:text-[#E50051] flex items-center justify-center">
                  <img className="w-10 h-10" src="/img/Menu.svg" alt="Menú" />
                </a>
                <a className="text-white hover:text-[#E50051] flex items-center justify-center">
                  <img className="w-7 h-7" src="/img/Pedido.svg" alt="Pedido" />
                </a>
                <a className="text-white hover:text-[#E50051] flex items-center justify-center">
                  <img className="w-7 h-7" src="/img/Info.svg" alt="Info" />
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </div>
    </>
  );
};

export default TikTokFoodUI;
