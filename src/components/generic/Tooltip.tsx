import {
  useMotionValue,
  animate,
  motion,
  AnimationOptions,
} from 'framer-motion';
import { useRef } from 'react';
import { useState, useEffect, useCallback } from 'react';

interface ITooltipProps {
  children: React.ReactNode;
  HoverItem: React.ReactNode;
  enabled?: boolean;
}

export const Tooltip = ({ children, HoverItem, enabled }: ITooltipProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const scale = useMotionValue(0);
  const isHoveringRef = useRef(isHovering);

  isHoveringRef.current = isHovering;

  const animationConfig: AnimationOptions<number> = {
    duration: 0.2,
    type: 'spring',
  };

  const handleShowTooltip = useCallback(() => {
    if (isHoveringRef.current && enabled) {
      setShowTooltip(true);
    }
  }, [isHoveringRef, enabled]);

  useEffect(() => {
    if (isHoveringRef.current) {
      setTimeout(handleShowTooltip, 500);
    } else {
      setShowTooltip(false);
    }
  }, [isHovering, handleShowTooltip]);

  useEffect(() => {
    if (showTooltip) {
      animate(scale, 1, animationConfig);
    } else {
      animate(scale, 0, animationConfig);
    }
  }, [scale, showTooltip, animationConfig]);

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      <motion.div
        className="absolute top-[-28px]"
        style={{ opacity: scale, scale }}
      >
        {HoverItem}
      </motion.div>
    </div>
  );
};
