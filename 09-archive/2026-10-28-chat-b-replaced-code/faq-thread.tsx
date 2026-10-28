"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useSound } from "@/components/providers/sound-provider";

// FAQ as a chat thread: the question lands, a typing indicator, then the answer.
// The answer text is in the page from the start, so it reads fine without script.

const ease = [0.22, 1, 0.36, 1] as const;

export function FaqThread({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((it) => (
        <Pair key={it.q} q={it.q} a={it.a} />
      ))}
    </div>
  );
}

function Pair({ q, a }: { q: string; a: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(false);
  const { play } = useSound();

  useEffect(() => {
    if (!inView) return;
    const t = window.setTimeout(
      () => {
        setTyped(true);
        if (!reduce) play("pop");
      },
      reduce ? 0 : 1000,
    );
    return () => window.clearTimeout(t);
  }, [inView, reduce, play]);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <motion.p
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
        transition={{ duration: 0.5, ease }}
        className="max-w-[86%] self-end rounded-[40px] rounded-br-none bg-bubble px-6 py-4 text-[17px] leading-[1.5] text-bubble-ink sm:text-[18px]"
      >
        {q}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease, delay: 0.3 }}
        className="relative max-w-[86%] self-start rounded-[40px] rounded-bl-none px-6 py-4 text-[17px] leading-[1.5] text-ink sm:text-[18px]"
        style={{ background: "var(--glass-card)", boxShadow: "var(--inset-bubble)" }}
      >
        <motion.span
          initial={false}
          animate={{ opacity: typed ? 1 : 0, filter: typed ? "blur(0px)" : "blur(4px)" }}
          transition={{ duration: 0.45, ease }}
        >
          {a}
        </motion.span>
        {!typed && (
          <span className="absolute top-1/2 left-6 flex -translate-y-1/2 gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="size-1.5 rounded-full bg-ink"
                style={{ animation: `typing 1s ease-in-out ${i * 0.15}s infinite` }}
              />
            ))}
          </span>
        )}
      </motion.div>
    </div>
  );
}
