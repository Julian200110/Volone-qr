import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import ActionButton from "./ActionButton";

const PostComponent = ({
  post,
  expandedPost,
  handleExpand,
  translations,
  selectedLanguage,
  toggleFavorite,
  favorites,
  addToOrders,
  orders,
  activeSection,
  isActive,
}) => {
  const postVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      key={`${activeSection}-${post.id}`}
      id={`post-${activeSection}-${post.id}`}
      className="relative w-full h-full overflow-hidden"
      style={{ height: "100vh" }}
      variants={postVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* FONDO: VIDEO (o fallback) */}
      <motion.div className="absolute inset-0">
        {post.video ? (
          <motion.video
            src={post.video}
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="w-full h-full bg-transparent" />
        )}

        {/* Gradiente para legibilidad */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.09) 60%, rgba(0, 0, 0, 0.89) 100%)",
          }}
        >
          {/* Contenido aquí */}
        </div>

        {/* Sombra extra si está expandido */}
        <AnimatePresence>
          {expandedPost === post.id && (
            <motion.div
              className="absolute inset-0 bg-black/50 pointer-events-none"
              style={{ zIndex: 10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      {/* BOTONES DE ACCIÓN (FAVORITO, AÑADIR) */}
      <div
        className="absolute flex flex-col gap-4 z-30 justify-center right-0"
        style={{
          bottom: "calc(var(--navbar-height) + 10px)", // Sube 10px
          padding: "0 18px 18px 0",
        }}
      >
        {/* PRECIO */}
        <motion.p
          className="text-base font-bold text-white border border-white rounded-[14px] p-2 flex flex-col w-[120px] h-[85px] items-center justify-center bg-[#A4A4A4]/22 backdrop-blur-md underline text-center"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm">Precio</p>{" "}
          {/* Tamaño más pequeño para "Precio" */}
          <p className="text-[14px]">{post.price}</p>{" "}
          {/* Tamaño más grande para el precio */}
        </motion.p>
      </div>
      {/* BOTONES DE ACCIÓN (FAVORITO, AÑADIR) */}
      <div
        className="absolute flex flex-col gap-4 z-30 justify-center left-0"
        style={{
          bottom: "var(--navbar-height)",
          padding: "0 18px 18px 0",
        }}
      ></div>

      {/* INFORMACIÓN DEL POST (TEXTO) */}
      <div
        className="absolute bottom-0 flex z-10 pt-[10px] w-full"
        style={{
          paddingBottom: "var(--navbar-height)",
          background:
            "linear-gradient(180deg,#25150000 0%,#25150080 30%,#251500b3 60%,#251500cc 100%)",
        }}
      >
        <section
          className="w-full items-end justify-between"
          style={{
            maxHeight: "185px",
            padding: "10px 20px 20px",
            wordBreak: "break-word",
          }}
        >
          <div className="text-white max-w-full w-[90%] h-full">
            <motion.p
              className="text-lg font-bold mt-2 gap-2 flex items-start w-[250px] "
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ActionButton
                post={post}
                object={orders}
                onClick={addToOrders}
                FillIcon={AiFillPlusCircle}
                EmptyIcon={AiOutlinePlusCircle}
                fillLabel={"Eliminar de pedidos"}
                emptyLabel={"Agregar a pedidos"}
              />
              {post.title}
            </motion.p>
            <motion.div
              className="flex items-center gap-4"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            ></motion.div>

            {/* DESCRIPCIÓN */}
            <motion.div
              className="flex flex-col text-base space-between "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-2  w-[500px]">
                {" "}
                {/* Contenedor flex para alinear el botón y el título */}
                <ActionButton
                  post={post}
                  object={favorites}
                  onClick={toggleFavorite}
                  FillIcon={AiFillHeart}
                  EmptyIcon={AiOutlineHeart}
                  fillLabel={"Eliminar favorito"}
                  emptyLabel={"Agregar a favoritos"}
                />
                <p className="text-gray-200 font-Manrope text-[12px] w-[200px] flex flex-col">
                  {expandedPost === post.id
                    ? post.longDescription
                    : post.description}
                  <motion.span
                    onClick={() => handleExpand(post.id)}
                    className="text-white hover:text-[#E50051] cursor-pointer underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedPost === post.id
                      ? translations[selectedLanguage].seeLess
                      : translations[selectedLanguage].seeMore}
                  </motion.span>
                </p>
              </div>

              {/* EXTRA INFO, SI EXPANDIDO */}
              <AnimatePresence>
                {expandedPost === post.id && post.extraInfo && (
                  <motion.div
                    key="extra"
                    className="mb-4"
                    variants={ALLERGENS_MAP}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="text-gray-200 text-sm mb-2">
                      {post.extraInfo}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

PostComponent.propTypes = {
  post: PropTypes.object.isRequired,
  expandedPost: PropTypes.number,
  handleExpand: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  addToOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default PostComponent;
