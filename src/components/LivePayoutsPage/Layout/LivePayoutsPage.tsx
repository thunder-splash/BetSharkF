"use client"

import React from "react";
import Image from 'next/image';
import styles from "./LivePayoutsPage.module.css";
import LivePayouts from "@/components/LivePayoutsPage/Layout/LivePayoutsHistory/LivePayoutsHistory";

export default function LivePayoutsPage() {
  return (
      <div>
          <img src="/greenbgflow.svg" alt="light" className={styles.greenbg}/>
          <div className={styles.container}>
              <div className={styles.Payouts_container}>
                  <div className={styles.headerContainer}>
                      <Image className={styles.icon} src="/clock-white.svg" alt="Clock White Icon" width={20} height={20} />
                      <h1>Live Payouts</h1>
                  </div>
              </div>
              <section className={styles.section}>
                  <LivePayouts/>
              </section>
          </div>
      </div>
  );
}
