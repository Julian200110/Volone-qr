import React from "react";
import { motion } from "framer-motion";

const ActionButton = ({
  post,
  object,
  onClick,
  FillICon,
  EmptyIcon,
  fillLabel,
  emptyLabel,
}) => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    tap: { scale: 0.95 },
  };
  return (
    <motion.button
      className="w-[30px] h-[30px]  rounded-full
                     hover:bg-amber-500 active:bg-amber-700 flex items-center justify-center"
      onClick={() => onClick(post)}
      whileHover={buttonVariants.hover}
      whileTap={buttonVariants.tap}
      aria-label={
        object.some((item) => item.id === post.id) ? fillLabel : emptyLabel
      }
    >
      <motion.div
        animate={{
          scale: object.some((item) => item.id === post.id) ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {object.some((item) => item.id === post.id) ? (
          <FillICon className="text-white w-[25px] h-[25px]" />
        ) : (
          <EmptyIcon className="text-white w-[25px] h-[25px]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ActionButton;
