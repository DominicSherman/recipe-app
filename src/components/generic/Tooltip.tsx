import {
  useMotionValue,
  animate,
  motion,
  AnimationOptions,
} from 'framer-motion';
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

  const animationConfig: AnimationOptions<number> = {
    duration: 0.2,
    type: 'spring',
  };

  const handleShowTooltip = useCallback(() => {
    if (isHovering && enabled) {
      setShowTooltip(true);
    }
  }, [isHovering, enabled]);

  useEffect(() => {
    if (isHovering) {
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
