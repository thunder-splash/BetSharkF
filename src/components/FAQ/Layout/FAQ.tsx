"use client"

import React, { useState } from "react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const faqData = [
    {
      question: "Who are we? BetShark",
      answer: "BetShark is...",
    },
    {
      question: "How does the jackpot work?",
      answer: "The jackpot works by...",
    },
    {
      question: "How does the roulette work?",
      answer: "The roulette works by...",
    },
    {
      question: "How does the coinflip work?",
      answer: "The coinflip works by...",
    },
    {
      question: "How does the dice work?",
      answer: "The dice works by...",
    },
    {
      question: "How to refill my account balance?",
      answer: "You can top up your balance through a variety of cryptocurrencies. This can be done in your profile, through the tab «Balance». Just select the desired currency and transfer funds to wallet. The amount will be credited within 15 minutes and will appear in your profile. The minimum amount to deposit is $100.",
    },
    {
      question: "How do I withdraw money from my account?",
      answer: "To withdraw money from your account...",
    },
  ];

  const [activeItems, setActiveItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (activeItems.includes(index)) {
      setActiveItems(activeItems.filter((item) => item !== index));
    } else {
      setActiveItems([...activeItems, index]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.FAQ_container}>
        <div className={styles.headerContainer}>
          <img
            src="/help-circle-white.svg"
            alt="Help Circle Icon"
            className={styles.icon}
          />
          <h1>Frequently Asked Questions</h1>
          <div className={styles.headerContent}>
            <button className={styles.supportButton}>Write to support</button>
          </div>
        </div>
        <p className={styles.subtext}>
          In this block, we have collected and answered the most frequently asked questions.
        </p>
      </div>
      <section className={styles.section}>
        <div className={styles.faqSection}>
          <div className={styles.faqColumn}>
            {faqData.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  activeItems.includes(index) ? styles.active : ""
                }`}
                onClick={() => toggleItem(index)}
              >
                <div className={styles.faqContent}>
                  <span>{item.question}</span>
                  <span
                    className={styles.toggleButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(index);
                    }}
                  >
                    {activeItems.includes(index) ? "-" : "+"}
                  </span>
                </div>
                <div className={styles.faqAnswer}>{item.answer}</div>
              </div>
            ))}
          </div>
          <div className={styles.faqColumn}>
            {faqData.slice(4, 7).map((item, index) => (
              <div
                key={index + 4}
                className={`${styles.faqItem} ${
                  activeItems.includes(index + 4) ? styles.active : ""
                }`}
                onClick={() => toggleItem(index + 4)}
              >
                <div className={styles.faqContent}>
                  <span>{item.question}</span>
                  <span
                    className={styles.toggleButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(index + 4);
                    }}
                  >
                    {activeItems.includes(index + 4) ? "-" : "+"}
                  </span>
                </div>
                <div className={styles.faqAnswer}>{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
